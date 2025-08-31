import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../redux/actions/action';
import Banner from './Banner';
import Slide from './Slide';
import "./home.css";


const Maincomp = () => {
  const { products } = useSelector(state => state.getproductsdata);
  
  console.log(products);

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

  return (
    <div className='home_section'>
       <div className='banner_part'>
         <Banner/>
       </div>

       <div className='slide_part'>
          <div className='left_slide'>
             <Slide title="Deal of the day" products={products} />
          </div>

          <div className='right_slide'>
             <h4>Festive latest launches</h4>
             <img src="https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2023/10/HERO-BACKDROP-VERSION-6-7.png" alt="rightimg" />
               <a href="#">see more</a>

          </div>
       </div>
       <Slide title="Today's Deal" products={products} />
         <div className='center_img'>
         <img src="https://www.lidl.ie/static/assets/231011_Wk43_2023_Header12-604913.jpg" className='centereimg' alt="" />
          </div>
       <Slide title="Best seller" products={products} />
       <Slide  title="upto 80% off" products={products} />
       
       
    </div>
  )
}

export default Maincomp;





