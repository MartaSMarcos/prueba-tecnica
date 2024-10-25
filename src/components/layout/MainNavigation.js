import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from "./MainNavigation.module.css";
import FavoritesContext from '../../context/FavoritesContext';

export default function MainNavigation({ setPage, favoritesCount = 0 }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const favContext = useContext(FavoritesContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header 
      className={`${classes.header} ${!visible ? classes.headerHidden : ''}`} 
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
        <li>
            <Link to="/all-meetups" className={classes.link}>
              All Meetups
            </Link>
          </li>
          <li>
            <Link to="/add-new-meetup" className={classes.link}>
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to="/favorites" className={classes.link}>
              My Favorites
              <span className={classes.badge}>{favContext.favorites.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}