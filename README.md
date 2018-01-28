# Cardify

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

## Objetivo

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

## Flujo de trabajo

El trabajo se desarrolla en una semana y se proponen los siguientes checklists de progreso para cada etapa:

#### ETAPA 1

* Formar equipo.
* Elegir reto.
* Hacer fork de reto modelo o crear nuevo repo si has propuesto un reto no propuesto por Laboratoria.
* Escribir primera versión del `README.md` con una descripción general de la librería así como ejemplos (snippets) de uso y configuración (si fuera necesario).
* Crear issues y milestones que sirvan como hoja de ruta (roadmap)
* Inicializar proyecto con `npm init` y `git init`.
* Crear `index.html` con ejemplo principal de uso.

#### ETAPA 2

* Agregar tests que describan la `API` de tu librería y los casos de uso esperados.
* Implementar funcionalidad esencial.
* Hacer code review con compañeras e instructores.

#### ETAPA 3

* Completar implementación de librería y ejemplo principal (usando la librería).
* Hacer code review con compañeras e instructores.
* Preparar demo/presentación.
* Publicar el ejemplo principal (`index.html`) en GitHub pages.

Se utiliza Trello para el seguimiento de las tareas planificadas. Para ver el tablero, dar click [aquí](https://trello.com/b/cvxdoc2w/prod-final-sprint-04 "titulo").

## Archivos importantes

El trabajo presenta los siguientes archivos:

* `README.md` con descripción de la librería, instrucciones de instalación, uso y documentación del API.
* `index.js`: Librería debe exportar una función u objeto al entorno global (`window`) y hacer uso de features de ES6 donde sea apropiado.
* `index.html`: Página web de la librería con ejemplo funcionando.
* `package.json` con nombre, versión, descripción, autores, licencia, dependencias, scripts (pretest, test, ...)
* `.eslintrc` con configuración para linter (ver guía de estilo de JavaScript)
* `.gitignore` para ignorar node_modules u otras carpetas que no deban incluirse en control de versiones (git).

***

## Instalación

### Global (navegador)

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="path-to-cardify.js"></script>
```

## Uso

```js
// `container` es el selector del contenedor donde se buscarán todas las
// imágenes a ser procesadas.
$(container).cardify({});
```

## Documentación del API

...

## Ejemplos

...

***

## Equipo de trabajo

* Rocci Escobar Nuñez
* Manuela Flores Vilchez