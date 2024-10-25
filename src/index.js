import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './context/FavoritesContext';

ReactDOM.render(
    <FavoritesContextProvider>
        <App />
    </FavoritesContextProvider>,
    document.getElementById('root')
);