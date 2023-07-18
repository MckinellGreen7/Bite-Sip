import { useState } from 'react';
import { logo } from '../assets';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav,setNav] = useState(false);
  const handleNav = ()=>{
    setNav(!nav)
  }
  return (
    <div className="bg-black z-[2] sticky top-0 ">
        <div className='flex flex-row justify-between items-center px-4 max-w-[1260px] mx-auto'>
        <div className='flex flex-row items-center justify-center'>
        <img src={logo} alt="logo" className='w-[0px] h-[80px] px-2 ' />
        <h1 className="font-poppins text-2xl text-[#00df9a] font-bold m-2">Bite & Sipp</h1>
        </div>
        <ul className='hidden md:flex'>
                <li className='font-bold text-white font-poppins text-[15px] mr-4 cursor-pointer '><a href="#home">Home</a></li>
                <li className='font-bold text-white font-poppins text-[15px] mr-4 cursor-pointer '><a href="#Gallery">Gallery</a></li>
                <li className='font-bold text-white font-poppins text-[15px] mr-4 cursor-pointer '><a href="#Cuisines">Cuisines</a></li>
                <li className='font-bold text-white font-poppins text-[15px] mr-4 cursor-pointer '><a href="#Review">Review</a></li>              
                <li className='font-bold text-white font-poppins text-[15px] cursor-pointer '><a href="#Contact">Contact</a></li>  
        </ul>
        <div className="block z-10 md:hidden" onClick={handleNav}>
            {!nav ? <AiOutlineMenu className="fill-white" size={30}/> : <AiOutlineClose className="fill-white" size={30}/>}
        </div>
        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black ease-linear duration-500 flex flex-col items-center":"fixed left-[-100%] z-0"}>
        <h1 className="font-poppins text-2xl text-[#00df9a] font-bold m-2 p-4">Bite & Sipp</h1>
        <ul className='uppercase'>
                <li className='font-bold text-white font-poppins text-[15px] mb-4 cursor-pointer '><a href="/">Home</a></li>
                <li className='font-bold text-white font-poppins text-[15px] mb-4 cursor-pointer '><a href="#Gallery">Gallery</a></li>
                <li className='font-bold text-white font-poppins text-[15px] mb-4 cursor-pointer '><a href="#Cuisines">Cuisines</a></li>
                <li className='font-bold text-white font-poppins text-[15px] mb-4 cursor-pointer '><a href="#Review">Review</a></li>
                <li className='font-bold text-white font-poppins text-[15px] cursor-pointer '><a href="#Contact">Contact</a></li>  
        </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar
