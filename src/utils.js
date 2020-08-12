export const getPlacesInCity = (state) => {
  const {city, places} = state;
  const placesInCity = places.filter((place) => {
    return place.city === city;
  });
  return placesInCity || null;
};

export const getCitiesNames = (places) => {
  const citiesNames = places.map((place) => {
    return place.city;
  });

  return [...new Set(citiesNames)];
};


// console.log(props);
// const places1 = props.places1;
// console.log(places1);

// const placesInCity = places1.filter((place) => {
//   return place.city === city;
// });
// console.log(placesInCity);
