import React, { createContext ,useState,useEffect ,} from 'react'
import {storeProducts,detailProduct} from './data'
import Product from './components/Product'
export const ProductContext= createContext()

export default function ProductProvider(props) {
   const [products,setProducts]=useState([])
   const[productdetail,setProductdetail]=useState(detailProduct)
 
    const seproducts =() => {
       let products =[]
       storeProducts.forEach(item => {
           const singleItem ={...item}
           products = [...products,singleItem]
       })
       setProducts(products)
   }
   useEffect(()=>{
       seproducts()
       console.log("useEffect ran")
   },[])
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
