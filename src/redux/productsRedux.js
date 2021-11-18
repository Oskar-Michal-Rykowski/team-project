/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompareProducts = ({ products }) =>
  products.filter(item => item.isCompare === true);

// action name creator
const reducerName = 'status';
const createActionName = name => `app/${reducerName}/${name}`;

const reducerNameStars = 'stars';
const createActionNameStars = name => `app/${reducerNameStars}/${name}`;

const reducerNameCompare = 'compare';
const createActionNameCompare = name => `app/${reducerNameCompare}/${name}`;

// action types
export const SET_FAVORITE = createActionName('SET_FAVORITE');
export const SET_STARS = createActionNameStars('SET_STARS');
export const SET_COMPARE = createActionNameCompare('SET_COMPARE');

// action creators
export const setFavorite = (boolean, id) => ({
  payload: { boolean: boolean, id: id },
  type: SET_FAVORITE,
});

export const setStars = (number, id) => ({
  payload: { number: number, id: id },
  type: SET_STARS,
});

export const setCompare = (boolean, id) => ({
  payload: { boolean: boolean, id: id },
  type: SET_COMPARE,
});
const compareProducts = [];

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_FAVORITE: {
      statePart.map(product => {
        if (product.id === action.payload.id) {
          product.isFavorite = action.payload.boolean;
        }
        return product;
      });
      return [...statePart];
    }
    case SET_STARS: {
      statePart.map(product => {
        if (product.id === action.payload.id) {
          product.clientStars = action.payload.number;
        }
        return product;
      });
      return [...statePart];
    }
    case SET_COMPARE: {
      statePart.map(product => {
        if (product.id === action.payload.id) {
          if (!product.isCompare && compareProducts.length <= 3) {
            compareProducts.push(product.id);
            product.isCompare = action.payload.boolean;
          } else if (
            (product.isCompare && compareProducts.length <= 3) ||
            (product.isCompare && compareProducts.length > 3)
          ) {
            compareProducts.splice(compareProducts.indexOf(product.id), 1);
            product.isCompare = action.payload.boolean;
          }
        }

        return product;
      });
      return [...statePart];
    }
    default:
      return statePart;
  }
}
