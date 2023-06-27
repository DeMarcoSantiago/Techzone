import { combineReducers } from "redux";
import productsReducer from "@/store/reducers/productsReducer";
import productReducer from "./index";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import FavReducer from "./favReducer";

const reducers = combineReducers({
  product: productReducer,
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  favorites: FavReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
