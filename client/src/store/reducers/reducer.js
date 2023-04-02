import {combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";
import { productsRducer } from "./productsReducer";
export default combineReducers({
    products:productsRducer,
    cart:cartReducer,
    order:orderReducer,
    //csfag
    
})