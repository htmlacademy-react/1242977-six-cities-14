import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offer';
import { favorites } from './mocks/favorites';

// console.log(favorites.map((item) => item.city.name).filter((item, index, array) => item !== array[index - 1]));
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} favorites={favorites}/>
  </React.StrictMode>
);
