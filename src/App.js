import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { useContext } from "react";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import FavoritesContext from "./context/FavoritesContext";

function App() {
  const favContext = useContext(FavoritesContext);

  return (
    <Router>
    <div data-test="app">
    <MainNavigation favoritesCount={favContext.favorites.length} />
    <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/all-meetups" element={<AllMeetupsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/add-new-meetup" element={<NewMeetupsPage />} />
        </Routes>
      </Layout>
    </div>
    </Router>
  );
}

export default App;
