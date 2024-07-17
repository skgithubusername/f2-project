// // import React from 'react'
// // import { FaGoogle } from "react-icons/fa";
// // import { BsTwitterX } from "react-icons/bs";
// // import { CiFacebook } from "react-icons/ci";

// // function Footer() {
// //   return (
// //     <div className=' flex  justify-between py-2 bg-blue-900'>
// //       <div>
// //       <h1 className=' text-white  mt-2 ml-2'>Copyright@2024</h1>
// //       </div>
// //       <div className=' mr-2 mt-2 text-white flex'>
// //       <FaGoogle className=' mr-4' />
// //       <BsTwitterX className=' mr-4' />
// //       <CiFacebook  className=' mr-4' />
// //       </div>
// //     </div>
// //   )
// // }

// // export default Footer












// import React from 'react'
// import { SlSocialFacebook } from "react-icons/sl";
// import { FaWhatsapp } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { RiArrowDropDownLine } from "react-icons/ri";

// function Footer() {
//   return (
//     <div className='flex flex-col md:flex-row justify-between items-center py-2 bg-blue-900'>
//        <div className='  hidden lg:block'>
//         <p className=' text-sm font-thin text-white   ml-4 mt-2'>Design By  </p>
//       </div>
      
//       <div>
//         <h2 className='text-white mt-2 ml-2 text-center md:text-left'>
//         Copyright 2024@KSR Enterprises.  All Rights Reserved
//         </h2>
//       </div>
      
//       <div className='mt-2 text-white flex'>
       
//         <FaWhatsapp className='mx-2 ' />
//         <SlSocialFacebook  className='mx-2 ' />
//         <FaInstagram className='mx-2 ' />
//       </div>
//     </div>
//   )
// }

// export default Footer




















import React, { useState } from 'react';
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

function Footer() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center py-2 bg-blue-900'>
      <div className='relative hidden lg:block'>
        <button onClick={toggleDropdown} className='flex items-center text-sm font-thin text-white ml-4 mt-2'>
          Design By
          <RiArrowDropDownLine className='ml-1' />
        </button>
        {dropdownVisible && (
          <div className='absolute  w-56  bottom-full mb-2 py-1 bg-white text-black text-sm rounded shadow-lg'>
            <p className='px-6  py-2'>Hemsida and Tech Innovations</p>
          </div>
        )}
      </div>
      
      <div>
        <h2 className='text-white mt-2 ml-2 text-center md:text-left'>
          Copyright 2024@KSR Enterprises. All Rights Reserved
        </h2>
      </div>
      
      <div className='mt-2 text-white flex'>
        <FaWhatsapp className='mx-2' />
        <SlSocialFacebook className='mx-2' />
        <FaInstagram className='mx-2' />
      </div>
    </div>
  );
}

export default Footer;
