import React, { useState } from 'react'
import { CircleUser, CircleX } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import '../assets/css/style.css'
import { useEffect } from 'react';

const Navbar = () => {
  
  const navdata = [{
     title:"Profile",
     path:"/profile"
    },
    {
     title:"Project",
     path:"/projects"
    },
    {
     title:"Contact",
     path:"/contact"
    }]
//now using useRef
    const nameref = useRef(null)
    const [name, setName] = useState('');

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if(storedName){
            setName(storedName);
        }
    }, [] );

// commented lines are get input using only state
    // const[userdata, setuserdata] = useState({
    //    email: '',
    //    password: ''
    // })

    // const handleChange = (e) => {
    //   setuserdata({ ...userdata, [e.target.id]: e.target.value})
    // }
    const handleLogin = (e) => {
      e.preventDefault();
      const newnameValue = nameref.current.value;
      setName(newnameValue);
      localStorage.setItem('name', newnameValue) 
    }
  const [visible, setvisible] = useState(false);
  return (
    <>
<div className="h-[4rem] w-full flex justify-center items-center rounded-md bg-white border border-gray-400">
    <div className="h-full w-[90%] flex flex-row items-center">
        <div className='w-[50%] h-full flex justify-start items-center font-semibold pinktext text-2xl'><h2>{name ? name:"JEYAKUMAR S"}</h2></div>
        <div className='w-[45%] h-full flex justify-end items-center'>
            <ul className='h-full w-full list-none flex  items-center gap-10 justify-end'>
               {navdata.map((data, index) => (
                <NavLink  key={index} to={data.path} className='h-[60%] w-[15%] flex items-center justify-center hover:opacity-60'><li className='text-xl navtext font-semibold'>{data.title}</li></NavLink> ))}
                
                {/* <li className='text-xl font-semibold px-3'>Profile</li>
                <li className='text-xl font-semibold px-3'>Projects</li>
                <li className='text-xl font-semibold px-3'>Contact</li> */}
          <div className='w-[10%] h-full flex justify-end items-center navtext'><li><CircleUser onClick={() => setvisible(true)} size={35}/> </li> </div>
            </ul>
        </div>
    </div>
</div>
{
  visible && (
    <>
                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                            <div className=" h-[35%] w-[30%] bg-red z-50 flex flex-col  bg-white shadow-lg  ">
                                <div className="w-full h-[18%] flex flex-row justify-start px-10 items-center border-2 rounded-sm text-gray-600 text-xl font-bold ">
                                    <div className="w-1/2">
                                        Profile
                                    </div>
                                    <div className="w-1/2 flex justify-end ">
                                        <CircleX  onClick={() => setvisible(!visible)} />
                                    </div>
                                </div>
                                <div className="w-full h-[68%] flex flex-row justify-center items-center">
                                    <form className="w-[80%]  flex flex-col justify-center items-center gap-4" onSubmit={handleLogin}>
                                        {/* <input type="email" name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} />
                                        <input type="password" name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} /> */}
                                        <input type="text" ref={nameref} name="" id="name" placeholder="Name" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-gray-500" required/>          
                                        <button type="submit" className="active p-2  text-white w-full rounded-sm text-lg font-bold"> Update Name</button>
                                    </form>
                                </div>
                                <div className="w-full h-[18%] flex flex-row  justify-center items-end">
                                    <button onClick={() => setvisible(!visible)} className="bg-gray-600 p-3 text-white w-full h-full rounded-sm text-lg font-bold"> Cancel </button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
  )
}

export default Navbar
