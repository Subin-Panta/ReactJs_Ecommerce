import React,{useContext} from 'react'
import styled from "styled-components"
import {ProductContext} from "../Context"
import {ButtonContainer} from "./Button"
import {Link} from "react-router-dom"
export default function Modal() {
    const {modalOpen,closeModal,modalProduct}=useContext(ProductContext)
    const {img,title,price}=modalProduct
    if(!modalOpen){
        return null
    }
    else{
         return (
         <ModalContainer>
            <div className="container">
                <div className="row">
                    <div id="modal"
                     className="col-8 mx-auto col-md-6 col-lg-4 
                     text-center text-capitalize p-5" >
                        <h5>Item added to the Cart</h5>
                        <img src={img} className="img-fluid" alt="product" />
                        <h5>{title}</h5>
                        <h5 className="text-muted">Price : Rs {price}</h5>
                        <Link to="/"><ButtonContainer onClick={()=>{closeModal()}}>
                                Store
                            </ButtonContainer></Link>
                            <Link to="/cart"><ButtonContainer cart onClick={()=>{closeModal()}}>
                               Go to Cart
                            </ButtonContainer></Link>
                    </div>
                </div>
            </div>
         </ModalContainer>
         )
    }
    
}
const ModalContainer=styled.div `
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display: flex;
align-items:center;
justify-content:center;
#modal{
    background: var(--mainWhite);
}
`;