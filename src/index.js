import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './context/FavoritesContext';
import { MeetupsContextProvider } from './context/MeetupsContext';

ReactDOM.render(
    <FavoritesContextProvider>
        <MeetupsContextProvider>
            <App />
        </MeetupsContextProvider>
    </FavoritesContextProvider>,
    document.getElementById('root')
);