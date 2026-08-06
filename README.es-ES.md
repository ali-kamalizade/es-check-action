

# es-check-action

![Checks](https://github.com/ali-kamalizade/es-check-action/workflows/Checks/badge.svg?branch=master)

Esta acción de GitHub verifica archivos JavaScript contra una versión especificada de ECMAScript (ES). Si la versión ES de un archivo especificado no coincide con el argumento de versión ES, esta acción lanzará un error y registrará los archivos que no cumplieron con la verificación.

En las compilaciones modernas de JavaScript, los archivos se empaquetan para que puedan servirse de manera optimizada en los navegadores. Los desarrolladores suelen asumir que el JavaScript futuro, como ES8, será transpilado (convertido de JavaScript futuro a JavaScript actual) adecuadamente por una herramienta como Babel o TypeScript. A veces ocurre que los archivos no se transpilan, lo cual generaría problemas en navegadores que no soportan todas las características más recientes (por ejemplo, IE11).

[Consulta mi artículo de blog sobre este tema.](https://medium.com/better-programming/check-your-javascript-bundles-for-browser-support-d769c1fca4c)

## Características

- Velocidad: esta verificación no debería tardar más de unos segundos
- Flexibilidad: elige qué archivos deben ser verificados
- Compatibilidad: elige la versión ES a la que deseas apuntar. `ES5` es una buena opción para tener compatibilidad máxima

## Entradas

- `directory` - Directorio que debe ser verificado
- `ecmaVersion` - La versión de ECMAScript a verificar contra un patrón glob de archivos JavaScript
- `files` - Un patrón glob de archivos contra los cuales probar la versión de ECMAScript

## Ejemplo de uso

Crea un [workflow](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) y pega esto

```yaml
- uses: actions/es-check-action@1.0.2
  with:
    directory: 'dist'
    ecmaVersion: 'es5'
    files: '*.js'
```

## Configuración del desarrollo local

1. Descarga el repositorio.
2. Instala Node.js si aún no lo has hecho.
3. Usa `npm ci` para instalar las dependencias necesarias.
4. El código fuente está escrito en TypeScript en el directorio `src`.
5. Ejecuta `npm run build` para compilar la biblioteca.
6. Ejecuta `npm test` para ejecutar las pruebas con Jest.

## Contribución

¡Las solicitudes de extracción (pull requests) y las solicitudes de nuevas características son bienvenidas!

## Agradecimientos

- [es-check](https://github.com/dollarshaveclub/es-check) es la herramienta subyacente que hace posible esto
