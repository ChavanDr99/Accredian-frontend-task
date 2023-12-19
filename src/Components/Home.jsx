import {React,useEffect} from 'react'
import { TypeAnimation } from 'react-type-animation';
import {Link,  useNavigate} from 'react-router-dom'

import lottie from 'lottie-web';
import animationData from "./home.json"

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const anim = lottie.loadAnimation({
          container: document.getElementById('lottie-container'),
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData,
        });
        return () => anim.destroy(); 
      }, []);
  return (
<div className="py-0    ">  
<h1 className='font-bold text-blue-700 mx-5 text-3xl'>accredian</h1>
<p className='font-bold text-gray-500 mx-5 text-sm'>credentials that matter</p>
    <div className="w-[100%] flex flex-col  h-[10%] p-[5%] py-[0%] mr-0  mb-5 bg-blue-20 ">
       
  <div className="">
  
    <div className="flex flex-col md:flex-row">

      <div className="ml-0 md:w-[100%] max-w-[100%]"> 
     
        <p className="text-lg font-sans mt-[20%] md:font-serif max-md:text-md text-gray-500 md:mr-[20%]">
          <h1 className="text-black mb-4 font-bold">
            <TypeAnimation
              sequence={[
                ' Hello User... ',
                1000,
                ' Welcome To Accredian...',
                2000,
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: '1.5rem', display: 'inline-block', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h1>
          FullStack Education is a fast-growing e-learning company that runs its
ed-tech brand by the name Accredian www.accredian.com Accredian arms working
professionals with next-generation skill sets like data science and product management
and provide them with a transformative learning experience to help them move up in
their careers. The company has been founded by ISB and BITS Pilani graduates 
</p>
        <button className="w-max mt-8 py-2 px-6 bg-blue-600 text-gray-100 outline hover:text-white hover:bg-blue-800 rounded-md" onClick={() => navigate('/login')}>
          Explore More
        </button>
      </div>

      <div className=" flex sm-p-[5px] sm-justify-center sm-items-center justify-start items-start ">
      <div id="lottie-container" style={{ width: '700px', height: '600px' }} />
      </div>
    </div>
  </div>
</div>
<div className=" flex w-[100%] pt-7 md:flex-row flex-col h-max md:px-[2%] mr-0 my-0 text-slate-600 bg-gray-100  p-1 "  >
          <div className=" w-[60%] flex flex-col  gap-2 text-[18px] text-[#646464] md:ml-0 ml-12 md:items-start md:justify-start items-center justify-center ">
          <h1 className='font-bold text-blue-700 mx-5 text-3xl'>accredian</h1>
<p className='font-bold text-gray-500 mx-5 text-sm'>credentials that matter</p>

        
      
        </div>
      <div className=' w-[100%] ml-10 flex flex-col justify-center items-center'>
         
          <h4 className='text-center mr-[30%] mt-[5%] md:mb-[10%] md:text-lg text-sm text-gray-600'>Copyright. All rights reserved.</h4>
      </div>
           
      <div className=" w-[60%] flex flex-col md:mt-[0%]  gap-2 text-[18px] text-[#646464] md:ml-0 ml-12 md:items-start md:justify-start items-center justify-center " >
      <h4 className='  text-center text-gray-500 ml-4 mt-5'>Follows Us On.</h4>
        <div className='flex flex-row gap-4 '>
      <div  className="flex text-xl bg-[#efefef]  p-2 rounded-full hover:bg-blue-500 hover:text-white"style={{ transition: "all 0.3s" }} >
      <a href="https://www.facebook.com/insaidlearn" target="_blank" > <FacebookRoundedIcon  /></a> 
              </div>  
              <div className="flex text-xl bg-[#efefef] p-2 rounded-full hover:bg-red-500 hover:text-white"style={{ transition: "all 0.3s" }}>
              <a href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" target="_blank"> <YouTubeIcon/></a> 
              </div>
              <div className="flex text-xl bg-[#efefef] p-2 rounded-full hover:bg-blue-500 hover:text-white"style={{ transition: "all 0.3s" }}>
              <a href="https://twitter.com/insaidlearn" target="_blank"> <TwitterIcon/></a>  
              </div>
              <div className="flex text-xl bg-[#efefef] p-2 rounded-full hover:bg-gradient-to-r from-yellow-400 via-orange-400 via-pink-500 via-purple-600 to-blue-500  hover:text-white"style={{ transition: "all 0.3s" }}>
              <a href="https://www.instagram.com/insaid.learn/n" target="_blank"><InstagramIcon/></a>    
              </div>
              
            
              </div>   

        
      
        </div>
    
     
  </div>


</div>

        
    )
  
}

export default Home
