import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import FavoritesCard from '../../components/favorites-card/favorites-card';
import { Link } from 'react-router-dom';
import { TFavorite } from '../../mocks/favorites';

type TFavoritesPageProps = {
  favorites: TFavorite[];
}
function FavoritesPage({ favorites }: TFavoritesPageProps) {

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - favorites'}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to='/login'>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                favorites.map((item) => (
                  <FavoritesCard favorites={item} key={item.city} />
                ))
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo />
      </footer>
    </div>
  );
}

export default FavoritesPage;
