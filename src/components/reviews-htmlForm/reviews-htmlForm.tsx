import { ChangeEvent, Fragment, useState } from 'react';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../../const';

const ratingMap = [
  {
    value: 5,
    label: 'perfect'
  },
  {
    value: 4,
    label: 'good'
  },
  {
    value: 3,
    label: 'not bad'
  },
  {
    value: 2,
    label: 'badly'
  },
  {
    value: 1,
    label: 'terribly'
  },
];

function ReviewsHtmlForm() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const isValid = comment.length >= MIN_COMMENT_LENGTH && comment.length <= MAX_COMMENT_LENGTH && rating !== '';

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
  }
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setRating(event.target.value);
  }
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingMap.map((item) => (
          <Fragment key={item.value}>
            <input className="form__rating-input visually-hidden"
              name="rating"
              value={item.value}
              id={`${item.value}-stars`}
              type="radio"
              checked={rating === item.label}
              onChange={handleInputChange}
            />
            <label
              htmlFor={`${item.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={item.label}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextareaChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsHtmlForm;
