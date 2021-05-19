# Cliente
El cliente por defecto iniciara en el puerto 3000. 
## ¿Porque decidí utilizar TailwindCss?
Si bien una de las críticas más fuertes con las que me cruce cuando busque información sobre Tailwind fue *"deja el código muy sucio"* (la cual comparto hasta cierto punto), definitivamente lo prefiero en lugar de su rival Bootstrap. Me fue mucho más fácil de entender y de poder utilizar, y me fue bastante útil a la hora de realizar cambios puntuales en algún componente en particular, ya que todo su estilo se encuentra en el componente mismo.
##### Hay muchas clases de Tailwind que se repiten en tu codigo...
Sí, es verdad. No soy un experto en Tailwind, apenas estoy empezando a estudiarlo y practicarlo. Varias de las clases podrían haberse unificado bajo un mismo nombre en el archivo index.css pero decidí concentrarme en la parte lógica más que en la estética de esta aplicación.

## ¿Porque implemente Redux?
Cuando comencé a desarrollar la parte del cliente me surgió una inquietud sobre los estados en React y como podía compartirlos entre componentes. Hasta donde sabia, tenía que pasar estos estados como props a los distintos componentes, lo cual, cuando la aplicación fue creciendo se transformó en un árbol con varias ramas, difícil y frustrante de seguir. Conocía de Redux, pero mis conocimientos hasta ese punto no hicieron más que dificultarme la resolución del problema (por mi inexperiencia y escaso conocimiento de esta tecnología, a decir verdad). En un momento decidí poner el freno, y al mirar lo que había echo, me pareció bastante... terrible.
Así que me tomé unos días para aprender más sobre Redux, descubrí react-redux y cuando entendí como podía implementarlo, comencé de nuevo. El desarrollo fue más fácil y llevadero, pero lo más importante, podía resolver el problema como me lo había planteado desde un principio. Fue genial ;)

