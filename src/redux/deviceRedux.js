// SELECTOR
export const getSize = ({ deviceType }) => deviceType;

// ACTION NAME CREATOR
const reducerName = 'size';
const createActionName = name => `app/${reducerName}/${name}`;

// ACTION TYPE
const CHANGE_DEVICE = createActionName('CHANGE_DEVICE');

// ACTION CREATOR
export const changeDevice = payload => ({ payload, type: CHANGE_DEVICE });

// REDUCER
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case CHANGE_DEVICE: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
