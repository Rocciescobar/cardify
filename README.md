# Cardify

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

## Introducción 

Este proyecto consiste en implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo elemento `<figure>` que contenga la imagen `<img>` y además de un `<figcaption>`
con el texto del atributo `alt` de la imagen, el cual se visualiza al momento de hacer un `hover` sobre la imagen.

## Plan de trabajo

El proyecto se desarrolló en una semana y se propusieron los siguientes checklists de progreso para cada etapa:

#### ETAPA 1

* Escribir primera versión del `README.md` que contenga una descripción general del proyecto y el desarrollo del plugin.
* Crear issues y milestones que sirvan como hoja de ruta (roadmap).
* Inicializar proyecto con `npm init` y `git init`.
* Crear `index.html` con ejemplo principal de uso.

#### ETAPA 2

Implementar funcionalidad esencial (función Cardify):

* Agregar etiqueta `<figure>` a cada elemento `<img>` que se encuentre dentro del contenedor.
* Agregar etiqueta `<figcaption>` a cada elemento `<img>` que se encuentre dentro del contenedor.
* Mostrar información del atributo 'alt' al hacer hover sobre cada imagen.
* Agregar estilos css para cuando se hace hover sobre cada imagen.

#### ETAPA 3

* Completar implementación del plugin con un sistema de grillas.
* Preparar demo/presentación (incluye ejemplos).
* Publicar el ejemplo principal (`index.html`) en GitHub pages.

Se utiliza Trello para el seguimiento de las tareas planificadas:

![Con titulo](public/assets/docs/trello.png "titulo")

## Archivos importantes

El proyecto presenta los siguientes archivos para uso del usuario:

* `README.md` con descripción de la librería, instrucciones de instalación, uso y ejemplos.
* `index.js`: Plugin que exporta una función u objeto al entorno global (`window`).
* `index.css`: Archivo css que contiene los estilos de hover y grilla.
* `index.html`: Página web del plugin que contiene demo y archivos de descarga (index.js e index.css).
* `package.json` con nombre, versión, descripción, autores, licencia, dependencias, scripts (pretest, test, ...).

## Especificaciones

* Se utilizó la librería jQuery en su versión 3.2.1.
* Se utilizó el estándar más recientemente aceptado de JavaScript ES2015 || ES6.
* Se utilizó el transpilador/compilador Babel para que convierta nuestro código en ES5 de forma automática.
* Se utilizó el propio sistema de grillas que se incluye en la función cardify.

***

## Instalación

### Global (navegador)

```html
<link rel="stylesheet" href="index.css">
```

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="index.js"></script>
```

## Uso
* `container` es el selector del contenedor donde se buscarán todas las imágenes a ser procesadas.
* En la variable `config` se define el tipo de efecto (filtro/filter) al hacer hover.

```js
var config = 'grayscale(50%)';
$('.container').cardify(config);
```

Para ver más opciones de `filtros` dar click [aquí](https://developer.mozilla.org/es/docs/Web/CSS/filter "titulo").

## Demo
Para ver el demo dar click [aquí](https://manu160296.github.io/cardify/public/index.html "titulo").

## Ejemplo
Al usar la función cardify, el archivo html quedaría ordenado semánticamente así:

```html
<figure class="figureStyle">
    <img alt="Change your views" style="filter: grayscale(50%);">
    <figcaption class="figcaptionStyle displayBlock">Change your views</figcaption>
</figure>
```

![Con titulo](public/assets/docs/ejemplo.jpg "titulo")

***

## Autoras

* Rocci Escobar Nuñez [Cuenta GitHub](https://github.com/Rocciescobar "titulo")
* Manuela Flores Vilchez [Cuenta GitHub ](https://github.com/Manu160296 "titulo")