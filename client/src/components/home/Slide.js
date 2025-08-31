// import { Divider } from '@mui/material';
// import React from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { NavLink } from "react-router-dom";
// import "./slide.css";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };



// const Slide = ({ title, products }) => {



//   return (
//     <div className='products_section'>
//       <div className='products_deal'>
//         <h3>{title}</h3>
//         <button className='view_btn'>View All</button>
//       </div>
//       <Divider />
//       <Carousel
//         responsive={responsive}
//         infinite={true}
//         draggable={false}
//         swipeable={true}
//         showDots={false}
//         centerMode={true}
//         autoPlay={true}
//         autoPlaySpeed={4000}
//         keyBoardControl={true}
//         removeArrowOnDeviceType={["tablet", "mobile"]}
//         dotListClass="custom-dot-list-style"
//         itemClass="carousel-item-padding-40-px"
//         containerClass="carousel-container"
//       >
//         {products.map((e) => {


//           return (
//             <NavLink to={`/getproductsone/${e.id}`}>
//               <div className="products_items"  >
//                 <div className="product_img">
//                   <img src={e.url} alt="productitem" />
//                 </div>
//                 <p className="products_name">{e.title.shortTitle}</p>
//                 <p className="products_offer">{e.discount}</p>
//                 <p className="products_explore">{e.tagline}</p>

//               </div>
//             </NavLink>
//           );
//         })}

//       </Carousel>
//     </div>
//   );
// };


// export default Slide;



import { Divider } from '@mui/material';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import "./slide.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Slide = ({ title, products }) => {
  if (!products || products.length === 0) {
    return <div className="products_section">No products to display</div>;
  }

  return (
    <div className='products_section'>
      <div className='products_deal'>
        <h3>{title}</h3>
        <button className='view_btn'>View All</button>
      </div>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((e) => {
          if (!e || !e.id || !e.url || !e.title || !e.title.shortTitle) {
            return null; // Skip rendering this item if it's missing required properties
          }

          return (
            <NavLink to={`/getproductsone/${e.id}`} key={e.id}>
              <div className="products_items">
                <div className="product_img">
                  <img src={e.url} alt={e.title.shortTitle} />
                </div>
                <p className="products_name">{e.title.shortTitle}</p>
                <p className="products_offer">{e.discount}</p>
                <p className="products_explore">{e.tagline}</p>
              </div>
            </NavLink>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slide;


// import { Divider } from '@mui/material';
// import React from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./slide.css";
// import NavLink from "react-router-dom";
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

// const Slide = ({ title, products = [] }) => {
//   console.log("Products:", products);
//   return (
//     <div className='products_section' >
//       <div className='products_deal'>
//         <h3>{title}</h3>
//         <button className='view_btn'>View All</button>
//       </div>
//       <Divider />
//       <Carousel
//         responsive={responsive}
//         infinite={true}
//         draggable={false}
//         swipeable={true}
//         showDots={false}
//         centerMode={true}
//         autoPlay={true}
//         autoPlaySpeed={4000}
//         keyBoardControl={true}
//         removeArrowOnDeviceType={["tablet", "mobile"]}
//         dotListClass="custom-dot-list-style"
//         itemClass="carousel-item-padding-40-px"
//         containerClass="carousel-container"
//       >
//         {products.map((e) => (
//           <div className="products_items" key={e.id}>
//             <div className="product_img">
//               <img src={e.url} alt="productitem" />
//             </div>
//             <p className="products_name">{e.title.shortTitle}</p>
//             <p className="products_offer">{e.discount}</p>
//             <p className="products_explore">{e.tagline}</p>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Slide;
