/* selectors */
export const getAll = ({ reviews }) => reviews;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
