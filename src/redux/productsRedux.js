/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ASSIGN_FAVOURITE = createActionName('ASSIGN_FAVOURITE');
const ASSIGN_COMPARE = createActionName('ASSIGN_COMPARE');

/* action creators */
export const assignFavourite = payload => ({ payload, type: ASSIGN_FAVOURITE });
export const assignCompare = payload => ({ payload, type: ASSIGN_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ASSIGN_FAVOURITE:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, favourite: action.payload.favourite }
          : product
      );
    case ASSIGN_COMPARE:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, compare: action.payload.compare }
          : product
      );
    default:
      return statePart;
  }
}
