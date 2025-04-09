# Reto técnico de Cobol - Codeable

## Introducción:

Desarrolla una aplicación de línea de comandos (CLI) que procese un archivo CSV con transacciones bancarias y genere un reporte que incluya:

Balance Final:
Suma de los montos de las transacciones de tipo "Crédito" menos la suma de los montos de las transacciones de tipo "Débito".

Transacción de Mayor Monto:
Identificar el ID y el monto de la transacción con el valor más alto.

Conteo de Transacciones:
Número total de transacciones para cada tipo ("Crédito" y "Débito").

## Instrucciones de Ejecución:

Verificar tener instalado node con el siguiente comando:

```html
node -v
```

Instalar las dependencias del proyecto:

```html
npm install
```

Finmalmente, ejecuta el programa con el siguiente comando:

```html
npm run start
```

## Enfoque y Solución:

### Lógica implementada:

Este programa está diseñado para procesar un archivo CSV con transacciones bancarias y generar un reporte de las transacciones realizadas. Los pasos principales del flujo de trabajo son:

1. Lectura del archivo CSV:
Utilizando el módulo fs, el archivo CSV se lee en formato de texto y se procesa línea por línea.

2. Procesamiento de cada transacción:
Se dividen las líneas en campos usando el separador ;.
Para cada línea, se extrae el ID, el tipo de transacción (Crédito o Débito), y el monto.
El monto se convierte a formato numérico para realizar operaciones aritméticas (se reemplazan las comas por puntos en caso de ser necesario).

3. Cálculo del balance:
El balance total se calcula sumando o restando el monto según el tipo de transacción (Crédito o Débito).

4. Seguimiento de la transacción mayor:
Durante la iteración, se mantiene un registro de la transacción de mayor monto (ya sea Crédito o Débito).

5. Conteo de transacciones:
Se lleva un conteo de cuántas transacciones de tipo Crédito y Débito se han realizado.

6. Generación del reporte:
Al final, se imprime un reporte con el balance final, la transacción de mayor monto, y el conteo de Créditos y Débitos.
El reporte utiliza la librería chalk para darle formato y color al texto, mejorando la legibilidad y la presentación.

### Decisiones de diseño:

1. Lectura sincrónica del archivo:
Se optó por fs.readFileSync para una implementación sencilla y rápida, donde no se espera procesamiento paralelo o asincrónico.

2. Validación de montos:
Se valida que cada monto sea un número antes de realizar operaciones aritméticas. Si el monto no es válido, se omite esa transacción y se imprime un mensaje de error.

3. Uso de chalk para formateo:
Se eligió usar la librería chalk para mejorar la presentación del reporte en la consola. Esto permite destacar valores importantes como el balance final, la mayor transacción, y los conteos de Créditos y Débitos con colores específicos.

4. Manejo de errores:
Se implementaron mensajes claros en caso de errores, como cuando el archivo no existe o cuando el formato del monto es inválido, lo que ayuda a los usuarios a comprender rápidamente qué salió mal.

5. Compatibilidad con CSV delimitado por punto y coma:
Dado que el archivo CSV tiene el separador ;, se ajustó el código para usar split(';'), lo que garantiza que el archivo se procese correctamente.

## Estructura del Proyecto:

INTERBANK-ACADEMY-25/
- .gitignore
- data.csv
- index.js
- package.json
- README.md

### gitignore:
- Este archivo especifica los archivos y carpetas que Git debe ignorar en tu proyecto. Esto es útil para excluir archivos temporales, archivos de configuración específicos del entorno, módulos de node_modules, etc., que no deberían ser rastreados por el sistema de control de versiones.

### data.csv:
- Este archivo sugiere que tu proyecto utiliza datos en formato CSV (valores separados por comas). Este archivo probablemente contiene la información que tu aplicación necesita procesar o utilizar.

### index.js:
- Este es un archivo común en proyectos de JavaScript. Generalmente, se utiliza como el punto de entrada principal de la aplicación, especialmente si estás utilizando Node.js.

### package.json:
- Este archivo es fundamental en proyectos de Node.js. Contiene metadatos sobre el proyecto (nombre, versión, descripción, autor, etc.) y lo más importante, lista las dependencias del proyecto (las librerías y paquetes de npm que tu proyecto necesita para funcionar). También puede contener scripts para automatizar tareas como ejecutar la aplicación, realizar pruebas, etc.

### README.md:
- Este archivo es una práctica estándar en la mayoría de los proyectos de software. Contiene información general sobre el proyecto, como su propósito, cómo instalarlo, cómo usarlo, y cualquier otra información relevante para los desarrolladores o usuarios. El formato .md indica que está escrito en Markdown, un lenguaje de marcado ligero.