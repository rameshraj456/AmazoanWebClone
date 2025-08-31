import React, { useEffect, useState } from 'react';

const Right = ({iteam}) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (iteam) {
      totalAmount();
    }
  }, [iteam]);

  const totalAmount = () => {
    let totalPrice = 0;
    if (iteam && iteam.length > 0) {
      iteam.forEach((item) => {
        if (item.price && item.price.cost) {
          totalPrice += item.price.cost;
        }
      });
    }
    setPrice(totalPrice);
  }

  return (
    <div className='right_buy'>
      <img src="./rightbuynow.png" alt="rightimg"/>
       <div className='cost_right'>
        <p>Your order is eligible for FREE Delivery.</p><br/>
        <span style={{color:"#565959"}}>Select this option at checkout.Details</span>
        <h3>Subtotal ({iteam ? iteam.length : 0} items):<span style={{fontWeight:700}}>₹{price}.00</span> </h3>
        <button className='rightbuy_btn'>Process to Buy</button>
        <div className='emi'>
          Emi available
        </div>
       </div>
    </div>
  )
}

export default Right
