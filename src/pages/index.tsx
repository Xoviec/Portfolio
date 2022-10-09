import type { NextPage } from "next";
import { Navbar } from "../components/home/Navbar";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import Image from 'next/image'
import Chatting from '../images/chatting.png'
import Instagram from '../images/instagram.svg'
import Github from '../images/github.svg'
import Facebook from '../images/facebook.svg'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/mousewheel'
import "swiper/css/pagination";
import { custom } from "zod";
// import required modules

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { ExpCard } from "../components/home/ExpCard";
import { ExpCards } from "../components/home/ExpCards";
import { AssetProjects } from "../components/home/AssetProjects";


const Home: NextPage = () => {

  const [readyExp, setReadyExp] = useState(false)
  const [readyProjects, setReadyProjects] = useState(false)
  const [readyContact, setReadyContact] = useState(false)
  const navbar: Array<string> = ['About', 'Experience', 'Projects', 'Contact'] 

  // console.log(readyProjects)

  const {text} = useTypewriter({
    words:[
      'Frontend Developer',
      'Ambitious student',
      '18 yo'
    ],
    loop: true,
    delaySpeed: 2000,
    

  });


  const pagination = {
    clickable: true,
    type: 'bullets',
    renderBullet: function (index:number, className:string) {
      return '<span class="mniejszyekran:invisible font-bold ' + className + '  ">' + (navbar[index]) + "</span>";
      // return '<span class="' + className + '">' + (index + 1) + "</span>";
       //https://codepen.io/ncer/pen/xpqemZ sie to przytda
      //  return '<button href="#dupa" onClick='+'console.log('+swiper+')'+' class=" w-24 h-24  mr-20 bg-[#6d67d9] flex items-center justify-center border-b-2 text-[#e1e0eb] font-bold border-[#25233c] last-of-type:border-b-0 last-of-type:rounded-b-lg first-of-type:rounded-t-lg">' + (index + 1) + '</button> ';

    },
  };

  // console.log(window.innerHeight)
  
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#a4b8d5] z-10">
        
      <Swiper
          direction={"vertical"}
          // spaceBetween={-63}
          slidesPerView={1}
          // height = {200}
          // onSlideChange={() => console.log('slide change')}
          // loop={true}
          onSlideChange={(swiper) => {
            swiper.activeIndex == 1 ? setReadyExp(true) : 
            swiper.activeIndex == 2 ? setReadyProjects(true) : 
            swiper.activeIndex == 3 ? setReadyContact(true) :  null
              
            
          }}
          // onSwiper={(swiper) => console.log(swiper.activeIndex)}
          pagination={pagination}
          custom={custom}
          modules={[Pagination, Mousewheel]}
          mousewheel={true}
          navigation={true}
          normalizeSlideIndex={true}
          allowTouchMove={false}
          // modules={[Mousewheel]}
          speed={1000}
          className={'h-[100vh] z-10'}
          // onSwiper={(swiper) => setIsActive('none')}

      > 
                  <div className="">
                    
      <SwiperSlide>
          <div  className="flex flex-col justify-center items-center text-body-color bg-card-bg h-[100vh] w-[100wh]  bg-[#3a5a88]">
            <div className="flex flex-row animate-show-up">
              <div className="w-96 h-96 ">
                <Image src={Chatting} alt="xdd" />
              </div>
              <div className="w-96 h-96  flex flex-col justify-center items-start">
                <h1 className="text-[3.1rem] font-bold text-[#a4b8d5]  ">Adrian Gąsiorek </h1>
                <h2 className="text-4xl w-96 font-semibold text-[#92aacc]">{text} <Cursor cursorStyle='_'/> </h2>
                
                <h3 className="text-[#8f9db3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium vitae lorem condimentum sagittis. </h3>
                
              </div>
            </div>
            <div className="flex justify-between w-44 mt-10 animate-show-up">
              <div className=" border-b-4 border-transparent hover:border-[#92aacc] duration-700 ">
                <svg fill="#a4b8d5" xmlns="http://www.w3.org/2000/svg" className="hover:fill-[#92aacc]" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg>
              </div>
              <div className="border-b-4 border-transparent hover:border-[#92aacc] duration-700 ">
                <svg fill="#a4b8d5" xmlns="http://www.w3.org/2000/svg" className="hover:fill-[#92aacc]" viewBox="0 0 30 30" width="50px" height="50px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
              </div>
              <div className="border-b-4 border-transparent hover:border-[#92aacc] duration-700 ">
                <svg fill="#a4b8d5" xmlns="http://www.w3.org/2000/svg" className="hover:fill-[#92aacc]" viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/></svg>
              </div>

            </div>


          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="flex flex-col justify-center items-center text-body-color bg-card-bg snap-center h-[100vh] w-[100wh]  bg-[#4971aa]">
            <div className={`${readyExp ? 'flex flex-col justify-center items-center animate-show-up' : 'hidden'}`}>
              <h1 className="text-[3.1rem] font-bold text-[#a4b8d5] ">I have Experience in:</h1>
              <div className="flex">
                <ExpCards readyProjects={readyProjects}/>
              </div>

            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div id='dupa' className="flex flex-col justify-center items-center text-body-color bg-card-bg snap-center h-[100vh] w-[100wh]  bg-[#3a5a88]">
          <div className="flex  items-center justify-center">
            <h1 className="absolute/ mt-auto/ mb-auto` -left-36` text-[3.1rem] font-bold text-[#a4b8d5]  w-96/ -rotate-90` break-normal ">My projects:</h1>

          </div>

          <div className={`${readyProjects ? 'flex justify-center items-center animate-show-up' : 'hidden'}`}>
            <div className="flex">
              <AssetProjects/>
            </div>
          </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="flex flex-col justify-center items-center text-body-color bg-card-bg snap-center h-[100vh] w-[100wh]  bg-[#5b7fb3]">
          <div className={`${readyContact ? 'flex justify-center items-center animate-show-up h-96 w-96 text-white bg-black' : 'hidden'}`}>
              Dupa
            </div>
          </div>
      </SwiperSlide>
     
      </div>
      </Swiper>

      </div>

    </>
  );
};

export default Home;
