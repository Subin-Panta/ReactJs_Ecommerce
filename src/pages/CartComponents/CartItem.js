import React,{useContext} from 'react'
import {ProductContext} from '../../Context'
import {FaTrashAlt} from "react-icons/fa"
export default function CartItem({item}) {
    const value=useContext(ProductContext)
    const{id,title,img,price,total,count} =item
    const{increment,decrement,removeItem}=value
    
    return (
            
            <div className="row p-5 text-capitalize text-center" >
            <div className="col-10 mx-auto col-lg-2">
            <img src={img} style={{width:'5rem',height:"5rem"}} className="img-fluid" alt="Product"/>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                   <span className="d-lg-none"> product :</span>{title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> price :</span>{price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                   <div className="d-flex justify-content-center">
                       <div>
                            <span className="btn btn-black mx-1" onClick={()=> decrement(id)}>-</span>
                            <span className="btn btn-black mx-1">{count}</span>
                            <span className="btn btn-black mx-1" onClick={()=> increment(id)}>+</span>
                       </div>
                   </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                   <div className="cart-icon" onClick={()=>removeItem(id)}>
                        <FaTrashAlt />
                   </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <strong>item total: Rs {total}</strong>
                </div>
            </div>
       
    )
}