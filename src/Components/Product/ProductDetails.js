import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./c.css";
import { useDispatch, useSelector } from 'react-redux';
import { proddetails } from '../../JS/actions/productActions';
import { AiFillHeart } from "react-icons/ai";
import { add_to_card } from '../../JS/actions/panierActions';
const ProductDetails = () => {
    const {idprod}=useParams()
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(proddetails(idprod))
    
      
    }, [idprod])
    const pd=useSelector(state=>state.details)
  return (
    <main className="containerc">
    {/* Left Column / Headphones Image */}
    <div className="left-column">
      <img data-image="black" src={pd.image} alt="" />
      <img data-image="blue" src={pd.image} alt="" />
      <img data-image="red" className="active" src={pd.image} alt="" />
    </div>
    {/* Right Column */}
    <div className="right-column">
      {/* Product Description */}
      <div className="product-description">
        <AiFillHeart
                  
                  style={{
                    cursor: "pointer",
                  }}
                 
                />
        <h1>{pd.title}</h1>
        <p>
        Quantity: {pd.QtS}
        </p>
      </div>

      {/* Product Pricing */}
      <div className="product-price">
        <span>{pd.price}</span>
        <button onClick={() => dispatch(add_to_card(pd))
                  } className="cart-btn">
          Add to cart
        </button>
      </div>
    </div>
  </main>
  )
}

export default ProductDetails