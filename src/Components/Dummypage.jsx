import {React,useEffect, useState} from 'react'
import lottie from 'lottie-web';
import animationData from "../Components/lottieanimation/Success.json"
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';


const Dummypage = () => {
  const navigate=useNavigate();
    axios.defaults.withCredentials =true
    const handlesubmit =()=>{
     axios.get('http://localhost:8081/logout')
     .then(res=>{
      toast.success('Logout successfully!', {
        position: "top-center",
        duration: 3000
      });
        navigate( '/login');
     })   .catch(err=>{
        console.log(err)
     })
    }
    const [auth,setAuth] = useState(false);
    const [message,setMessage] =useState("");
    const [name,setName]=useState('')
    useEffect(() => {
      axios.get('http://localhost:8081')
        .then(res => {
          console.log("Login success");
          if (res.data.Status === "Success") {
            setAuth(true);
            setName(res.data.name);
            
            if (!auth) {
              navigate('/Dummy');
            }
          } else {
            setAuth(false);
            setMessage(res.data.error);
          }
        })
        .catch(error => {
          console.error("Error:", error);
          
        });
    }, [auth, navigate]);
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


    <div >
        <Link to="/" className='font-bold text-blue-700 mx-5 text-3xl'>accredian</Link>
      <div className=' flex justify-center items-center'>


<div id="lottie-container" style={{ width: '550px', height: '450px' }} />
</div>
<h1 className='font-bold flex justify-center items-center text-2xl  text-blue-700 mx-5 md:text-3xl'> {auth ? `You Are Successfully Logged-In ${name}` :''} </h1>
{
    auth ?
    <div className='flex justify-center items-center'>
       
    <button className='"w-max mt-8 py-2 px-6 bg-red-600 text-gray-100 outline hover:text-white hover:bg-red-800 rounded-md' onClick={handlesubmit}>Logout</button>
    </div>
    :
    <div>{
        navigate('/login')
    }
    </div>
}
    </div>
  )
}

export default Dummypage
