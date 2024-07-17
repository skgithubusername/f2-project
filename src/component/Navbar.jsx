






















// import React, { useState } from 'react';
// import logo from '../img/KSR-logo.png';
// import imglogo from '../img/Asset 2 1.png';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className=" bg-white bg-opacity-35 shadow-lg shadow-gray-700 backdrop-filter backdrop-blur-md py-3 px-6 w-full fixed top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <img className="ml-8 w-10 h-10" src={logo} alt="KSR Enterprises Logo" loading='lazy' title='KSR Enterprises Logo' />
//           <Link to='/' className=" ml-1 mt-1 cursor-pointer text-white font-semibold text-lg">
//             <img src={imglogo} alt="error" /> Enterprises
//           </Link>
//         </div>
//         <div className="hidden md:flex text-white items-center">
//           <Link to='/' className="text-xl px-4 font-semibold">Home</Link>
//           <Link to='/about' className="text-xl px-4 font-semibold">About Us</Link>
//           <div className="relative">
//             <bu onClick={toggleDropdown} className="text-xl px-4 font-semibold focus:outline-none">
//               Products
//             </bu>
//             {isDropdownOpen && (
//               <div className="absolute mt-2  text-white rounded-md ">
//                 <a href="#" className="block px-4 py-2 text-lg">Machinery</a>
//                 <a href="#" className="block px-4 py-2 text-lg">Manufactured</a>
//               </div>
//             )}
//           </div>
//           <a href="#" className="text-xl px-4 font-semibold">Raw Materials</a>
//         </div>
//         <div className="hidden md:flex">
//           <a href="#" className="mr-4 p-1 font-semibold text-white border-2 border-white rounded-2xl">Contact Us</a>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className={`md:hidden fixed top-0 left-0 h-full w-full bg-blue-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
//         <div className="flex items-center justify-between p-4 bg-blue-800">
//           <div className="flex items-center">
//             <img className="w-10 h-10 " src={logo} alt="KSR Enterprises Logo" />
//             <h2 className="ml-2 text-white font-semibold text-lg">KSR Enterprises</h2>
//           </div>
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//             </svg>
//           </button>
//         </div>
//         <div className="text-white  bg-blue-800 flex flex-col items-start space-y-4 px-6 pt-4">
//           <a href="#" className="text-xl font-thin w-full text-left">Home</a>
//           <hr className="text-white bg-white h-[1px] w-full" />
//           <a href="#" className="text-xl font-thin w-full text-left">About Us</a>
//           <hr className="text-white bg-white h-[1px] w-full" />
//           <div className="relative w-full">
//             <button onClick={toggleDropdown} className="text-xl font-thin w-full text-left focus:outline-none">Products</button>
//             {isDropdownOpen && (
//               <div className="bg-blue-800 text-white flex flex-col pl-6">
//                 <a href="#" className="block py-2 text-lg">Machinery</a>
//                 <a href="#" className="block py-2 text-lg">Manufactured</a>
//               </div>
//             )}
//           </div>
//           <hr className="text-white bg-white h-[1px] w-full" />
//           <a href="#" className="text-xl font-thin w-full text-left">Raw Materials</a>
//           <hr className="text-white bg-white h-[1px] w-full" />
//           <a href="#" className="text-xl font-thin w-full text-left">Contact Us</a>
//           <hr className="text-white bg-white h-[1px] w-full" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;










































import React, { useState } from 'react';
import logo from '../img/KSR-logo.png';
import imglogo from '../img/Asset 2 1.png';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className=" bg-white bg-opacity-35 shadow-lg shadow-gray-700 backdrop-filter backdrop-blur-md py-3 px-6 w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img className="ml-8 w-10 h-10" src={logo} alt="KSR Enterprises Logo" loading='lazy' title='KSR Enterprises Logo' />
          <Link to='/' className=" ml-1 mt-1 cursor-pointer text-white font-semibold text-lg">
            <img src={imglogo} alt="error" /> Enterprises
          </Link>
        </div>
        <div className="hidden md:flex text-white items-center">
          <Link to='/' className="text-xl px-4 font-semibold">Home</Link>
          <Link to='/about' className="text-xl px-4 font-semibold">About Us</Link>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-xl  flex px-4 font-semibold focus:outline-none">
              Products <RiArrowDropDownLine className=' w-5 h-5 font-semibold mt-2' />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute   text-white rounded-md ">
                <Link to='/machinery' className="block px-4 py-2 hover:bg-slate-100  hover:text-black text-lg">Machinery</Link>
                <Link to='/manufactured' className="block px-4 py-2 hover:bg-slate-100 hover:text-black text-lg">Manufactured</Link>
              </div>
            )}
          </div>
          <Link  to='/raw' className="text-xl px-4 font-semibold">Raw Materials</Link>
        </div>
        <div className="hidden md:flex">
          <Link  to='/contact' className="mr-4 p-1 font-semibold text-white border-2 border-white rounded-2xl">Contact Us</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden fixed top-0 left-0 h-full w-full bg-blue-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between p-4 bg-blue-800">
          <div className="flex items-center">
            <img className="w-10 h-10 " src={logo} alt="KSR Enterprises Logo" />
            <Link to='/' className="ml-2 text-white font-semibold text-lg">KSR Enterprises</Link>
          </div>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="text-white  bg-blue-800 flex flex-col items-start space-y-4 px-6 pt-4">
          <Link to='/' className="text-xl font-thin w-full text-left">Home</Link>
          <hr className="text-white bg-white h-[1px] w-full" />
          <Link to='/about' className="text-xl font-thin w-full text-left">About Us</Link>
          <hr className="text-white bg-white h-[1px] w-full" />
          <div className="relative w-full">
            <button onClick={toggleDropdown} className=" flex text-xl font-thin w-full text-left focus:outline-none">Products <RiArrowDropDownLine className=' mt-2' /></button>
            {isDropdownOpen && (
              <div className="bg-blue-800 text-white flex flex-col pl-6">
                <Link to='/machinery'  className="block py-2 text-lg">Machinery</Link>
                <Link to='/manufactured'  className="block py-2 text-lg">Manufactured</Link>
              </div>
            )}
          </div>
          <hr className="text-white bg-white h-[1px] w-full" />
          <Link to='/raw' className="text-xl font-thin w-full text-left">Raw Materials</Link>
          <hr className="text-white bg-white h-[1px] w-full" />
          <Link to='/contact' className="text-xl font-thin w-full text-left">Contact Us</Link>
          <hr className="text-white bg-white h-[1px] w-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
