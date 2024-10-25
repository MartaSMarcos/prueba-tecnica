import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../context/FavoritesContext";
import { useContext } from "react";

export default function MeetupItem({id, title, image, address, description}) {
  const favContext = useContext(FavoritesContext)

  const isFavorite = favContext.isFavorite(id)

  const handlerIsFavorite = () => {
    if (isFavorite) {
      favContext.removeFavorite(id);
    } else {
      favContext.addFavorite({ id, title, image, address, description })
    }
  }

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handlerIsFavorite} className={isFavorite ? classes["remove-favorite"] : classes["add-favorite"]}>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}
