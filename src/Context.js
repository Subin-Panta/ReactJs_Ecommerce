import React, { createContext ,useState,useEffect } from 'react'
import {storeProducts,detailProduct} from './data'
import Product from './components/Product'
export const ProductContext= createContext()

export default function ProductProvider(props) {
   const [products,setProducts]=useState([])
   const[productDetail,setProductdetail]=useState(detailProduct)
    const [cart,setCart] =useState([])
    const [modalOpen,setModalopen]=useState(false)
    const [modalProduct,setModalproduct]=useState(productDetail)
    const [cartSubTotal,setCartsubtotal]=useState(0)
    const [cartTax,setCarttax]=useState(0)
    const[cartTotal,setCartTotal]=useState(0)
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

   const getItem =(id) =>  {
       const product=products.find(item=> item.id===id)
        return product
    }

   const handleDetail =(id)=>{
   const product = getItem(id)
   setProductdetail(product)
}
const addToCart =(id)=>{
  let tempProducts = [...products]
  const index =tempProducts.indexOf(getItem(id))
  const product =tempProducts[index]
  product.inCart=true
  product.count=1
  const price =product.price
  product.total=price;
  setProducts(tempProducts)
  setCart([product,...cart])
}
useEffect(()=>{
    addTotals()
},[cart])
const openModal= id => {
    const product = getItem(id)
    setModalopen(true)
    setModalproduct(product)
    }
const closeModal =() =>{
    setModalopen(false)
}
const increment =(id) =>{
    console.log("increment")
}
const decrement =(id)=>{
    console.log("decrement")
}
const clearCart =()=>{
    console.log("clearcart")
}
const removeItem =(id)=>{
    console.log("remove Item")
}
const addTotals=()=>{
    let subTotal = 0
    cart.map(item=> subTotal+=item.total)
    const tempTax=subTotal*0.1
    const tax = parseFloat(tempTax.toFixed(2))
    const total=subTotal+tax
    setCartsubtotal(subTotal)
    setCarttax(tax)
    setCartTotal(total)
}
    return (
        <ProductContext.Provider value={{
            products,
            productDetail,
            handleDetail,
            addToCart,
            openModal,
            closeModal,
            modalProduct,
            modalOpen,
            cart,
            cartSubTotal,
            cartTax,
            cartTotal,
            increment,
            decrement,
            clearCart,
            removeItem,
            addTotals
            }}>
          {props.children}
        </ProductContext.Provider>
    )
}
