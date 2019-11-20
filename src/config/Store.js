import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import cartReducer from "../features/cart/Reducer";
import productsReducer from "../features/product-listing/Reducer";
import productReducer from "../features/detail/Reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  product: productReducer,
  form: formReducer
});

const Store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
