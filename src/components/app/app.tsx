import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import NotFound from '../../pages/notFound-page/notFound-page';
import FavoritesPage from '../../pages/favorites-page/favortes-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';

export type Place = {
  mark: string;
  image: string;
  price: number;
  priceText: string;
  bookmark?: boolean;
  rating?: number;
  name: string;
  type: string;
  id: number;
};

type AppProps = {
  places: Place[];
};

function App({places}: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage places={places}/>}
          />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute restrictedFor={AuthorizationStatus.NoAuth} redirectTo={AppRoute.Login}>
              <FavoritesPage />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Login} element={
            <PrivateRoute restrictedFor={AuthorizationStatus.Auth} redirectTo={AppRoute.Root}>
              <LoginPage />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
