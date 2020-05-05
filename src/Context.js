import React, { createContext ,useState,useEffect ,} from 'react'
import {storeProducts,detailProduct} from './data'
import Product from './components/Product'
export const ProductContext= createContext()

export default function ProductProvider(props) {
   const [products,setProducts]=useState([])
   const[productDetail,setProductdetail]=useState(detailProduct)
    const [cart,setCart] =useState([])
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
    return (
        <ProductContext.Provider value={{products,productDetail,handleDetail,addToCart}}>
          {props.children}
        </ProductContext.Provider>
    )
}
