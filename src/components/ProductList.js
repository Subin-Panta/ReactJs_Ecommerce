import React, { useContext } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductContext} from '../Context'
export default function ProductList() {
   const {products,productdetail,addToCart,handleDetail}=useContext(ProductContext)
   addToCart()
   handleDetail() 
   return (
        <React.Fragment>
            {console.log(products)}{console.log(productdetail)}
            
            <div className="py-5">
                <div className="container">
                    <Title name="Our" title="products"/>
                    <div className="row">
                        {products.map((product)=> {
                            return <Product key={product.id} product={product}/>
                        })}
                       
                    </div>
                </div>
            </div> 
            
        </React.Fragment>
    )
}
