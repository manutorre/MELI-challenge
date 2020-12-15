# MELI challenge - Manuel Federico Torre

Para correr el proyecto localmente:

`npm install`

`npm run dev:start-server` (este script genera los builds del cliente y del Server side para luego servirlo en el puerto 3000)



Algunas notas sobre el challenge:

El proyecto cumple con los siguientes requerimientos:

* Server side rendering: La aplicación está preparada para pre-renderizar el código React a través de NodeJs del lado del servidor.
* Búsqueda de productos mediante barra de búsqueda.
* Acceso a detalles del producto.
* breadcrumb generado en base a las categorías de los resultados o del producto seleccionado
* Estilos: Se respetaron los estilos especificados
* Test unitarios: Se testearon los componentes React

Notas técnicas:

* React hooks: La aplicación está desarrollada con react hooks y no con componentes tipo clase.
* El proyecto no fue creado con create-react-app para no instalar el boilerplate inicial. Si bien es de gran utilidad y suelo usarlo, en este caso, quise construir desde cero. Utilicé el stack detallado en el enunciado.
* Estilos: Se trabaja con SCSS y con CSS-Modules para aislar el alcance de las distintas clases. Prefiero personalmente utilizar CSS/SCSS antes que styled components o inline styles.
* Testing: se utiliza Jest con Testing-library
* La implementación de la API (que es consumida dentro de la aplicación) está implementada en el archivo src/server/api.js

Cosas que faltaron por falta de tiempo. 

* Typescript: Parcialmente implementado con typescript
* Más tests: Me hubiera gustado proporcionar más tests (para la API y tests más extensos para los componentes)
* E2E Testing: No pude enfocarme en testing end to end.
