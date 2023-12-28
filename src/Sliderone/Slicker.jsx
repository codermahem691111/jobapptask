import React, {useRef, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './slicker.css'
import { Navigation } from 'swiper/modules';
import Cardimg1 from "../assets/card1.jpg"
import Cardimg2 from "../assets/card2.jpg"
import Cardimg3 from "../assets/card3.jpg"
import Cardimg4 from "../assets/card4.jpg"
import Cardimg5 from "../assets/card5.jpg"
import Cardimg6 from "../assets/card7.jpg"
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6"
import { FaSearch } from "react-icons/fa";
import GoogleFont from 'react-google-fonts';
const data1=[
  { image:Cardimg1, price:"$100", texthd:"HP Laptop" ,textpr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"},
  {image:Cardimg2, price:"$80", texthd:"Web Cam" ,textpr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"},
  {image:Cardimg3, price:"$130", texthd:"Vr Glass" ,textpr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"},
  {image:Cardimg4, price:"$5", texthd:"Headphones" ,textpr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"} 



];

const data2=[
  { image:Cardimg5, price:"$100", texthd:"Camera" ,textpr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"},
  {image:Cardimg2, price:"$130", texthd:"Web Cam" ,textpr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"},
  {image:Cardimg6, price:"$8", texthd:"Bulb" ,textpr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"},
  {image:Cardimg4, price:"$5", texthd:"Headphones" ,textpr:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"} 



];


const Slicker = () => {
 
  return (
    <>
    
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='slide1' >
        
         <div className='grid xl:grid-cols-2 sm:grid-cols-1 justify-items-center place-items-center align-center '>
          {data1.map((card, index)=>(
          <div key={index} className='h-[50px] w-[400px]   mt-[220px] flex flex-row justify-center items-center'>
           <div>
           <div className='imgcontainer'>
            
            <img className='image-wrapper xl:h-[200px] xl:w-[200px] sm:h-[70px] sm:w-[100px] rounded-[20px]' src={card.image} alt=''></img>
            <div className='overly'>
              <div className='content'>
              <FaSearch className='h-[20px] w-[50px]' />
                  
              </div>
               
            </div>
         </div>
         </div>
            <div className='ml-[140px] flex flex-col py-10'>
       
            <h2 className='text-2xl font-family-roboto'>{card.texthd}</h2>  
            <h2 className='text-3xl text-red-700 font-family-roboto'>{card.price}</h2> 
            <h2 className='text-sm font-family-roboto'>{card.textpr}</h2>
        
            <button class="px-4 py-2 mt-3 mb-5 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                 Add to cart
            </button>
            </div>
          </div>
             
          ))}
              

         </div>
          

      
     

        </SwiperSlide>
        <SwiperSlide  className='slide1'>
        <div className='grid xl:grid-cols-2 sm:grid-cols-1 justify-items-center place-items-center align-center '>
          {data2.map((card, index)=>(
          <div key={index} className='h-[50px] w-[400px]   mt-[220px] flex flex-row justify-center items-center'>
           <div>
           <div className='imgcontainer'>
            
            <img className='image-wrapper xl:h-[200px] xl:w-[200px] sm:h-[70px] sm:w-[100px] rounded-[20px]' src={card.image} alt=''></img>
            <div className='overly'>
              <div className='content'>
              <FaSearch className='h-[20px] w-[50px]' />
                  
              </div>
               
            </div>
         </div>
         </div>
            <div className='ml-[140px] flex flex-col py-10'>
          
            <h2 className='text-2xl'>{card.texthd}</h2>  
            <h2 className='text-3xl text-red-700'>{card.price}</h2> 
            <h2 className='text-sm'>{card.textpr}</h2>
            <button class="px-4 py-2 mt-3 mb-5 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                 Add to cart
            </button>
            </div>
          </div>
             
          ))}
              

         </div>
          

      



        </SwiperSlide>
      
      </Swiper>
    </>
  )
}

export default Slicker