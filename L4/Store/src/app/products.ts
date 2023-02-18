export interface Product {
  id: number;
  name: string;
  url: string;
  image: string;
  description: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Galaxy A13',
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item",
    image: '/assets/images/a13.jpg',
    description: 'A great phone for its price',
    rating: 5
  },
  {
    id: 2,
    name: 'Xiaomi Redmi 10c',
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item",
    image: '/assets/images/xr10c.jpg',
    description: 'A large phone with one of the best screens',
    rating: 5
  },
  {
    id: 3,
    name: 'Apple iPhone 11',
    url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
    image: '/assets/images/iph11.jpg',
    description: 'A large phone with one of the best screens',
    rating: 5
  },
  {
    id: 4,
    name: 'Apple iPhone 14',
    url: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item",
    image: '/assets/images/iph14.jpg',
    description: 'Be on trend with Iphone 14',
    rating: 5
  },
  {
    id: 5,
    name: 'Apple MacBook Air 13',
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    image: '/assets/images/mcbook13.jpg',
    description: 'Do you want to sit cool at Starbucks? Then this Apple MacBook Air 13 is definitely for you!',
    rating: 5
  },
  {
    id: 6,
    name: 'Xiaomi Poco C40',
    url: "https://kaspi.kz/shop/p/xiaomi-poco-c40-4-gb-64-gb-chernyi-106054027/?c=750000000#!/item",
    image: '/assets/images/pococ40.jpg',
    description: 'A top-of-the-range gaming smartphone for its money!',
    rating: 5
  },
  {
    id: 7,
    name: 'Google Pixel 6a',
    url: "https://kaspi.kz/shop/p/google-pixel-6a-6-gb-128-gb-zelenyi-106250320/?c=750000000#!/item",
    image: '/assets/images/pixel6a.jpg',
    description: "Google's super newfangled smartphone",
    rating: 5
  },
  {
    id: 8,
    name: 'Sony PlayStation 5',
    url: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-geimpad-chernyi-101868190/?c=750000000#!/item",
    image: '/assets/images/ps5.jpg',
    description: 'A next-generation gaming station supporting thousands of games and exclusives not just for one, but also for playing in company',
    rating: 5
  },
  {
    id: 9,
    name: 'Acer Nitro 5 AN515-45',
    url: "https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/?c=750000000#!/item",
    image: '/assets/images/nitro5.jpg',
    description: "Everyone's favourite, time-honoured gaming laptop",
    rating: 5
  },
  {
    id: 10,
    name: "God of War Ragnarök",
    url: "https://kaspi.kz/shop/p/god-of-war-ragnar-k-ps5-106671793/?c=750000000#!/item",
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