/* selectors */
export const getAll = ({ hotDeals }) => hotDeals;

/* action name creator */
const reducerName = 'hotDeals';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_IMAGE = createActionName('CHANGE_IMAGE');

/* action creators */
export const changeImage = payload => ({ payload, type: CHANGE_IMAGE });

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case CHANGE_IMAGE:
      return {
        ...statePart,
        activeBgImage: action.payload,
      };

    default:
      return statePart;
  }
}
