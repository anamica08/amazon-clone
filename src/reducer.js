
  export const initialState = {
  basket: []  
};

//when we refer to data layer state using variable state and manipulate it via action
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for addint itema to basket
      break;
    case "REMOVE_FROM_BASKET":
      //logic to remove from basket
      break;
    default:
      return state;
  }
}

export default reducer