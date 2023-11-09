
import { TFavorite } from '../../mocks/favorites';
import FavoritesPlaces from '../favorites-places/favorites-places';

type TFavoritesCardProps = {
  favorites: TFavorite;
}

function FavoritesCard({ favorites }: TFavoritesCardProps) {
  const { city, offer } = favorites;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offer.map((item) => (
          <FavoritesPlaces places={item} key={item.previewImage} />
        ))}
      </div>
    </li>
  );
}

export default FavoritesCard;
