import Card from '../card/card';
import {TOffer} from '../../types/offer';

type TListOffersProps = {
  offers: TOffer[];
}

function ListOffers({offers} :TListOffersProps) {
  return (
    offers.map((place) => (
      <Card place={place} key={place.id}/>
    ))
  );
}

export default ListOffers;
