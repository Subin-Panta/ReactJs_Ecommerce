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
    let tempCart=[...cart]
    const selectedProducts=tempCart.find(item=>item.id===id)
    const index= tempCart.indexOf(selectedProducts)
    const product=tempCart[index]
    product.count+=1
    product.total=product.count*product.price
    setCart(tempCart)
}
const decrement =(id)=>{
    
    let tempCart=[...cart]
    const selectedProducts=tempCart.find(item=>item.id===id)
    const index= tempCart.indexOf(selectedProducts)
    const product=tempCart[index]
    if(product.count ===1) {
            removeItem(id)
    }
    else{
        product.count-=1
        product.total=product.count*product.price
        setCart(tempCart)
    }
}
const clearCart =()=>{
    seproducts()
    setCart([])
    
    // addTotals()
}
const removeItem =(id)=>{
    let tempProducts=[...products]
    let tempCart=[...cart]
    tempCart=tempCart.filter(item => item.id!=id)
    setCart(tempCart)
    const index=tempProducts.indexOf(getItem(id))
    let removedProduct = tempProducts[index]
    removedProduct.inCart=false
    removedProduct.count=0
    removedProduct.total=0
    setProducts(tempProducts)
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
