import React, { useState,useEffect } from 'react'
import "./Portfolio.css"
import Cds from './Cds'
import { Container } from 'react-bootstrap'
import { Data } from "./Dataa"
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdCancel } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import Modal from 'react-bootstrap/Modal';

import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'
function Portfolio() {
  const [one, setOne] = useState(false);
  const toggle = () => {
    return (
      setOne(!one)
    )
  }
  // const [show, setShow] = useState(false);
  // const [allu, setAllu] = useState(1);

 
  return (

    <div className='mallika' id='portfolio'>

      <div className='port'>
        <h1>My <span>Portfolio</span></h1>


        <Container className='susu'>
          {/* < Swiper loop={true}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,

              },
              768: {
                slidesPerView: 2,
                spaceBetween: 48,
              }
            }}
            modules={[Pagination]}
            

          > */}
            
            
            
            
             {Data.map((
            val,index
          ) => {
            // console.log(Data[0], "data id")
            return (
             
     <Cds id={val.id} image={val.image} title={val.title} description={val.description} />
   
                                

            

            )
          })}









          {/* </Swiper> */}



        </Container>






      </div>



    </div >

  )
}

export default Portfolio
{/* <Cds id={id} image={image} des={description} title={title} /> */ }
{/* {one && (
                        <div className='overlay'  onClick={toggle}>
              <div className='model-content'>
                <h1>jgfjg</h1>
                <img src="#" />
              </div>
            </div>
          )} */}