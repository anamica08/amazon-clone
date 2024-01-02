export const initialState = {
  basket: [],
};

//when we refer to data layer state using variable state and manipulate it via action
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for addint itema to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //logic to remove from basket
      let basket = [...state.basket];
      const idx = basket.findIndex((item) => item.id === action.item.id);
      if (idx >= 0) {
        basket.splice(idx, 1);
      } else {
        console.warn(`${action.item.id} doesnot exist in basket`);
      }
      return { ...state, basket: [...basket] };
    default:
      return state;
  }
}

export default reducer;
