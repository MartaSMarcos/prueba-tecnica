# Prueba técnica

## Ejercicio 2

Para ejecutar el proyecto:
* Desde una terminal, ir a la carpeta react-meetup e introducir el comando **npm start**
* Desde otra terminal, ir a la carpeta public e introducir el comando **npm run json-server**
* En el navegador, introducir la dirección **localhost:3001**

Para realizar la animación del header, se ha utlizado un useEffect con eventos de window en el fichero MainNavigation.js.

Para las rutas implementadas en los links del header se ha hecho uso del componente Route de react-dom en el fichero App.js.

Para el botón se favorito, se ha implementado la funcionalidad para que, si el meetup no es favorito, aparezca el botón de añadirlo a favoritos y, en el caso de que ya sea favorito, aparezca el botón de eliminar favorito. Esto se realiza en el fichero MeetupItem.js.
Se ha implementado un json server para guardar los meetups favoritos en un fichero favorites.json. Este se carga y modifica desde FavoritesContext.js mediante useEffect y handlers para añadir y eliminar meetups.
