import React,{useContext} from 'react'
import Title from "../../components/Title"
import {ProductContext} from '../../Context'
import CartColoumns from "./CartColoumns.js"
import EmptyCart from "./EmptyCart.js"
import CartList from './CartList'
import CartTotals from './CartTotals.js'
export default function Cart() {
    const value=useContext(ProductContext)
    const {cart}=value
    if(cart.length>0){
       return (
           <section>
            <Title name="your" title="cart" />
            <CartColoumns />
            <CartList />
            <CartTotals />
            </section>
       )
    }
    else {
        return (
            <section>
                <EmptyCart />
            </section>
        )
    }
}
