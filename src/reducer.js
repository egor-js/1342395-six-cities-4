
const initialState = {
  city: null,
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
  // console.log(`state.places from reducer is: ` + state.places);
  // console.log(`state.city from reducer is: ` + state.city);
  // console.log(`action.type from reducer is: ` + action.type);
  // console.log(`action.payload from reducer is: ` + action.payload);

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

  return state;
};

export {reducer, ActionType, ActionCreator};
