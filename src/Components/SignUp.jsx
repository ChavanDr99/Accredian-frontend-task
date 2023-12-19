import {React,useEffect, useState} from 'react'
import lottie from 'lottie-web';
import animationData from "./React.json"
import { Link} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate=useNavigate();
  const [values,setvalues]=useState(
   { name:'',
    email:'',
  password:'',
  confirmPassword: ''}
  )
 
  const handlesubmit=(event)=>{
    event.preventDefault();
     if (values.password !== values.confirmPassword) {
        toast.error(' Passwords do not match');
        return;
      }
   
      axios.post('http://localhost:8081/register', values)
      .then((res) => {
       
  
        if (res.data && res.data.success) {
          toast.error(' Email is already registered.Please login.', {
            position: "top-center",
            duration: 3000
          });
        } else {
          toast.success('You Are Registered Successfully!', {
            position: "top-center",
            duration: 3000
          });
          navigate('/login');
        }
      })
      .catch((error) => {
        toast.error('Error:', error);
        // Handle other error scenarios accordingly
      });
  };
  

  

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
    <div className='flex h-screen'>
   
      
    <div className='hidden sm:flex justify-center items-center w-1/2'>


      <div id="lottie-container" style={{ width: '800px', height: '600px' }} />
    </div>

    <div className='flex flex-col w-[100%] sm:w-1/2 justify-center items-center'>

      <form className='w-full px-6 md:px-[20vh]' onSubmit={handlesubmit} >

        <h1 className='text-center text-2xl font-bold text-blue-700'>Signup</h1>
        {/* {loader ? <section className='flex justify-center items-center'>
          <ThreeDots size={23} color='blue' />
        </section> :
          <>
          </>} */}
        <input type='text' required placeholder='Name ' name='name' className='w-full p-2 border-2 mt-5 my-2 rounded-2xl'
        onChange={e=>setvalues({...values,name:e.target.value})}
           />
        <input type='email' required placeholder='Enter Email' name='email' className='w-full p-2 border-2  my-2 rounded-2xl'
        onChange={e=>setvalues({...values,email:e.target.value})}  />
        <input type='text' required placeholder='Enter Password ' name='password' className='w-full p-2 border-2 my-2 rounded-2xl'
        onChange={e=>setvalues({...values,password:e.target.value})}  />
        <input type='text' required placeholder='ConfirmPassword' name='confirmPassword' className='w-full p-2 border-2 rounded-2xl my-2 '
           onChange={e=>setvalues({...values,confirmPassword:e.target.value})}  />

        <input type='submit' className='w-[100%] bg-blue-700 border-2 rounded-2xl  p-2 mt-6 text-white' />
        <h1 className='text-center mt-2 font-semibold'>Already Registered ? <Link to="/login" className='text-blue-800'>Sign in Here</Link></h1>
      </form>
    </div>
  </div>
)

}

export default SignUp
