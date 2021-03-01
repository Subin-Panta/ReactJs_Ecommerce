import React,{useContext} from 'react'
import {ProductContext} from "../../Context"

export default function CartTotals() {
    const value =useContext(ProductContext)
    const {cartSubTotal,cartTax,cartTotal,clearCart}=value
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        
                            <button 
                            className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                            type="button"
                            onClick={()=>clearCart()}>
                                Clear Cart
                            </button>
                       
                        <h5><span class="text-title">
                                Subtotal: <span>
                                    <strong>Rs {cartSubTotal}</strong></span>    
                            </span>
                        </h5>
                        <h5><span class="text-title">
                                Tax: <span>
                                    <strong>Rs {cartTax}</strong></span>    
                            </span>
                        </h5>
                        <h5><span class="text-title">
                                Total: <span>
                                    <strong>Rs {cartTotal}</strong></span>    
                            </span>
                        </h5>
                       

                       
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
