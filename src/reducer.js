export const initialState = {
  basket: [
    {
      id: "12442132",
      title:
        "AmazonBasics High-Density Exercise, Massage, Muscle Recovery, Round Foam Roller, 12, 18, 24, 36",
      rating: 5,
      price: 27.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/911vOQbliVL._AC_SX679_.jpg",
    },
    {
      id: "12442132",
      title:
        "AmazonBasics High-Density Exercise, Massage, Muscle Recovery, Round Foam Roller, 12, 18, 24, 36",
      rating: 5,
      price: 27.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/911vOQbliVL._AC_SX679_.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      return state;
    default:
      return state;
  }
};

export default reducer;
