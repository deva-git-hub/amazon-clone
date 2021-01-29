export const intialState = {
  basket: [
    {
      id: "4212125",
      image:
        "https://www.reliancedigital.in/medias/One-Plus-55-Q1-Televisions-491630449-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzI3NjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVjL2gwNi85Mjk3NTkyMjIxNzI2LmpwZ3wzMjhhZWY0YmRiZjY2NWNiOWVlOTVmZjhiYTI4YTZkZTZjNzE2NDJjMWM5NzJkN2UwZWVhZWJhMDc5NTk5NzA2",
      title: "One Plus 138.8 cm (55 inch) Ultra HD (4K) QLED Smart TV, Q1 55Q1",
      price: 550.55,
      rating: 4.0,
    },
  ],
  user: null,
};

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.authUser,
      };

    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //logic for removing the item from basket

      let newbasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newbasket.splice(index, 1);
      }

      return { ...state, basket: newbasket };
    default:
      return state;
  }
}

export default reducer;
