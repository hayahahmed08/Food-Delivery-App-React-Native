import { PropsWithChildren,createContext, useContext } from "react";
import { Stack } from "expo-router";
import { CartItem, Product } from "@/types";
type CartType = {
    items: CartItem[];
    addItem : ( product: Product,size: CartItem['size'])=> void;
}

 const CartContext =createContext({})

const CartProvider = ({children}: PropsWithChildren) =>{
    return(
<CartContext.Provider value={{items: [1,2,3], onAddItem:()=> { }}}>
{children}</CartContext.Provider>
    )
}
export default CartProvider; 
export const useCart = () => useContext(CartContext)