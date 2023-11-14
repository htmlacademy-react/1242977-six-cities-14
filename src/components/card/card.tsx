
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TOffer } from '../../types/offer';

type TCardProps = {
  place: TOffer;
};
function Card({place} :TCardProps) {
  const {isPremium, isFavorite, previewImage, price, rating, title, type} = place;

  const [, setHoverPlace] = useState<TOffer>();
  return (
    <article onMouseEnter={() => setHoverPlace(place)} onMouseLeave={() => setHoverPlace(undefined)} className="cities__card place-card">
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Offer}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(rating / 5) * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
