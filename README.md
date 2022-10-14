# 202210-w2ch5-mireya-chaparro

Juego de la vida
Deberás de programar el Juego de la vida de Conway.
Un resumen de las reglas:

Una célula viva sigue las siguientes reglas:
Si tiene menos de 2 células contiguas vivas, muere por "soledad".
Si tiene más de 3 células contiguas vivas, muere por "sobrepoblación".
Si tiene 2 o 3 células contiguas vivas, sobrevive.
Una célula muerta sigue la siguiente regla: Permanece muerta hasta que tiene exactamente 3 células contiguas vivas, momento en el que "nace".
Si quieres probar como funciona para hacerte una idea, puedes probar una versión funcional en esta página.

Requisitos
Debe de estar testeado con Jest.
Debe utilizarse SonarQube para ir comprobando la calidad del código.
Se utilizará Husky para manejar los git-hooks, utilizando los archivos adjuntos.
Debe utilizarse GitActions el workflow adjunto.
Debe protegerse main en GitHub para que todo lo que se mergee pase por pull-request y que el workflow se cumpla.
En el caso de llegar a HTML/CSS. 4.1. Se utilizará BEM/SASS. 4.2. Se debe desplegar a Netlify.
Milestones
Programa funcional en JS. Las células se quedan pegadas la pared.
Programa 100% testeado.
Añadir HTML/CSS.
Modificar JS para que: a. Las células sigan avanzando al llegar a la pared y desaparezcan. b. Las células salgan por un lado de la cuadrícula y aparezcan por el otro.
