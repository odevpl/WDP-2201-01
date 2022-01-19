const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_001.jpg',
      price: 30,
      stars: 2,
      userStars: 3,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_002.jpg',
      basePrice: '$ 40',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_003.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_004.jpg',
      basePrice: '$ 55',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_005.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_006.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_007.jpg',
      basePrice: '$ 49',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_008.jpg',
      basePrice: '$ 33',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_009.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_010.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_011.jpg',
      basePrice: '$ 45',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_012.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_013.jpg',
      basePrice: '$ 49',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_014.jpg',
      basePrice: '$ 100',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_015.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_016.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_017.jpg',
      basePrice: '$ 44',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_018.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_019.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_020.jpg',
      basePrice: '$ 47',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_021.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_022.jpg',
      basePrice: '$ 40',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_023.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_024.jpg',
      price: 30,
      stars: 2,
      userStars: 0,
      promo: 'sale',
      newFurniture: true,
      compare: false,
      favourite: false,
    },
  ],
  cart: {
    products: [],
  },
  promotion: [
    {
      id: 'promotion-vertical',
      image: 'src=../../images/promotion/fotel.jpg',
    },
    {
      id: 'promotion-horizontal-1',
      image: 'src=../../images/promotion/sofa.jpg',
    },
    {
      id: 'promotion-horizontal-2',
      image: 'src=../../images/promotion/kredens.jpg',
    },
  ],

  hotDeals: {
    textFirstWord: 'Indoor',
    textSecondWord: ' furniture',
    textSecondline: 'save up to 50% of all furniture',
    pictureLeft: 'src=../../images/hotDeals/armchair.jpg',
    pictureRight: 'src=../../images/hotDeals/living.jpg',
    products: [
      'aenean-ru-bristique-2',
      'aenean-ru-bristique-3',
      'aenean-ru-bristique-4',
    ],
  },

  logo: [
    {
      id: 'logo1',
    },
  ],
};

export default initialState;
