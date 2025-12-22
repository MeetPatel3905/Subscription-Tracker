import React from 'react'
import CARD_2 from "../../assets/images/Card-2.webp";

const AuthLayout = ({ children }) => {
  return <div className='flex'>
    <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
    <h2 className="text-lg font-medium text-black mb-20">
        Subscription Tracker
      </h2>
      {children}
   </div>

   <div className="hidden md:flex w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
    <div className='' />
    <div className='' />
    <div className='' />

    <img
      src={ CARD_2}
      className=''
      />

    
    
    </div>  



  </div>
}

export default AuthLayout;  