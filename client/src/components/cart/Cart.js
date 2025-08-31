import { Divider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { LoginContext } from '../context/ContexProvider';
import "./cart.css";


const Cart = () => {
 
  const { id } = useParams("");
  const history =useNavigate("");
  const { account, setAccount } = useContext(LoginContext)
  console.log(account);
  const [inddata, setIndedata] = useState("");
  console.log(inddata);

  const getinddata = async () => {
    try {
      const res = await fetch(`/getproductsone/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.status !== 201) {
        console.log("no data available");
      } else {
        console.log("ind mila hain");
        setIndedata(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setTimeout(getinddata,1000)
    
  }, [id]);

  //add cart fuction
// const addtocart = async (id) => {
    
//       const checkres = await fetch(`/addcart/${id}`, {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ 
//           inddata 
//         }),
//         credentials: "include",
//       });
       

//       const data1 = await checkres.json();
//       console.log(data1+"frontend data");
//       if (checkres.status === 201 || !data1) {
//         console.log("user invalid");
//         alert("user invalid");
//       }else{
//         alert("data added in your cart");
//         setAccount(data1)
//       }
// }

const addtocart = async (id) => {
  try {


    const checkres = await fetch(`/addcart/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inddata),
      credentials: "include",
    });

    if (checkres.ok) {
      const data1 = await checkres.json();
      console.log("Frontend Data:", JSON.stringify(data1, null, 2));
      //alert("Data added to your cart");
      history("/buynow");
      setAccount(data1);
    } else {
      const errorData = await checkres.json();
      console.error("Error adding to cart:", errorData.error);
      alert("Error adding to cart. Please try again.");
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    alert("Error adding to cart. Please try again.");
  }
};





  
 return (

    <div className="cart_section">
      {inddata && Object.keys(inddata).length &&
        <div className="cart_container">
          <div className="left_cart">
            {inddata.detailUrl && (
              <img src={inddata.detailUrl} alt="" />
            )}
            <div className="cart_btn">
             <button className="cart_btn1" onClick={async () => await addtocart(inddata.id)}>Add to Cart</button>

              <button className="cart_btn2">Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            {inddata.title && (
              <>
                <h3>{inddata.title.shortTitle}</h3>
                <h4>{inddata.title.longTitle}</h4>
                <Divider />
                <p className="mrp">M.R.P :₹{inddata.price.mrp}</p>
                <p>
                  Deal of the Day:
                  <span style={{ color: "#B12704" }}>
                    ₹{inddata.price.cost}.00
                  </span>
                </p>
                <p>
                  You Save:
                  <span style={{ color: "#B12704" }}>
                    ₹{inddata.price.mrp - inddata.price.cost} ({inddata.discount})
                  </span>
                </p>
                <div className="discount_box">
                  <h5>
                    Discout :<span style={{ color: "#111" }}>{inddata.discount}</span>
                  </h5>
                  <h4>
                    Free Delivery:{" "}
                    <span style={{ color: "#111", fontWeight: 600 }}>
                      Jan 8 - 24
                    </span> Details
                  </h4>
                  <p>
                    Fastest delivery:
                    <span style={{ color: "#111", fontWeight: 600 }}>
                      Tomorrow 11AM
                    </span>
                  </p>
                </div>
                <p className="description">
                  About this Item:
                  <span
                    style={{
                      color: "#565959",
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: "0.4px",
                    }}
                  >
                    {inddata.description}
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      }
      {
        !inddata ? <div className="circle">
        <CircularProgress />
        <h2> Loading....</h2>
    </div> : ""
      }
    </div>
  );
};

export default Cart;
