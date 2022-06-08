export const initialState = {
  cities: [],
  itineraries: [],
  user: null,
  filterCity: [],
  continent: [],
  events: [],
  nosotros: [],
  artistas: [],
  oficios: [],
};

export const actionTypes = {
  CITIESDB: "CITIESDB",
  ITINERARIESDB: "ITINERARIESDB",
  USER: "USER",
  FILTER: "FILTER",
  CONTINENT: "CONTINENT",
  EVENTSDB: "EVENTSDB",
  NOSOTROSDB: "NOSOTROSDB",
  ARTISTASDB: "ARTISTASDB",
  OFICIOSDB: "OFICIOSDB",
};

const reducer = (state, action) => {
  //console.log(action)
  //console.log(state)

  switch (action.type) {
    case "EVENTSDB":
      return {
        ...state,
        events: action.events,
      };

    case "NOSOTROSDB":
      return {
        ...state,
        nosotros: action.nosotros,
      };

    case "ARTISTASDB":
      return {
        ...state,
        artistas: action.artistas,
      };

    case "OFICIOSDB":
      return {
        ...state,
        oficios: action.oficios,
      };

    case "CITIESDB":
      return {
        ...state,
        cities: action.cities,
        filterCity: action.cities,
        filterContinent: action.cities,
      };

    case "ITINERARIESDB":
      return {
        ...state,
        itineraries: action.itineraries,
      };

    case "USER":
      return {
        ...state,
        user: action.user,
      };

    case "FILTER":
      const filterCity = [];
      if (action.value.filterBy === "Filter by Cities") {
        filterCity.push(
          ...state.cities.filter((city) =>
            city.city
              .toLowerCase()
              .startsWith(action.value.value.toLowerCase().trim())
          )
        );
      } else {
        filterCity.push(
          ...state.cities.filter((city) =>
            city.country
              .toLowerCase()
              .startsWith(action.value.value.toLowerCase().trim())
          )
        );
      }

      return {
        ...state,
        filterCity: filterCity,
      };

    case "CONTINENT":
      const filterContinent = state.cities.filter((city) =>
        city.continent.includes(action.value)
      );

      return {
        ...state,
        filterContinent: filterContinent,
      };

    default:
      return state;
  }
};

export default reducer;
