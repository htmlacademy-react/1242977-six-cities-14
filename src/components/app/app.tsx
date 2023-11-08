import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import NotFound from '../../pages/notFound-page/notFound-page';
import FavoritesPage from '../../pages/favorites-page/favortes-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { TOffer } from '../../types/offer';

type TAppProps = {
  offers: TOffer[];
  favorites: TOffer[];
};

function App({ offers, favorites}: TAppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offers={offers} />}
          />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute restrictedFor={AuthorizationStatus.NoAuth} redirectTo={AppRoute.Login}>
              <FavoritesPage favorites={favorites}/>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Login} element={
            <PrivateRoute restrictedFor={AuthorizationStatus.NoAuth} redirectTo={AppRoute.Root}>
              <LoginPage />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
