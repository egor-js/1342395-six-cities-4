import {createSelector} from "reselect";

export const getCitiesNames = (places) => {
  const citiesNames = places.map((place) => {
    return place.city;
  });

  return [...new Set(citiesNames)];
};

export const getPlaces = (state) => {
  return state.places;
};

export const getCity = (state) => {
  return state.city;
};

export const getActiveOffer = (state) => {
  return state.activeCard;
};

export const getPlacesInCity = createSelector(
    getPlaces,
    getCity,

    (places, city) => places.filter((item) => {
      return item.city === city;
    })
);
