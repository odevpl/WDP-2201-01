import initialState from './initialState';

// SELECTOR
export const getSize = ({ size }) => size;

// ACTION NAME CREATOR
const reducerName = 'size';
const createActionName = name => `app/${reducerName}/${name}`;

// ACTION TYPE
const CHANGE_DEVICE = createActionName('CHANGE_DEVICE');

// ACTION CREATOR
export const changeDevice = payload => ({ payload, type: CHANGE_DEVICE });

// SIZE - INITIAL STATE
if (window.innerWidth >= 1200) initialState.size = 'desktop';
if (window.innerWidth >= 992) initialState.size = 'tablet';
if (window.innerWidth >= 768) initialState.size = 'mobile';
if (window.innerWidth < 768) initialState.size = 'mobile';

// REDUCER
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_DEVICE: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
