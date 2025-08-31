// import { Divider } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import Option from './Option';
// import Right from './Right';
// import Subtotal from './Subtotal';
// import "./buynow.css";


// const Buynow = () => {

//   const [cartdata, setCartdata] = useState("");
//   //console.log(cartdata.carts);
//   const getdatabuy = async () => {
//     const res = await fetch("/cartdetails", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       credentials: "include"
//     });
//     const data = await res.json();
//     if (res.status !== 201) {
//       console.log("no data available")
//     } else {
//       // console.log("data cart main hain");
//       setCartdata(data.carts);
//     }
//   };
//   useEffect(() => {
//     getdatabuy();
//   }, []);
//   return (
//     <>
//       {cartdata.length ?
//         <div className='buynow_section'>
//           <div className='buynow_container'>
//             <div className='left_buy'>
//               <h1>Shopping Cart</h1>
//               <p>Select all items</p>
//               <span className='leftbuyprice'>Price</span>
//               <Divider />
//               {
//                 cartdata.map((e, k) => {
//                   return (
//                     <>
//                       <div className='item_containert'>
//                         <img src={e.detailUrl} alt="" />
//                         <div className='item_details'>
//                           <h3>{e.title.longTitle} </h3>
//                           <h3>{e.title.shortTitle}</h3>
//                           <h3 className='diffrentprice'>₹{e.price.cost}.00</h3>
//                           <p className='unusuall'>Usually dispatched on 8 days</p>
//                           <p>Eligible for Free Shipping</p>
//                           <Option deletedata={e.id} get={getdatabuy} />

//                         </div>
//                         <h3 className='item_price'>₹{e.price.cost}.00</h3>
//                       </div>
//                       <Divider />
//                     </>
//                   )
//                 })
//               }

              
//               <Subtotal iteam={cartdata} />

//             </div>
//             <Right  iteam={cartdata}/>

//           </div>
//         </div> : ""
//       }
//     </>
//   )
// }

// export default Buynow



// import { Divider } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import Option from './Option';
// import Right from './Right';

// import Slide from '../home/Slide';
// import Subtotal from './Subtotal';
// import "./buynow.css";

// const Buynow = () => {
//   const [cartdata, setCartdata] = useState([]);

//   const getdatabuy = async () => {
//     try {
//       const res = await fetch("/cartdetails", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         },
//         credentials: "include"
//       });
//       const data = await res.json();
//       if (res.status === 201) {
//         setCartdata(data.carts || []);
//       } else {
//         console.log("No data available");
//       }
//     } catch (error) {
//       console.error("Error fetching cart data:", error);
//     }
//   };

//   useEffect(() => {
//     getdatabuy();
//   }, []);

//   return (
//     <>
//       <Slide title="Your Cart Items" products={cartdata} />
//       {cartdata.length > 0 ? (
//         <div className='buynow_section'>
//           <div className='buynow_container'>
//             <div className='left_buy'>
//               <h1>Shopping Cart</h1>
//               <p>Select all items</p>
//               <span className='leftbuyprice'>Price</span>
//               <Divider />
//               {cartdata.map((e, k) => (
//                 <React.Fragment key={k}>
//                   <div className='item_containert'>
//                     <img src={e.url} alt="" />
//                     <div className='item_details'>
//                       <h3>{e.title.longTitle}</h3>
//                       <h3>{e.title.shortTitle}</h3>
//                       <h3 className='diffrentprice'>₹{e.price.cost}.00</h3>
//                       <p className='unusuall'>Usually dispatched in 8 days</p>
//                       <p>Eligible for FREE Shipping</p>
//                       <Option deletedata={e.id} get={getdatabuy} />
//                     </div>
//                     <h3 className='item_price'>₹{e.price.cost}.00</h3>
//                   </div>
//                   <Divider />
//                 </React.Fragment>
//               ))}
//               <Subtotal iteam={cartdata} />
//             </div>
//             <Right iteam={cartdata} />
//           </div>
//         </div>
//       ) : (
//         <div>Your cart is empty</div>
//       )}
//     </>
//   );
// };

// export default Buynow;


import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Option from './Option';
import Right from './Right';
import Subtotal from './Subtotal';
import "./buynow.css";

const Buynow = () => {
  const [cartdata, setCartdata] = useState([]);

  const getdatabuy = async () => {
    try {
      const res = await fetch("/cartdetails", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      if (res.status === 201) {
        setCartdata(data.carts || []);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    getdatabuy();
  }, []);

  return (
    <>
      {cartdata.length > 0 ? (
        <div className='buynow_section'>
          <div className='buynow_container'>
            <div className='left_buy'>
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <span className='leftbuyprice'>Price</span>
              <Divider />
              {cartdata.map((e, k) => (
                <React.Fragment key={k}>
                  <div className='item_containert'>
                    <img src={e.detailUrl} alt={e.title.shortTitle} />
                    <div className='item_details'>
                      <h3>{e.title.longTitle}</h3>
                      <h3>{e.title.shortTitle}</h3>
                      <h3 className='diffrentprice'>₹{e.price.cost}.00</h3>
                      <p className='unusuall'>Usually dispatched in 8 days</p>
                      <p>Eligible for FREE Shipping</p>
                      <Option deletedata={e.id} get={getdatabuy} />
                    </div>
                    <h3 className='item_price'>₹{e.price.cost}.00</h3>
                  </div>
                  <Divider />
                </React.Fragment>
              ))}
              <Subtotal iteam={cartdata} />
            </div>
            <Right iteam={cartdata} />
          </div>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
    </>
  );
};

export default Buynow;