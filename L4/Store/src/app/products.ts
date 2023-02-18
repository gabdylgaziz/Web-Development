export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Galaxy A13',
    price: 87421,
    image: '/assets/images/a13.jpg',
    description: 'A great phone for its price',
    rating: 5
  },
  {
    id: 2,
    name: 'Xiaomi Redmi 10C',
    price: 72990,
    image: '/assets/images/xr10c.jpg',
    description: 'A large phone with one of the best screens',
    rating: 5
  },
  {
    id: 3,
    name: 'Apple iPhone 11',
    price: 308046,
    image: '/assets/images/iph11.jpg',
    description: 'A large phone with one of the best screens',
    rating: 5
  },
  {
    id: 4,
    name: 'Apple iPhone 14',
    price: 659735,
    image: '/assets/images/iph14.jpg',
    description: 'Be on trend with Iphone 14',
    rating: 5
  },
  {
    id: 5,
    name: 'Apple MacBook Air 13',
    price: 480500,
    image: '/assets/images/mcbook13.jpg',
    description: 'Do you want to sit cool at Starbucks? Then this Apple MacBook Air 13 is definitely for you!',
    rating: 5
  },
  {
    id: 6,
    name: 'Xiaomi Poco C40',
    price: 69980,
    image: '/assets/images/pococ40.jpg',
    description: 'A top-of-the-range gaming smartphone for its money!',
    rating: 5
  },
  {
    id: 7,
    name: 'Google Pixel 6a',
    price: 218800,
    image: '/assets/images/pixel6a.jpg',
    description: "Google's super newfangled smartphone",
    rating: 5
  },
  {
    id: 8,
    name: 'Sony PlayStation 5',
    price: 377954,
    image: '/assets/images/ps5.jpg',
    description: 'A next-generation gaming station supporting thousands of games and exclusives not just for one, but also for playing in company',
    rating: 5
  },
  {
    id: 9,
    name: 'Acer Nitro 5 AN515-45',
    price: 379980,
    image: '/assets/images/nitro5.jpg',
    description: "Everyone's favourite, time-honoured gaming laptop",
    rating: 5
  },
  {
    id: 10,
    name: "God of War Ragnarök",
    price: 31192,
    image: '/assets/images/gow5.jpg',
    description: 'A new game for a new generation',
    rating: 5
  }
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/