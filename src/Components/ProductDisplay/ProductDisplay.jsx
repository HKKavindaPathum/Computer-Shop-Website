import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">  
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-prices">
                Old_price=
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div> 
                New_price=
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
  )
}
