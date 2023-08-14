import React, { useState, createContext} from 'react'

export const CartContext = createContext({});

function CartProvider({ children }){
    const [cart, setCart] = useState([]);

    function addItemCart(newItem){
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            let cartlist = cart;
            cartlist[indexItem].amount = cartlist[indexItem].amount + 1
            cartlist[indexItem].total = cartlist[indexItem].amount * cartlist[indexItem].price
            setCart(cartlist)
            return;
        }

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart( products => [...products, data])
    }

    return(
        <CartContext.Provider
            value={{
                cart,
                addItemCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;