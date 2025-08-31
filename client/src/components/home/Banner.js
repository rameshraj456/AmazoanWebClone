import React from 'react';
import Carousel from 'react-material-ui-carousel';
import "./banner.css";
const data = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/HTL2023/Store-associates/pc-header-htl-revised-V6.jpg",
    " https://images-eu.ssl-images-amazon.com/images/G/31/img23/Sports/June/Coop/Vectorx/1500x300.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/2023/Q4/1_Header_PC_VG_1.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/HTL2023/Store-associates/1500x300-hasbro.gif",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Sports/April/Football_Store/Football-store-1500-X-300.jpg"
]


const Banner = () => {
  return (
    <Carousel
    className='carasousel'
    autoPlay={true}
    animation='slide'
    indicators={false}
    cycleNavigation={true}
    navButtonsProps={{
        style: {
            background: "#fff",
            color: "#494949",
            borderRadius: 0,
            marginTop: -22,
            height: "104px",
        }
    }}
    >
        {
            data.map((imag,i)=>{
                return (
                    <>
                     <img src={imag} alt="" className='banner-img' />
                    </>
                )
            })
        }

    </Carousel>
  )
}

export default Banner
