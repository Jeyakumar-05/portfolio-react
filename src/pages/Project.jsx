import React from 'react'
import '../assets/css/card.css'
import Photo3 from '../assets/img/docters.jpg'
import Photo2 from '../assets/img/bank.webp'
import Photo1 from '../assets/img/pixelimg.jpg'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name:"BankingManagementSystem",
    img: Photo3,
    about : "BankingManagementSystem is software that manages banking operations like account creation, transactions, and loans, enhancing efficiency and customer experience through automation and secure data handling.",
    source : "https://github.com/Jeyakumar-05/BankingManagementSystem_ConsoleProject"
  },
  {
    name:"DetectPixlatedImage and CorrectIt",
    img: Photo1,
    about : "DetectPixelatedImage identifies images with blocky features and blur images due to low resolution, while CorrectIt restores these images, enhancing clarity and detail using advanced algorithms.",
    source : "https://github.com/Jeyakumar-05/DetectPixelImgAndCorrect_INTEL"
  },
  {
    name:"DoctersPortal",
    img: Photo2,
    about : "DoctorsPortal is a web platform that enables communication and management between healthcare providers and patients,  allowing for appointment scheduling and access to medical records.",
    source : "https://github.com/Jeyakumar-05/DoctorsPortal_Website"
    }
]


const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 1024,
        settings:{
          slidesToShow:3,
          slidesToScroll:3,
          infinite:true,
          dots:true
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow:2,
          slidesToScroll:2,
          initialSlide:2
        }
      },
      {
        breakpoint: 480,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        }
      }
    ]
    
  };
  return (
    <>
      <div className='w-3/4 h-[80vh] m-auto'> 
        <div className='mt-20 mb-20'>
          <Slider {...settings}>
            {data.map((d,id) => (
              <div key={id} className='bg-white h-[450px] textcolor rounded-xl flex justify-center hover:scale-105 duration-300 ease-in-out'>
                <div className='rounded-t-xl flex justify-center items-center h-[45%] '>
                  <img src={d.img} alt="gitsource" className='rounded-t-xl h-full w-full'/>
                </div>

                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                  <p className='text-xl font-semibold'>{d.name}</p>
                  <p>{d.about}</p>
                </div>
                <div className='flex items-end justify-center'>
                  <div className='btnbg text-white text-lg px-6 py-1 rounded-xl '><a href={d.source} target="_blank">Source</a></div>
                </div>
              </div>
            ))}
          </Slider>
          
        </div>
      </div>
    </>
  );
};
export default Project
