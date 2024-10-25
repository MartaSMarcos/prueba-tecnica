import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
  favorites: [],
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => false,
});

export function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  //Cargar datos del json al iniciar
  useEffect(() => {
    fetch("http://localhost:3002/favorites")
      .then((response) => response.json())
      .then((data) => {
        setFavorites(data || []);
      })
      .catch((error) => console.error("Error fetching favorites:", error));
  }, []);

  //Guardar datos en el json
  useEffect(() => {
    fetch("http://localhost:3002/favorites", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorites }),
    });
  }, [favorites]);

  const addFavoriteHandler = (meetup) => {
    setFavorites((prevFavorites) => [...prevFavorites, meetup]);
  
    fetch("http://localhost:3002/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetup),
    })
    .then((response) => response.json())
    .then((data) => {
      setFavorites((prevFavorites) => [...prevFavorites, data]);
    });
  };
  

  const removeFavoriteHandler = (meetupId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((meetup) => meetup.id !== meetupId);
  
      fetch(`http://localhost:3002/favorites/${meetupId}`, {
        method: "DELETE",
      });
  
      return updatedFavorites;
    });
  };

  const isFavoriteHandler = (meetupId) => {
    return favorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites,
    favoritesCount: favorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
