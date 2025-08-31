// import React, { useEffect, useState } from 'react';

// const Subtotal = ({ iteam }) => {
//   const [price, setPrice] = useState(0);
//    useEffect(() => {
//     totalAmount();
//   }, [iteam]);
//  const totalAmount = () => {
//     let price = 0
//       iteam.map((item) => {
//       price += item.price.cost
//     });
//     setPrice(price)
//   }
//   return (
//     <div className='sub_item'>
//       <h3>Subtotal (1 items): <strong style={{ fontWeight: 700, color: '#111' }}>₹{price}.00</strong></h3>

//     </div>
//   )
// }

// export default Subtotal;


import React, { useEffect, useState } from 'react';

const Subtotal = ({ iteam }) => {
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
  };

  return (
    <div className='sub_item'>
      <h3>Subtotal ({iteam ? iteam.length : 0} items): <strong style={{ fontWeight: 700, color: '#111' }}>₹{price}.00</strong></h3>
    </div>
  );
};

export default Subtotal;
