import React from 'react'
import './SpecialOffers.css'
import special_offers from '../Assets/special_offers'
import Item from '../Item/Item'

export const SpecialOffers = () => {
  return (
    <div className='special_offers'>
        <h1>SPECIAL OFFERS</h1>
        <hr />
        <div className="collections">
            {special_offers.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name}image={item.image}/>
            })}
        </div>
    </div>
  )
}
