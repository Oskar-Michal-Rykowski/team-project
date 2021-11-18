/* selectors */
export const getViewportWidth = ({ viewportSize }) => viewportSize;

// action name creator
const reducerName = 'viewport';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_VIEWPORT_SIZE = createActionName('SET_VIEWPORT_SIZE');

// action creators
export const setViewportWidth = viewportWidth => ({
  payload: { viewportWidth: viewportWidth },
  type: SET_VIEWPORT_SIZE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_VIEWPORT_SIZE: {
      return action.payload.viewportWidth;
    }
    default:
      return statePart;
  }
}
