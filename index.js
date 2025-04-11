import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

function processTransactions(CSVFile) {
    const data = fs.readFileSync(CSVFile, 'utf-8');
    const lines = data.split('\n').map(line => line.trim()).filter(line => line);
    
    let balance = 0;
    let supTransaction = { id: null, amount: 0 };
    let count = { 'Crédito': 0, 'Débito': 0 };
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        const [id, tipo, amount] = line.split(',');
        const numericAmount = parseFloat(amount.replace(',', '.').trim());

        if (isNaN(numericAmount)) {
            console.error(`Monto inválido en línea: ${line}`);
            continue;
        }

        if (tipo === 'Crédito') {
            balance += numericAmount;
            count['Crédito']++;
        } else if (tipo === 'Débito') {
            balance -= numericAmount;
            count['Débito']++;
        }

        if (numericAmount > supTransaction.amount) {
            supTransaction = { id, amount: numericAmount };
        }
    }

    return { balance, supTransaction, count };
}

function showReport(balance, supTransaction, count) {
    console.log(chalk.bold("📊 Reporte de Transacciones"));
    console.log(chalk.gray("---------------------------------------------"));
    console.log(`💰 ${chalk.green('Balance Final')}: ${chalk.greenBright(balance.toFixed(2))}`);
    console.log(`🏦 ${chalk.yellow('Mayor Transacción')}: ID ${chalk.bold(supTransaction.id)} - ${chalk.yellowBright(supTransaction.amount.toFixed(2))}`);
    console.log(`📈 ${chalk.cyan('Créditos')}: ${count['Crédito']} | ${chalk.red('Débitos')}: ${count['Débito']}`);
}

if (process.argv.length < 3) {
    console.error(chalk.red('❌ Uso: npm run start'));
    process.exit(1);
}

const CSVFile = path.resolve(process.argv[2]);

if (!fs.existsSync(CSVFile)) {
    console.error(chalk.red('❌ Error: El archivo especificado no existe.'));
    process.exit(1);
}

const { balance, supTransaction, count } = processTransactions(CSVFile);
showReport(balance, supTransaction, count);