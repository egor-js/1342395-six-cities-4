import Immutable from 'seamless-immutable';

const initialState = {
  city: ``,
  places: [],
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_ALL_PLACES: `SET_ALL_PLACES`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  setAllPlaces: (places) => ({
    type: ActionType.SET_ALL_PLACES,
    payload: places,
  }),
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
      });

    case ActionType.SET_ALL_PLACES:
      return Object.assign({}, state, {
        places: action.payload,
      });
  }
  console.log(state);
  return state;
};

export {reducer, ActionType, ActionCreator};
