

// 


import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import specication from '../img/Screenshot 2024-07-01 125205.png'

function Machinery() {
  // Dummy data for buttons, replace with your actual data source
  const buttons = [
    { id: 1, label: 'Button 1' },
    { id: 2, label: 'Button 2' },
    { id: 3, label: 'Button 3' },
    { id: 4, label: 'Button 4' },
    { id: 5, label: 'Button 5' },
  ];

  return (
    <div className="min-h-screen bg-[#0c4999] pb-16">
      <Navbar />
      <h2 className="text-[#b1becf] px-6 text-3xl font-semibold pt-28">Machinery</h2>
      <div className="container mx-auto lg:flex justify-between items-center mt-20">
        <div className="bg-white rounded-lg mx-8 p-4 py-12">
          <img
            src="https://s3-alpha-sig.figma.com/img/4dc8/0c7c/6bbf8cf3fc3ce0f19e5976ed7f283597?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0sCRaWueguU2r0QzqcaJg4ljBitR2KW76sp1LdVZa2QcTV2EYO3aIWk2lKfcm5HYwZQWvDL3oVofSWPXfl-n9sraNMwlFkfCTCkKLXH0KhZTWVFrU-X0uZxt9kKmFGT2xlYuWyQmbXe0nkP32KFaXn1wyePsCTKmyC~sc0w5aivgvmxvRgweKyx~JbFYjnwi68FZoErmJrj547M~l3Td-klC628pMmlymmSpvYpRqOG4x-juI2iD-aJwIk-4R1J7TCey6E29NrhuQm3oWJKk2muFrTeNQV9qQArjVhFZW48eCLQC9-QGEZGcaZnGpkPqCZwNoiGo~Fk2kHfLcwOgQ__"
            alt="Four Arm Shuttle Machine"
            className="w-full rounded-lg"
            loading="lazy" 
            title="KSR Enterprises machine" 
          />
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <h2 className="text-white font-semibold text-3xl px-4">Four Arm Shuttle Machine</h2>
          <p className="text-[#C1C1C1] mt-4 px-4">
            Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.
          </p>
          {/* <h3 className="text-white text-lg mt-6 px-4">TECHNICAL SPECIFICATIONS</h3> */}
          <div className=' mt-4 m-4'>
            <img src={specication} alt="error" />
          </div>
         
                
          <div className="flex flex-wrap text-white m-2 my-6">
            {buttons.map((button) => (
              <Link
                key={button.id}
                to={`/machinery-details/${button.id}`}
                className="bg-blue-950 rounded-lg m-4 px-2 py-1"
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="container mx-auto lg:flex justify-between items-center mt-20">
        <div className="bg-white rounded-lg mx-8 p-4 py-12">
          <img
            src="https://s3-alpha-sig.figma.com/img/4dc8/0c7c/6bbf8cf3fc3ce0f19e5976ed7f283597?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0sCRaWueguU2r0QzqcaJg4ljBitR2KW76sp1LdVZa2QcTV2EYO3aIWk2lKfcm5HYwZQWvDL3oVofSWPXfl-n9sraNMwlFkfCTCkKLXH0KhZTWVFrU-X0uZxt9kKmFGT2xlYuWyQmbXe0nkP32KFaXn1wyePsCTKmyC~sc0w5aivgvmxvRgweKyx~JbFYjnwi68FZoErmJrj547M~l3Td-klC628pMmlymmSpvYpRqOG4x-juI2iD-aJwIk-4R1J7TCey6E29NrhuQm3oWJKk2muFrTeNQV9qQArjVhFZW48eCLQC9-QGEZGcaZnGpkPqCZwNoiGo~Fk2kHfLcwOgQ__"
            alt="Four Arm Shuttle Machine"
            className="w-full rounded-lg"
          />
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <h2 className="text-white font-semibold text-3xl px-4">Four Arm Shuttle Machine</h2>
          <p className="text-[#C1C1C1] mt-4 px-4">
            Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.
          </p>
          {/* <h3 className="text-white text-lg mt-6 px-4">TECHNICAL SPECIFICATIONS</h3> */}
          <div className=' mt-4 m-4'>
            <img src={specication} alt="error" />
          </div>
         
                
          <div className="flex flex-wrap text-white m-2 my-6">
            {buttons.map((button) => (
              <Link
                key={button.id}
                to={`/machinery-details/${button.id}`}
                className="bg-blue-950 rounded-lg m-4 px-2 py-1"
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="container mx-auto lg:flex justify-between items-center mt-20">
        <div className="bg-white rounded-lg mx-8 p-4 py-12">
          <img
            src="https://s3-alpha-sig.figma.com/img/4dc8/0c7c/6bbf8cf3fc3ce0f19e5976ed7f283597?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0sCRaWueguU2r0QzqcaJg4ljBitR2KW76sp1LdVZa2QcTV2EYO3aIWk2lKfcm5HYwZQWvDL3oVofSWPXfl-n9sraNMwlFkfCTCkKLXH0KhZTWVFrU-X0uZxt9kKmFGT2xlYuWyQmbXe0nkP32KFaXn1wyePsCTKmyC~sc0w5aivgvmxvRgweKyx~JbFYjnwi68FZoErmJrj547M~l3Td-klC628pMmlymmSpvYpRqOG4x-juI2iD-aJwIk-4R1J7TCey6E29NrhuQm3oWJKk2muFrTeNQV9qQArjVhFZW48eCLQC9-QGEZGcaZnGpkPqCZwNoiGo~Fk2kHfLcwOgQ__"
            alt="Four Arm Shuttle Machine"
            className="w-full rounded-lg"
          />
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <h2 className="text-white font-semibold text-3xl px-4">Four Arm Shuttle Machine</h2>
          <p className="text-[#C1C1C1] mt-4 px-4">
            Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.
          </p>
          {/* <h3 className="text-white text-lg mt-6 px-4">TECHNICAL SPECIFICATIONS</h3> */}
          <div className=' bg-white mt-4 m-4'>
            <img src={specication} alt="error" />
          </div>
         
                
          <div className="flex flex-wrap text-white m-2 my-6">
            {buttons.map((button) => (
              <Link
                key={button.id}
                to={`/machinery-details/${button.id}`}
                className="bg-blue-950 rounded-lg m-4 px-2 py-1"
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Machinery;



































// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../component/Navbar';
// import axios from 'axios'; // Import axios for API requests
// function Machinery() {
//   // State variables
//   const [materialMains, setMaterialMains] = useState([]);
//   const [buttons, setButtons] = useState([]);

//   useEffect(() => {
//     // Fetch materialMains data when component mounts
//     fetchMaterialMains();
//     // Set dummy buttons data
//     setButtons([
//       { id: 1, label: 'Button 1' },
//       { id: 2, label: 'Button 2' },
//       { id: 3, label: 'Button 3' },
//       { id: 4, label: 'Button 4' },
//       { id: 5, label: 'Button 5' },
//     ]);
//   }, []);

//   // Function to fetch materialMains data
//   const fetchMaterialMains = async () => {
//     try {
//       const response = await axios.get('/api/materialMains/allMaterialMains');
//       setMaterialMains(response.data);
//     } catch (error) {
//       console.error('Error fetching materialMains:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0c4999] pb-16">
//       <Navbar />
//       <h2 className="text-[#b1becf] px-6 text-3xl font-semibold pt-28">Machinery</h2>
//       <div className="container mx-auto lg:flex justify-between items-center mt-20">
//         {materialMains.map((materialMain, index) => (
//           <div key={index} className=" mx-8 p-4 py-12 lg:w-1/2">
//            <div className=''>
//            <img
//               src={`/${materialMain.image}`} // Adjust the image source based on your data
//               alt={materialMain.title}
//               className="w-full rounded-lg"
//               loading="lazy"
//             />
//            </div>
//             <div className="mt-8">
//               <h2 className="text-white font-semibold text-3xl px-4">{materialMain.title}</h2>
//               <p className="text-[#C1C1C1] mt-4 px-4">{materialMain.desc}</p>
//               {materialMain.purpose && <p className="text-gray-600 mt-2">Purpose: {materialMain.purpose}</p>}
//               {materialMain.specification && (
//                 <div className="mt-2 p-10">
//                   <img
//                     src={materialMain.specification}
//                     alt="Specification"
//                     className="w-full h-40 object-cover rounded-lg"
//                   />
//                 </div>
//               )}
//               <div className="flex flex-wrap text-white m-2 my-6">
//                 {buttons.map((button) => (
//                   <Link
//                     key={button.id}
//                     to={`/machinery-details/${button.id}`}
//                     className="bg-blue-950 rounded-lg m-4 px-2 py-1"
//                   >
//                     {button.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Machinery;
