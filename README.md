# Prueba técnica

## Ejercicio 2

### Ejecución del proyecto
Para ejecutar el proyecto:
* Desde una terminal, ir a la carpeta react-meetup e introducir el comando **npm start**
* Desde otra terminal, ir a la carpeta public e introducir el comando **npm run json-server**
* En el navegador, introducir la dirección **localhost:3001**

### Parte 1: Animación del header
Para realizar la animación del header, se ha utlizado un useEffect con eventos de window en el fichero MainNavigation.js. En este caso, dependiendo de la dirección del desplazamiento, se determina si la barra de navegación debe estar visible o no.

### Parte 2: Rutas de los elementos del navbar
Para las rutas implementadas en los links del header se ha hecho uso del componente Route de react-dom en el fichero App.js. Las rutas que se han implementado son:
* / y /all-meetups: Ambas renderizan el componente AllMeetupsPage para mostrar todas las reuniones.
* /favorites: Muestra las reuniones que se han marcado como favoritas.
* /add-new-meetup: Muestra un formulario para crear una nueva nueva reunión.

### Parte 3: Favoritos
Para el botón se favorito, se ha implementado la funcionalidad para que, si el meetup no es favorito, aparezca el botón de añadirlo a favoritos y, en el caso de que ya sea favorito, aparezca el botón de eliminar favorito. Esto se realiza en el fichero MeetupItem.js.
Se ha implementado un json server para guardar los meetups favoritos en un fichero favorites.json. Este se carga y modifica desde FavoritesContext.js mediante useEffect y handlers para añadir y eliminar meetups.

### Parte 4: Añadir nueva reunión
En cuanto a la implementación de la funcionalidad de añadir nueva reunión, se han modificado, principalmente, los ficheros NewMeetup.js y NewMeetupForm.js. Además, se ha creado un fichero MeetupsContext.js. A continuación, se explica el funcionamiento:

* **MeetupsContext.js:** Este fichero se ha creado para gestionar el estado de las reuniones. Utiliza el API Context de React para proporcionar datos de las reuniones a los componentes sin la necesidad de pasar props manualmente. La función que va a permitir añadir una nueva reunión es addMeetup.

* **NewMeetupForm.js:** Este fichero contiene el formulario que hay que rellenar para añadir una nueva reunión. Se le pasa como props onAddMeetup para gestionar la adición de una nueva reunión.

* **NewMeetup.js**: En este archivo se utiliza el contexto anteriormente mencionado para la gestión de la adición de una reunión. En la función addMeetupHandler, se le pasa como parámetro meetupData, que contiene la información que proviene del formulario y llama a la función addMeetup desde el contexto.