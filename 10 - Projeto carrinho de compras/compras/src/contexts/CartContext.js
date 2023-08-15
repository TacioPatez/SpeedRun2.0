import React, { useState, createContext} from 'react'

export const CartContext = createContext({});

function CartProvider({ children }){
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)

    function addItemCart(newItem){
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            let cartlist = cart;
            cartlist[indexItem].amount = cartlist[indexItem].amount + 1
            cartlist[indexItem].total = cartlist[indexItem].amount * cartlist[indexItem].price
            setCart(cartlist)
            totalResultCart(cartlist)
            return;
        }

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart( products => [...products, data])
        totalResultCart( [...cart, data] )
    }

    function removeItemCart(product){
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){
            let cartlist = cart;
            cartlist[indexItem].amount = cartlist[indexItem].amount - 1
            cartlist[indexItem].total = cartlist[indexItem].total - cartlist[indexItem].price
            setCart(cartlist)
            totalResultCart(cartlist)
            return;
        }

        const removeItem = cart.filter(item => item.id !== product.id)

        setCart( removeItem )
        totalResultCart( removeItem )
    }

    function totalResultCart(items){
        let myCart = items
        let result = myCart.reduce((acc, obj) => {return acc + obj.total}, 0)

        setTotal(result.toFixed(2))
    }

    return(
        <CartContext.Provider
            value={{
                cart,
                addItemCart,
                removeItemCart,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;