import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  console.log("en el reducer", state);
  switch (type) {
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: [
          state.myFavorites.filter((item) => item.id !== Number(payload)),
        ],
      };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    case FILTER:
      return {
        ...state,
        myFavorites: 
          state.allCharacters.filter((char) => char.gender == payload),
      };
    case ORDER:
      const sortedFavorites = [...state.allCharacters];

      if (payload === "A") {
        let a = sortedFavorites.sort((a, b) => (a.name > b.name ? 1 : -1)); //buscar investigar otro metodo
      } else if (payload === "D") {
        let b = sortedFavorites.sort((a, b) => (a.name < b.name ? 1 : -1));
      }
      return {
        ...state,
        myFavorites: sortedFavorites,
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
