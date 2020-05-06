import React,{useContext} from 'react'
import CartItem from './CartItem'
import {ProductContext} from '../../Context'
export default function CartList() {
   
    const value=useContext(ProductContext)
   const {cart}=value
   console.log(value,cart)
    return (
        <div className="container-fluid">
           
            {cart.map(item=>{
                return <CartItem key={item.id} item={item}/>

            })}
        </div>
    )
}
