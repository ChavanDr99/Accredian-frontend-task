import {React,useEffect, useState} from 'react'
import lottie from 'lottie-web';
import animationData from "../Components/lottieanimation/React.json"
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-hot-toast';


const Login = () => {
  const navigate=useNavigate();

  
  const [values,setvalues]=useState(
   { 
    email:'',
  password:''
  }
  )
 
  axios.defaults.withCredentials =true
  const handlesubmit=(event)=>{
    event.preventDefault();
   
   
    axios.post('http://localhost:8081/login', values)
    .then((res) => {
      if (res.data.Status === "Success") {
        toast.success('Login successful!', {
          position: "top-center",
          duration: 3000
        });
        navigate('/Dummy');
      }  else {
        toast.error('Invalid credentials. Please try again.', {
          position: "top-center",
          duration: 3000
        });
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.error('Email not found. Please register.', {
        position: "top-center",
        duration: 3000
      });
    });
  }
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
  return  (  <div className='flex h-screen w-full'>

  <div className='hidden sm:flex justify-center items-center w-1/2'>
    <div id="lottie-container" style={{ width: '800px', height: '600px' }} />
  </div>

  <div className='flex flex-col w-[100%] sm:w-1/2 justify-center items-center'>

    <form className='w-full px-6 md:px-[20vh]' onSubmit={handlesubmit} >
    <h1 className=' text-3xl font-bold text-blue-800  sm:text-3xl mb-2'>Welcome Back!</h1> 
    <h1 className=' text-xl text-gray-500 font-bold sm:text-lg mb-7 '>Login to Continue</h1>
     
   
      <h1 className='font-bold text-lg '>Email:</h1>


      <input type='text' required placeholder='Enter Email' className='w-full p-2   rounded-2xl mt-2 '
       onChange={e=>setvalues({...values,email:e.target.value})} />
      <h1 className='my-2 font-bold text-lg'>Password</h1>

      <input type='password' placeholder='Enter Password ' className='w-full p-2  rounded-2xl mt-2 '
       onChange={e=>setvalues({...values,password:e.target.value})}  />


      <input type='submit' className='w-[100%] bg-blue-700  rounded-2xl font-bold p-2 mt-6 text-white' />

      <h1 className='text-center mt-2 font-semibold'>Not Registered ? <Link to="/signup" className='text-blue-800'>Register Here</Link></h1>
    </form>
  </div>
</div>
)
}

export default Login
