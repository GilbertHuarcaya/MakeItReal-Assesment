
# Assesment Proyect - Make It Real

> This is an assesment project for Make it Real to show my development using javascript, react, flexbox, context and much more.

Los temporizadores están seteados de forma aleatoria de no mas ed 3 minutos, cuando llega a 0 se avisa con un botón rojo y es inaccesible dicho producto.

Los productos estan almacenados con context para evitar hacer un fetch a la api cada vez que se vuelva a la pagina Home.

Se usó Javascript, React, Sass y Flexbox para el diseño de esta página.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

```
## Deploy
[Aqui está el deploy en Vercel](https://mir-assesment-store.vercel.app/)

<br>
----------------------------------------------
<br>
<br>


# Respuestas a las preguntas del Assesment

## 1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
### ✔ Planificación del Sprint o Sprint Planning
La planificación tiene lugar al inicio de cada sprint y es donde el equipo se comunica y expone las tareas que se deben realizar durante el sprint.

### ✔ Reuniones Scrum Diarias o Daily Meetings
Son reuniones cortas de no más de 15 minutos donde se informa de manera rápida sobre el progreso y se habla sobre lo que se hizo el día anterior, lo que se hará el día de hoy y qué obstáculos han surgido.

### ✔ Sprint review
Sucede al final de cada sprint y participa todo el equipo y demás personas, aquí se comparte todo lo avanzado durante el sprint, el feedback recibido será tomado en cuenta para el siguiente sprint.

### ✔ Retrospectiva
Es necesaria para revisar la forma de trabajo del equipo durante el sprint, sirve para mejorar en equipo, resolver conflictos y mejorar la forma de trabajar de todos los integrantes.

## 2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
   Los wireframes son plantillas o esquemas en escala de grises de la estructura y funcionalidad por cada página web o pantalla de aplicación en móvil. Podemos usar Figma donde también pueden hacerse mockups.

## 3. Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.

Empezando por var, al declararse de forma global, puede ser declarada nuevamente y modificada dentro de un scope o alcance blocke por ejemplo una función o un condicional y el valor global cambiara generando así problemas si no se sabe en donde ocurrió el cambio del valor de var.
En cambio, let soluciona esto haciendo que este mismo no pueda volverse a declarar en el mismo scope pero si en diferentes scopes, el problema con él es el hoisting donde si se intenta usar let antes de haberse declarado, se obtiene un error de referencia.
Y const se usa cuando se requiera una variable constante que se mantendrá sin cambios dentro de su scope siendo necesario inicializarse al ser declarada y en el resto tiene funcionalidad como let.
Personalmente ya no uso var por los problemas que puede causar si no se tiene cuidado, let la usaría para declarar una variable que voy a cambiar más adelante como un número y const siempre y cuando quiera almacenar un valor sin cambios a futuro o un array o un objeto donde solo cambiaré los elementos dentro de estos, mas no el mismo array u objeto.

## 4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?

```bash

$ git branch rama-1

$ git checkout -b rama-1

$ git switch -C rama-1


```


## 5. Explicar la diferencia entre git merge y git rebase.
   El rebase unifica las ramas dejando un árbol lineal y puede dar con pérdidas de commits. El merge aun deja el gráfico de las ramas cada uno por separado y es mejor cuando se trabaja en equipo y cuando se tiene en cuenta cada commit hecho por cada integrante.

## 6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
   El pull request es una petición que hace alguien del equipo al terminar una funcionalidad en una rama para que los demás hagan una revisión del Código y posteriormente a ser aprobada la petición se fusiona a la rama de destino que en nuestro caso es develop si aún no pasa a la fase final.
   En cambio, git pull hace una revisión de lo que se tiene en la rama remota con el nombre de en la que estas localmente y hace un git merge de la rama remota a la rama local. En resumen, actualiza tu rama donde la ejecutas con los cambios guardados en la rama remota.

## 7. ¿Qué es el Virtual DOM?
   El virtual Dom es una copia del Dom (el cual es una representación grafica del documento de una aplicación creada por el navegador), y esta copia está guardada en memoria; al ocurrir cambios en la aplicación, el virtual Dom maneja los cambios y renderiza solo los cambios hechos al Dom y ya no todo. Ayuda a ahorrar recursos y da una experiencia más fluida al usuario al ver la aplicación en web.

## 8. Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).

[Aqui está mi solución](https://codepen.io/gilberthuarcaya/pen/MWEvPPm?editors=1100)
