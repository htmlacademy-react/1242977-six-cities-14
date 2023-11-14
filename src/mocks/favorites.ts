export type TFavorite = {
  city: string;
  offer:
    {
      previewImage: string;
      price: number;
      rating: number;
      title: string;
      type: string;
    }[];
}
export const favorites:TFavorite[] = [
  {
    city: 'Brussels',
    offer: [
      {
        previewImage: 'https://14.react.pages.academy/static/offer/15.jpg',
        price: 210,
        rating: 4.3,
        title: 'Nice, cozy, warm big bed apartment',
        type: 'house'
      },
      {
        previewImage: 'https://14.react.pages.academy/static/offer/17.jpg',
        price: 171,
        rating: 4.3,
        title: 'The house among olive ',
        type: 'room'
      }
    ]
  },
  {
    city: 'Paris',
    offer: [
      {
        previewImage: 'https://14.react.pages.academy/static/offer/13.jpg',
        price: 288,
        rating: 4.1,
        title: 'Perfectly located Castro',
        type: 'room'
      },
      {
        previewImage: 'https://14.react.pages.academy/static/offer/4.jpg',
        price: 260,
        rating: 4.2,
        title: 'The Pondhouse - A Magical Place',
        type: 'apartment'
      },
      {
        previewImage: 'https://14.react.pages.academy/static/offer/11.jpg',
        price: 253,
        rating: 2.9,
        title: 'Perfectly located Castro',
        type: 'room'
      }
    ]
  },
  {
    city: 'Dusseldorf',
    offer: [
      {
        previewImage: 'https://14.react.pages.academy/static/offer/1.jpg',
        price: 220,
        rating: 3.7,
        title: 'Waterfront with extraordinary view',
        type: 'hotel'
      }
    ]
  },
  {
    city: 'Cologne',
    offer: [
      {
        previewImage: 'https://14.react.pages.academy/static/offer/5.jpg',
        price: 123,
        rating: 3.7,
        title: 'Canal View Prinsengracht',
        type: 'room'
      }
    ]
  },
  {
    city: 'Hamburg',
    offer: [
      {
        previewImage: 'https://14.react.pages.academy/static/offer/8.jpg',
        price: 878,
        rating: 3,
        title: 'Amazing and Extremely Central Flat',
        type: 'house'
      }
    ]
  }
];
