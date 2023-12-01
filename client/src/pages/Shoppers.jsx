import React, {useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import success from '../assets/images/success.png'
import models from "../assets/images/models.png"

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import YoutubeVideo from '../components/YoutubeVideo';
import YoutubeVideoSmall from '../components/YoutubeVideoSmall';
import materialOne from "../assets/images/materialOne.png"
import materialTwo from "../assets/images/materialTwo.png"
import materialThree from "../assets/images/materialThree.png"
import googles from '../assets/images/googles.png'
import headset from '../assets/images/headset.png'
import samples from '../assets/images/samples.png'
import thread from '../assets/images/thread.png'
import toolsPack from '../assets/images/toolsPack.png'
import Bubble from '../components/Bubble';
import InfiniteSlider from './InfiniteSlider';
import { Canvas } from '@react-three/fiber';
import Model from '../components/Model';
import threeDModel from "../assets/3D/Royal_Clothes_Model-v2.glb"
import Backdrop from "../assets/images/assortment-abstract-design-elements.jpg"
import { slideImages } from '../components/slideImages';
import { reviewsData } from '../components/reviewsData';
import CaseStudySlide from '../components/CaseStudySlide';
import { modelData } from '../components/modelData'
import Processslide from '../components/Processslide';

export default function Shoppers({setSubmitted, setOpen}) {

    const [play, setPlay] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isInteracting, setIsInteracting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  
  
    const canvasRef = useRef(null)
  
    const playref = useRef(null)
  
    const onReady = (event) => {
      playref.current = event.target;
    }
  
    const elementRef = useRef(null);
  
    const handleButtonClick = () => {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
  
    useEffect(() => {
      setSubmitted(false)
    }, [open])
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true)
    };
  
  

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());
  
  
    const DURATION = 30000;
    const ROWS = 1;
    const TAGS_PER_ROW = 16;
  
    const REVIEW_DURATION = 50000;
    const REVIEW_ROWS = 2;
    const REVIEW_TAGS_PER_ROW = 10;
  
  
  
    const handleInteractionStart = () => {
      setIsInteracting(true);
    };
  
    const handleInteractionEnd = () => {
      setIsInteracting(false);
    };
  
    const handleSwitchModel = () => {
      const nextIndex = (currentIndex + 1) % modelData.length;
      setCurrentIndex(nextIndex);
    };
  

  return (
    <>
    <div className='h-[70vh] sm:h-[100vh] bg-secondary-100 bg-cover bg-center bg-no-repeat w-full relative flex flex-row items-center'
      // style={{ backgroundImage: `url(${glimereBg})` }}
      >
        {/* <div className="absolute h-full w-full flex justify-center items-end">
          <Bubble classes="h-[60px] sm:h-[80px]  w-[60px] sm:w-[80px] hover:h-[100px] hover:w-[100px] top-[26%] sm:top-[20%] left-[10%] sm:left-[15%]" img={img1} />
          <Bubble classes="h-[40px] sm:h-[60px]  w-[40px] sm:w-[60px] hover:h-[80px] hover:w-[80px] top-[46%] sm:top-[40%] left-[7%]" img={img2} />
          <Bubble classes="h-[80px] sm:h-[100px] w-[80px]  sm:w-[100px] hover:h-[120px] hover:w-[120px] top-[19%] sm:top-[80%] left-[55%] sm:left-[10%]" img={img3} />
          <Bubble classes="h-[40px] sm:h-[60px]  w-[40px] sm:w-[60px] hover:h-[80px] hover:w-[80px] top-[31%] sm:top-[25%] right-[10%] sm:right-[20%]" img={img4} />
          <Bubble classes="h-[70px] sm:h-[90px]  w-[70px] sm:w-[90px] hover:h-[110px] hover:w-[110px] top-[46%] sm:top-[55%] right-[10%]" img={img5} />
          <Bubble classes="h-[60px] sm:h-[80px]  w-[60px] sm:w-[80px] hover:h-[100px] hover:w-[100px] top-[19%] sm:top-[75%] right-[53%] sm:right-[21%]" img={img6} />
          <img src={landingCover} alt="" className='w-[700px] sm:w-[500px] mb-[-30px] sm:mb-[-200px]' />
        </div> */}

        <div className="h-full w-full flex flex-col items-center justify-end px-[40px] sm:px-[100px] pt-[80px] pb-[30px]">

          <div className="w-[340px] sm:w-[750px] z-[4] relative mb-[15px]">

            <h1 className="text-[45px] sm:text-[80px] text-center text-black mb-[20px] head-font">Shop Exclusive Custom made Fashion</h1>

          </div>

          <button className={`bg-black text-white duration-150 hover:bg-[#772f1a] md:py-2.5 py-3.5 px-[25px] rounded-[10px] mb-[20px] cursor-pointer`}
          onClick={()=> {setOpen(true)}}
          >
            Join Our Waitlist
          </button>

          {/* <div className='creators-contain z-[4] border-solid border-[1px] border-black relative py-[5px] sm:py-[10px] px-[25px] sm:px-[50px] rounded-full font-medium text-[12px] sm:text-[15px] text-black flex flex-row gap-[20px] items-center'>
            Featuring Top Fashion Creators
            <div className="flex flex-row pr-[18px] creators-group">
                <div className="h-[35px] w-[35px] bg-gray-200 border-[2px] border-solid border-gray-400 rounded-full cursor-pointer mr-[-25px] duration-200"></div>
                <div className="h-[35px] w-[35px] bg-gray-200 border-[2px] border-solid border-gray-400 rounded-full cursor-pointer mr-[-25px] duration-200"></div>
                <div className="h-[35px] w-[35px] bg-gray-200 border-[2px] border-solid border-gray-400 rounded-full cursor-pointer mr-[-25px] duration-200"></div>
                <div className="h-[35px] w-[35px] bg-gray-200 border-[2px] border-solid border-gray-400 rounded-full cursor-pointer mr-[-25px] duration-200"></div>
              </div>
          </div> */}

        </div>


      </div>

      <div className="h-auto sm:h-[100vh] bg-secondary-200 w-full gap-[20px] relative flex flex-col-reverse sm:flex-row py-[50px] sm:py-[80px] px-[40px] sm:px-[4rem]">


        <div className='sm:flex-[1] flex flex-col h-full w-full items-start justify-center '>
          <div className="w-[90%] sm:w-[90%] text-left">
            <h1 className="text-black text-[30px] sm:text-[60px] head-font">The Future of African Fashion is Here</h1>

          </div>
          <div className="w-[100%] sm:w-[60%] mt-[20px] text-left">
            <p className="text-black text-[18px]">We’re shaping the future by connecting buyers and consumers with the best that African fashion has to offer.</p>
          </div>
        </div>
        <div className="sm:flex-[1] h-[300px] sm:h-auto bg-black-100 rounded-[20px] bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${models})` }}

        >
        </div>
      </div>

      <div className="pt-[130px] pb-[180px] sm:pb-0 sm:pt-0 sm:h-[100vh] w-full bg-secondary-100 bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url(${models})` }}
      >
        <div className="h-full w-full relative">
          <img className=" absolute duration-150  w-[20px] sm:w-[40px]  hover:w-[60px] top-[30%] sm:top-[17%] left-[10%] sm:left-[15%]" src={thread} />
          <img className=" absolute duration-150  w-[40px] sm:w-[60px] hover:w-[80px] rotate-12 top-[100%] sm:top-[40%] left-[7%]" src={samples} />
          <img className=" absolute duration-150  w-[80px]  sm:w-[100px]  hover:w-[120px] top-[12%] sm:top-[75%] left-[60%] sm:left-[10%]" src={materialTwo} />
          <img className=" absolute duration-150  w-[60px] sm:w-[80px] hover:w-[100px] top-[31%] sm:top-[14%] right-[3%] sm:right-[20%]" src={headset} />
          <img className=" absolute duration-150  w-[70px] sm:w-[90px]  hover:w-[110px] rotate-45 top-[95%] sm:top-[40%] right-[10%]" src={materialThree} />
          <img className=" absolute duration-150  w-[60px] sm:w-[80px]  hover:w-[100px] top-[1%] sm:top-[75%] right-[53%] sm:right-[21%]" src={toolsPack} />
          <div className="h-full w-full flex justify-center items-center">
            <div className="w-[340px] sm:w-[750px]">
              <h1 className="text-[40px] mt-[100px] sm:mt-0 sm:text-[60px] text-center head-font">We focus on technology to build a more sustainable solution</h1>
            </div>
          </div>
        </div>

      </div>

      <div className="h-auto sm:h-[140vh] bg-secondary-200 py-[80px] sm:py-[50px]">
        <div className="h-full w-full flex flex-col gap-[50px] justify-center items-center">
          <div className="w-full sm:w-[60%] flex  px-[40px] justify-start sm:justify-center items-center">
            <h1 className='text-left sm:text-center text-[25px] head-font'>Our User Friendly Platform allows you to explore unique styles from top Fashion Creators</h1>
          </div>
          <div className="w-[80%] sm:w-[73%] h-[400px] sm:h-[420px] p-[40px] border border-black border-solid  overflow-hidden bg-[#fff6d5] rounded-[30px] ">

            {[...new Array(ROWS)].map((_, i) => (
              <InfiniteSlider
                key={i}
                duration={random(DURATION - 5000, DURATION + 5000)}
                reverse={i % 2}
                isHovered={isHovered} // Pass the isHovered state
                className="gap-[100px] h-full"
                loopClass="h-full"
              >
                {shuffle(slideImages).slice(0, TAGS_PER_ROW).map((images, id) => (
                  <div
                    key={id}
                    className=" h-full w-[150px] bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center pt-[10px] sm:pt-[20px]"
                  >
                    <img className='peer hover:scale-125 duration-300' src={images.image} height="300" alt="" />
                    <div className="w-[5px] peer-hover:w-full h-[5px] peer-hover:h-[50px] bg-black peer-hover:bg-[#0000002a] peer-hover:blur-sm duration-500 rounded-[50%]"></div>
                  </div>
                ))}
              </InfiniteSlider>
            ))}



          </div>
        </div>
      </div>

      <div className="h-auto sm:h-[150vh] bg-secondary-100 py-[50px]">
        <div className="h-full w-full flex flex-col gap-[30px] justify-center items-center overflow-hidden">
          <div className="w-full sm:w-[60%] flex px-[40px] justify-start sm:justify-center items-center">
            <h1 className='text-left sm:text-center text-[35px] sm:text-[40px] head-font'>With an interactive and immersive 3D Experience</h1>
          </div>
          <div className="w-[80%] sm:w-[73%] h-[800px] sm:h-[1000px] overflow-hidden p-0 sm:p-[20px] flex justify-center items-center relative">

            <div className="loading-indicator absolute">
              {isLoading ? <p>Loading model...</p> : null}
            </div>

            <div className="w-[100%] sm:w-[80%] h-full rounded-[30px] overflow-hidden bg-[#ffe9b8] relative pt-[30px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Backdrop})` }}

            >

              <div className="absolute h-full w-full flex justify-between items-center p-[20px] sm:p-[50px]">
                <div className="h-full flex flex-col p-[10px] rounded-[10px] gap-[20px]">

                </div>
                <div className="flex flex-col gap-[30px] z-[10]">
                  {modelData.map((model, id) => (
                    <div key={id} className="h-[40px] w-[40px] flex justify-center items-center duration-300 cursor-pointer rounded-full"
                      style={{ backgroundColor: model.mannequinColor || "#ffc588" }}
                      onClick={() => setCurrentIndex(id)}
                    >
                      <div className={` ${id == currentIndex ? "h-[30px] w-[30px]" : "h-[15px] w-[15px]"} hover:h-[30px] hover:w-[30px] duration-300 rounded-full`}
                        style={{ backgroundColor: model.dressColor }}
                      ></div>
                    </div>
                  ))}


                </div>
              </div>

              <Canvas
                ref={canvasRef}
                shadows
                onMouseDown={handleInteractionStart}
                onTouchStart={handleInteractionStart}
                onMouseUp={handleInteractionEnd}
                onTouchEnd={handleInteractionEnd}
              >
                <Model
                  models={modelData}
                  onSwitchModel={handleSwitchModel}
                  initialScale={1}
                  canvasRef={canvasRef}
                  setIsLoading={setIsLoading}
                  isInteracting={isInteracting}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              </Canvas>
            </div>


          </div>

          <div className="w-full sm:w-[60%] flex  px-[40px] justify-start sm:justify-center items-center">
            <p className="text-[18px] text-center">Preview items in realistic 3D environment, visualize texture, size and real time-look.</p>
          </div>
        </div>
      </div>

      <div className="h-auto sm:h-[100vh] bg-secondary-200 "
      >
        <Processslide />
      </div>

      <div className="h-auto sm:h-[100vh] bg-secondary-100 w-full relative flex flex-col sm:flex-row px-[2rem] py-[80px] sm:px-[7rem] sm:py-[7rem] gap-[40px] sm:gap-[80px] justify-center items-center">
        <div className="flex flex-[1] flex-col gap-[20px]">
          <h1 className="text-[28px] sm:text-[40px] font-bold">We prioritize addressing the issues that matters to you.</h1>
          <p className="text-[15px] sm:text-[20px]">See real-life examples of how Glimere's MVP can change your fashion experience.</p>
        </div>
        <CaseStudySlide />
      </div>

      <div className="h-auto sm:h-[100vh] overflow-hidden bg-black flex flex-col gap-[50px] items-center py-[80px] sm:py-[50px]">
        <div className="w-full flex flex-col gap-[20px] sm:gap-[40px]">
          {[...new Array(REVIEW_ROWS)].map((_, i) => (
            <InfiniteSlider
              key={i}
              duration={random(REVIEW_DURATION - 5000, REVIEW_DURATION + 5000)}
              reverse={i % 2}
              isHovered={isHovered} // Pass the isHovered state
              className="gap-[20px] sm:gap-[40px] h-full"
            >
              {shuffle(reviewsData).slice(0, REVIEW_TAGS_PER_ROW).map((data, id) => (
                <div
                  key={id}
                  className="flex flex-col h-[150px] w-[250px] sm:h-[200px] sm:w-[350px] bg-[#313131] rounded-[15px] sm:rounded-[20px] duration-300"
                >
                  <div className="flex-[1] flex flex-row gap-[20px] items-center pt-[20px] px-[25px]">
                    <div className="bg-gray-200 h-[40px] w-[40px] rounded-full"></div>
                    <div className="text-white text-[]">{data.user.name}</div>
                  </div>
                  <div className="flex-[3] text-[12px] sm:text-[15px] text-white px-[25px] py-[20px]">{data.comment}</div>

                </div>
              ))}
            </InfiniteSlider>
          ))}
        </div>

        <p className="text-[18px] px-[50px] sm:text-[30px] font-semibold text-white text-center">Hear What People Are Saying About Us</p>
      </div>


      {/* <div ref={playref} className="container bg-black-100 max-w-full flex justify-center items-center">

        <div className="hidden sm:block my-[70px]">
          <YoutubeVideo onReady={onReady} />
        </div>
        <div className="block sm:hidden my-[70px]">
          <YoutubeVideoSmall onReady={onReady} />
        </div>

      </div> */}


      <div ref={elementRef} className="h-auto py-[130px] sm:py-[140px] sm:p-0 bg-black-100 w-full px-[40px] sm:px-[4rem] relative flex flex-col sm:flex-row">
        <div className="flex items-center justify-center">
          <div className="">
            <h1 className=" text-[40px] text-black sm:text-[70px] mb-[30px] head-font">Ready to slay the fashion game?</h1>
            <div className="w-[90%] sm:w-[70%]">
              <p className='text-[15px] sm:text-[19px] text-black mb-[30px]'>Get in line with Glimere&rsquo;s waitlist and join the fashion revolution!</p>
            </div>

            <button className='px-[40px] py-[12px] bg-primary-100 duration-150 hover:bg-[#9d5c0d] flex justify-center items-center text-white text-[15px] rounded-[10px] cursor-pointer'
              onClick={() => { setOpen(true) }}
            >
              Join Now!
            </button>

          </div>
        </div>

      </div>
    </>
  )
}