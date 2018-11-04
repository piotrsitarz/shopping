const productsReducerDefaultState = [
  {
    nameOfProduct: 'Apple',
    price: 8,
    description: 'Apples increase the amount of acetylcholine in the brain, which is linked to improving concentration, problem-solving, and memory.',
    imgUrl: 'https://image.flaticon.com/icons/svg/1155/1155289.svg',
    added: false,
    amount: null
  },
  {
    nameOfProduct: 'Oragne',
    price: 11,
    description: 'Orange strengthens your emotional body, encouraging a general feeling of joy, well-being, and cheerfulness.',
    imgUrl: 'https://image.flaticon.com/icons/svg/1155/1155291.svg',
    added: false,
    amount: null
  },
  {
    nameOfProduct: 'Kiwi',
    price: 12,
    description: 'Kiwi’s high level of potassium helps keep our electrolytes in balance by counteracting the effects of sodium.',
    imgUrl: 'https://image.flaticon.com/icons/svg/1155/1155268.svg',
    added: false,
    amount: null
  },
  {
    nameOfProduct: 'Pomegranate',
    price: 4,
    description: 'Regular intake of pomegranate juice has been shown to lower blood pressure levels in as little as two weeks.',
    imgUrl: 'https://image.flaticon.com/icons/svg/1155/1155274.svg',
    added: false,
    amount: null
  },
  {
    nameOfProduct: 'Banana',
    price: 13,
    description: 'Bananas are a good dietary source of potassium and magnesium — two nutrients that are essential for heart health.',
    imgUrl: 'https://image.flaticon.com/icons/svg/1155/1155275.svg',
    added: false,
    amount: null
  },
  {
    nameOfProduct: 'Tomato',
    price: 12,
    description: 'Tomatoes are a good source of several vitamins and minerals, such as vitamin C, potassium, vitamin K and folate.',
    imgUrl: 'https://image.flaticon.com/icons/svg/1155/1155255.svg',
    added: false,
    amount: null
  },
  {
    nameOfProduct: 'Cucumber',
    price: 24,
    description: 'Cucumbers are composed of about 96% water, which may increase hydration and help you meet your daily fluid needs.',
    imgUrl: 'https://image.flaticon.com/icons/svg/1155/1155271.svg',
    added: false,
    amount: null
  },
  {
    nameOfProduct: 'Lettuce',
    price: 32,
    description: 'Lettuce contains moisture, energy, protein, fat, carbohydrates, dietary fiber, sugars, vitamin B6, C, A, E, and vitamin K.',
    imgUrl: 'https://image.flaticon.com/icons/svg/1155/1155257.svg',
    added: false,
    amount: null
  }
];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
