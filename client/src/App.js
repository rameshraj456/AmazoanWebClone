import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbaar from "./components/header/Navbaar";
import Maincomp from "./components/home/Maincomp";
import Newnav from "./components/newnavbaar/Newnav";

import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import Buynow from "./components/buynow/Buynow";
import Cart from "./components/cart/Cart";
import SIgnUp from "./components/signup_sign/SIgnUp";
import Sign_in from "./components/signup_sign/Sign_in";


function App() {

  const [data,setData]=useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])

    return ( 
        <>
          {
            data ?(
              <>
                
          <Navbaar/>
          <Newnav/>
           <Routes>
            <Route path="/" element={<Maincomp/>}/>
            <Route path="/login" element={<Sign_in/>}/>
            <Route path="/register" element={<SIgnUp/>}/>
            
            <Route path="/getproductsone/:id" element={<Cart/>}/>
            <Route path="/buynow" element={<Buynow/>}/>
           </Routes>
          
          <Footer/>
              </>
            )
          :(
            <div className="circle">
            <CircularProgress />
            <h2> Loading....</h2>
          </div>
          )
          }
          
        </>
    );
        
}

export default App;