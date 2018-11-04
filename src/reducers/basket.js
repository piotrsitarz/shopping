const basketReducerDefaultState = [];

export default (state = basketReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
     const productExist = state.find((product) => {
       return product.nameOfProduct === action.product.nameOfProduct;
     });
     if (productExist) {
       let newState = [];
       state.forEach((product) => {
         if (product.nameOfProduct === action.product.nameOfProduct) {
            product.amount = parseInt(action.product.amount) + parseInt(product.amount);
            newState.push({
              ...product,
              amount:product.amount
            });
         } else {
           newState.push(product);
         }
       });
       return [
         ...newState
       ];
     } else {
       return [
         ...state,
         action.product
       ];
     }
    default:
      return state;
  }
};
