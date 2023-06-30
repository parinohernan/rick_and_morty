export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFav = (payload) => {
  return {
    type: ADD_FAV,
    payload,
  }
}

export const removeFav= (id) => {
    return {
      type: REMOVE_FAV,
      payload: id,
    }
  }

  export const filterCards= (gender) => {
    return {
      type: FILTER,
      payload: gender,
    }
  }
  export const OrderCards= (name) => {
    return {
      type: ORDER,
      payload: name,
    }
  }
// export function fetchPost(valor) {
//   return function (dispatch) {
//     dispatch(getPost());
//     axios.get(`https://jsonplaceholder.typicode.com/todos/${valor}`)
//       .then(r => r.data)
//       .then(d => dispatch(receivePost(d)))
//       .catch(e => console.log(e));
//   }
// }