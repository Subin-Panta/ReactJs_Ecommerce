import React, { createContext ,useState} from 'react'
import {storeProducts,detailProduct} from './data'
import Product from './components/Product'
export const ProductContext= createContext()

export default function ProductProvider(props) {
   const [products,setProducts]=useState(storeProducts)
   const[productdetail,setProductdetail]=useState(detailProduct)
   const handleDetail =()=>{
       console.log("hello form detail")
   }
   const addToCart =()=>{
    console.log("hello form addtocart")
   }
    return (
        <ProductContext.Provider value={{products,productdetail,handleDetail,addToCart}}>
          {props.children}
        </ProductContext.Provider>
    )
}
