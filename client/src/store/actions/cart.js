import { ADD_CART, REMOVE_CART } from "./type";

export const addToCart=(product)=>{
    return(dispatch,getState)=>{
const cartItem=getState().cart.cartItems;
        const cartItemClone=[...cartItem];
    var isProductExist=false;
    cartItemClone.forEach(p=>{
      if(p._id == product._id){
        p.qte++;
        isProductExist=true;
      }
    })
    if(!isProductExist){
      cartItemClone.push({...product,qte:1})
    }
    dispatch({
        type:ADD_CART,
        data:{
            cartItems:cartItemClone
        }
    });
    localStorage.setItem("cartItems",JSON.stringify(cartItemClone))
    }
}

export const removeCart=(product)=>{
    return(dispatch,getState)=>{
        const cartItems=getState().cart.cartItems;
        const cartItemsClone=[...cartItems];
         const updatedCartItems=cartItemsClone.filter(p=>p._id !== product._id)
        dispatch({
            type:REMOVE_CART,
            data:{
                cartItems:updatedCartItems
            }
        });
    localStorage.setItem("cartItems",JSON.stringify(updatedCartItems))

    }
}