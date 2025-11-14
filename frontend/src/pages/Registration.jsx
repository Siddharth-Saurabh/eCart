import React from 'react'
import Logo from '../assets/eCartLogo.jpg'
import { useNavigate } from 'react-router-dom'
import google from '../assets/image.png'
const Registration = () => {
  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      
      {/* Header */}
      <div
        className="w-full h-20 flex items-center justify-start px-[30px] gap-2.5 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={Logo}
          alt="eCartLogo"
          className="w-[50px] h-[50px] object-contain rounded-full"
        />
        <h1 className="text-[22px] font-sans">eCart</h1>
      </div>

      {/* Title */}
      <div className="w-full h-[100px] flex items-center justify-center flex-col gap-2.5">
        <span className="text-[25px] font-semibold">Registration Page</span>
        <span>Welcome to the eCart , Place your order</span>
      </div>
      <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
        <form action="" className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-5'>
            <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-2.5 py-5 cursor-pointer'>
                <img src={google} alt="Google logo" className='h-[30px] w-[30px] rounded-full'/>Registration with Google
            </div>
            <div className='w-[100%] h-5 flex items-center justify-center gap-2.5'>
                <div className='w-[40%] h-[1px] bg-[#96969635]'></div> OR
                <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
            </div>
            <div className='w-[90%] h-[400px] flex flex-col items-'></div>
        </form>
      </div>

    </div>
  )
}

export default Registration
