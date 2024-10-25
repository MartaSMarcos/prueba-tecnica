import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {
  const favContext = useContext(FavoritesContext);

  if (favContext.favorites.length === 0) {
    return <p>You have no favorites yet. Start adding some!</p>;
  }

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {favContext.favorites.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            image={meetup.image}
            address={meetup.address}
            description={meetup.description}
          />
        ))}
      </ul>
    </section>
  );
}
