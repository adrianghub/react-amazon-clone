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

export const getBasketTotal = basket => (
  basket?.reduce((amount, item) => item.price + amount, 0)
);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // cloned basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if (index >= 0) {
        // if item exists in basket - remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not exist.`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
