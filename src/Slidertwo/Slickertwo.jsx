import React, {useRef, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './slickertwo.css'
import image23 from '../assets/secpix.jpg'
import Cardimgae1 from '../assets/card1.jpg'
import Cardimgae2 from '../assets/card2.jpg'
import Cardimgae3 from '../assets/card3.jpg'
import Cardimgae4 from '../assets/card4.jpg'
import Cardimgae5 from '../assets/card5.jpg'
import Cardimgae6 from '../assets/card6.jpg'
import { FaStar } from "react-icons/fa";
const data1=[
   {image:Cardimgae1, text:"HP laptop", price:"$130"},
   {image:Cardimgae2, text:"Web Cam", price:"$80"},
   {image:Cardimgae3, text:"Vr glass", price:"$200"},
    


];
const data2=[

  {image:Cardimgae4, text:"Headphoens", price:"$13"},
  {image:Cardimgae5, text:"Camera", price:"$180"},
  {image:Cardimgae6, text:"Bulb", price:"$2"},



];


const Slickertwo = () => {
  return (
    <>
     <h2 className='text-[40px] font-[700] line-[30px] text-[#202020] text-center'>Best Seller</h2>
    
     <div className='flex xl:flex-row sm:flex-col  justify-center items-center ml-[140px]'>
     
     <img src={image23} className='h-[300px] w-[400px]' alt=''></img>
     
     
    
     <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper23"
      >
        
        <SwiperSlide className='slider23'>
         <div className='flex flex-col'>
          {data1.map((card, index)=>(

         <div key={index} className='flex flex-row h-[400px]  w-[500px] justify-center items-center mt-[-100px]'>
          <img src={card.image} className='h-[150px] w-[180px] rounded-[5px]' alt=''></img>
           <div className='flex flex-col ml-[20px] justify-center items-center'>
           <div className='icondiv flex flex-row'>
           <FaStar className='h-[20px] w-[20px]' />
           <FaStar className='h-[20px] w-[20px] ml-[5px]'/>
           <FaStar className='h-[20px] w-[20px] ml-[5px]'/>
           <FaStar className='h-[20px] w-[20px] ml-[5px]'/>
           </div>
          <h2 className='text-[30px] text-center text-[#202020] line-[20px]'>{card.text}</h2>
          <h2 className='text-[30px] text-center text-red-800 line-[20px]'>{card.price}</h2> 
          </div>

         </div> 
               
         ))}

        </div>
          



        </SwiperSlide>
        <SwiperSlide className='slider23'>
        <div className='flex flex-col'>
          {data2.map((card, index)=>(

         <div key={index} className='flex flex-row h-[400px]  w-[500px] justify-center items-center mt-[-100px]'>
          <img src={card.image} className='h-[150px] w-[180px] rounded-[5px]' alt=''></img>
           <div className='flex flex-col ml-[20px] justify-center items-center'>
           <div className='icondiv flex flex-row'>
           <FaStar className='h-[20px] w-[20px]' />
           <FaStar className='h-[20px] w-[20px] ml-[5px]'/>
           <FaStar className='h-[20px] w-[20px] ml-[5px]'/>
           <FaStar className='h-[20px] w-[20px] ml-[5px]'/>
           </div>
          <h2 className='text-[30px] text-center text-[#202020] line-[20px]'>{card.text}</h2>
          <h2 className='text-[30px] text-center text-red-800 line-[20px]'>{card.price}</h2> 
          </div>

         </div> 
               
         ))}

        </div>






        </SwiperSlide>
        <SwiperSlide className='slider23'>
        <div className='flex flex-col'>
          {data1.map((card, index)=>(

         <div key={index} className='flex flex-row h-[400px]  w-[500px] justify-center items-center mt-[-100px]'>
          <img src={card.image} className='h-[150px] w-[180px] rounded-[5px]' alt=''></img>
           <div className='flex flex-col ml-[20px] justify-center items-center'>
           <div className='icondiv flex flex-row'>
           <FaStar className='h-[20px] w-[20px]' />
           <FaStar className='h-[20px] w-[20px] ml-[5px]'/>
           <FaStar className='h-[20px] w-[20px] ml-[5px]'/>
           <FaStar className='h-[20px] w-[20px] ml-[5px]'/>
           </div>
          <h2 className='text-[30px] text-center text-[#202020] line-[20px]'>{card.text}</h2>
          <h2 className='text-[30px] text-center text-red-800 line-[20px]'>{card.price}</h2> 
          </div>

         </div> 
               
         ))}

        </div>
          






        </SwiperSlide>
    
      </Swiper>
      
      </div>
    </>
  )
}

export default Slickertwo