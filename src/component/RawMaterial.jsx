// // // //

// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import Navbar from '../component/Navbar';
// // // import specication from '../img/Screenshot 2024-07-01 125205.png'

// // // function RawMaterial() {
// // //   // Dummy data for buttons, replace with your actual data source
// // //   const buttons = [
// // //     { id: 1, label: 'Button 1' },
// // //     { id: 2, label: 'Button 2' },
// // //     { id: 3, label: 'Button 3' },
// // //     { id: 4, label: 'Button 4' },
// // //     { id: 5, label: 'Button 5' },
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-[#0c4999] pb-16">
// // //       <Navbar />
// // //       <h2 className="text-[#b1becf] px-6 text-3xl font-semibold  pt-28">Raw Marterial</h2>

// // //       <div className="container mx-auto lg:flex justify-between items-center mt-20">
// // //         <div className="bg-white rounded-lg mx-8 p-4 py-12">
// // //           <img
// // //             src="https://s3-alpha-sig.figma.com/img/4dc8/0c7c/6bbf8cf3fc3ce0f19e5976ed7f283597?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0sCRaWueguU2r0QzqcaJg4ljBitR2KW76sp1LdVZa2QcTV2EYO3aIWk2lKfcm5HYwZQWvDL3oVofSWPXfl-n9sraNMwlFkfCTCkKLXH0KhZTWVFrU-X0uZxt9kKmFGT2xlYuWyQmbXe0nkP32KFaXn1wyePsCTKmyC~sc0w5aivgvmxvRgweKyx~JbFYjnwi68FZoErmJrj547M~l3Td-klC628pMmlymmSpvYpRqOG4x-juI2iD-aJwIk-4R1J7TCey6E29NrhuQm3oWJKk2muFrTeNQV9qQArjVhFZW48eCLQC9-QGEZGcaZnGpkPqCZwNoiGo~Fk2kHfLcwOgQ__"
// // //             alt="Four Arm Shuttle Machine"
// // //             className="w-full rounded-lg"
// // //             loading="lazy"
// // //             title="KSR Enterprises raw"
// // //           />
// // //         </div>
// // //         <div className="mt-8 lg:mt-0 lg:ml-8">
// // //           <h2 className="text-white font-semibold text-3xl px-4">Four Arm Shuttle Machine</h2>
// // //           <p className="text-[#C1C1C1] mt-4 px-4">
// // //             Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.
// // //           </p>
// // //           {/* <h3 className="text-white text-lg mt-6 px-4">TECHNICAL SPECIFICATIONS</h3> */}
// // //           <div className=' mt-4 m-4'>
// // //             <img src={specication} alt="error" />
// // //           </div>

// // //           <div className="flex flex-wrap text-white m-2 my-6">
// // //             {buttons.map((button) => (
// // //               <Link
// // //                 key={button.id}
// // //                 to={`/raw-details/${button.id}`}
// // //                 className="bg-blue-950 rounded-lg m-4 px-2 py-1"
// // //               >
// // //                 {button.label}
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* 2 */}
// // //       <div className="container mx-auto lg:flex justify-between items-center mt-20">
// // //         <div className="bg-white rounded-lg mx-8 p-4 py-12">
// // //           <img
// // //             src="https://s3-alpha-sig.figma.com/img/4dc8/0c7c/6bbf8cf3fc3ce0f19e5976ed7f283597?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0sCRaWueguU2r0QzqcaJg4ljBitR2KW76sp1LdVZa2QcTV2EYO3aIWk2lKfcm5HYwZQWvDL3oVofSWPXfl-n9sraNMwlFkfCTCkKLXH0KhZTWVFrU-X0uZxt9kKmFGT2xlYuWyQmbXe0nkP32KFaXn1wyePsCTKmyC~sc0w5aivgvmxvRgweKyx~JbFYjnwi68FZoErmJrj547M~l3Td-klC628pMmlymmSpvYpRqOG4x-juI2iD-aJwIk-4R1J7TCey6E29NrhuQm3oWJKk2muFrTeNQV9qQArjVhFZW48eCLQC9-QGEZGcaZnGpkPqCZwNoiGo~Fk2kHfLcwOgQ__"
// // //             alt="Four Arm Shuttle Machine"
// // //             className="w-full rounded-lg"
// // //           />
// // //         </div>
// // //         <div className="mt-8 lg:mt-0 lg:ml-8">
// // //           <h2 className="text-white font-semibold text-3xl px-4">Four Arm Shuttle Machine</h2>
// // //           <p className="text-[#C1C1C1] mt-4 px-4">
// // //             Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.
// // //           </p>
// // //           {/* <h3 className="text-white text-lg mt-6 px-4">TECHNICAL SPECIFICATIONS</h3> */}
// // //           <div className=' mt-4 m-4'>
// // //             <img src={specication} alt="error" />
// // //           </div>

// // //           <div className="flex flex-wrap text-white m-2 my-6">
// // //             {buttons.map((button) => (
// // //               <Link
// // //                 key={button.id}
// // //                 to={`/raw-details/${button.id}`}
// // //                 className="bg-blue-950 rounded-lg m-4 px-2 py-1"
// // //               >
// // //                 {button.label}
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //       {/* 3 */}
// // //       <div className="container mx-auto lg:flex justify-between items-center mt-20">
// // //         <div className="bg-white rounded-lg mx-8 p-4 py-12">
// // //           <img
// // //             src="https://s3-alpha-sig.figma.com/img/4dc8/0c7c/6bbf8cf3fc3ce0f19e5976ed7f283597?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0sCRaWueguU2r0QzqcaJg4ljBitR2KW76sp1LdVZa2QcTV2EYO3aIWk2lKfcm5HYwZQWvDL3oVofSWPXfl-n9sraNMwlFkfCTCkKLXH0KhZTWVFrU-X0uZxt9kKmFGT2xlYuWyQmbXe0nkP32KFaXn1wyePsCTKmyC~sc0w5aivgvmxvRgweKyx~JbFYjnwi68FZoErmJrj547M~l3Td-klC628pMmlymmSpvYpRqOG4x-juI2iD-aJwIk-4R1J7TCey6E29NrhuQm3oWJKk2muFrTeNQV9qQArjVhFZW48eCLQC9-QGEZGcaZnGpkPqCZwNoiGo~Fk2kHfLcwOgQ__"
// // //             alt="Four Arm Shuttle Machine"
// // //             className="w-full rounded-lg"
// // //           />
// // //         </div>
// // //         <div className="mt-8 lg:mt-0 lg:ml-8">
// // //           <h2 className="text-white font-semibold text-3xl px-4">Four Arm Shuttle Machine</h2>
// // //           <p className="text-[#C1C1C1] mt-4 px-4">
// // //             Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.
// // //           </p>
// // //           {/* <h3 className="text-white text-lg mt-6 px-4">TECHNICAL SPECIFICATIONS</h3> */}
// // //           <div className=' bg-white mt-4 m-4'>
// // //             <img src={specication} alt="error" />
// // //           </div>

// // //           <div className="flex flex-wrap text-white m-2 my-6">
// // //             {buttons.map((button) => (
// // //               <Link
// // //                 key={button.id}
// // //                 to={`/raw-details/${button.id}`}
// // //                 className="bg-blue-950 rounded-lg m-4 px-2 py-1"
// // //               >
// // //                 {button.label}
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default RawMaterial;

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { Link } from 'react-router-dom';
// // // import Navbar from '../component/Navbar';
// // // import specication from '../img/Screenshot 2024-07-01 125205.png'

// // // function RawMaterial() {
// // //   const [rawMains, setRawMains] = useState([]);
// // //   const [error, setError] = useState('');

// // //   useEffect(() => {
// // //     fetchRawMains();
// // //   }, []);

// // //   const fetchRawMains = async () => {
// // //     try {
// // //       const response = await axios.get('/api/rawMains/allRawMains');
// // //       setRawMains(response.data);
// // //     } catch (error) {
// // //       console.error('Error fetching rawMains:', error);
// // //       setError('Failed to fetch data');
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-[#0c4999] pb-16">
// // //       <Navbar />
// // //       <h2 className="text-[#b1becf] px-6 text-3xl font-semibold pt-28">Raw Material</h2>

// // //       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
// // //         {rawMains.map((item) => (
// // //           <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
// // //             <img
// // //               src={item.image}
// // //               alt={item.title}
// // //               className="w-full h-64 object-cover"
// // //             />
// // //             <div className="p-4">
// // //               <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
// // //               <p className="text-gray-600 mt-2">{item.desc}</p>
// // //               {item.purpose && <p className="text-gray-600 mt-2">Purpose: {item.purpose}</p>}
// // //               <img
// // //               src={item.specification}
// // //               alt={item.title}
// // //               className="w-full h-64 object-cover"
// // //             />
// // //               <div className="mt-4">
// // //                 <Link
// // //                   to={`/raw-details/${item.id}`}
// // //                   className="bg-blue-950 text-white rounded-lg px-4 py-2 inline-block"
// // //                 >
// // //                   View Details
// // //                 </Link>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default RawMaterial;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import Navbar from '../component/Navbar';
// // // import specication from '../img/Screenshot 2024-07-01 125205.png'

// // function RawMaterial() {
// //   const [rawMains, setRawMains] = useState([]);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     fetchRawMains();
// //   }, []);

// //   const fetchRawMains = async () => {
// //     try {
// //       const response = await axios.get('/api/rawMains/allRawMains');
// //       setRawMains(response.data);
// //     } catch (error) {
// //       console.error('Error fetching rawMains:', error);
// //       setError('Failed to fetch data');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#0c4999] pb-16">
// //       <Navbar />
// //       <h2 className="text-[#b1becf] px-6 text-3xl font-semibold pt-28">Raw Material</h2>

// //       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
// //         {rawMains.map((item) => (
// //           <div key={item.id} className=" overflow-hidden shadow-lg">

// //            <div className=' p-12'>
// //            <img
// //               src={item.image}
// //               alt={item.title}
// //               className="w-full h-full object-cover"
// //             />
// //            </div>
// //             <div className="p-4">
// //               <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
// //               <p className="text-gray-600 mt-2">{item.desc}</p>
// //               {item.purpose && <p className="text-gray-600 mt-2">Purpose: {item.purpose}</p>}
// //               {item.specification && (
// //                 <div className="mt-2 p-10">
// //                   <img
// //                     src={item.specification}
// //                     alt="Specification"
// //                     className="w-full h-40 object-cover rounded-lg"
// //                   />
// //                 </div>
// //               )}
// //               <div className="mt-4">
// //                 {/* <Link
// //                   to={`/raw-details/${item.id}`}
// //                   className="bg-blue-950 text-white rounded-lg px-4 py-2 inline-block"
// //                 >
// //                   View Details
// //                 </Link> */}
// //                    <Link
// //                  to={`/raw-details/${item.id}`}
// //                   className="bg-blue-950 text-white rounded-lg px-4 py-2 inline-block"
// //                 >
// //                   View Details
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default RawMaterial;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../component/Navbar';
// import specication from '../img/Screenshot 2024-07-01 125205.png';
// import axios from 'axios';

// function RawMaterial() {
//   const [rawMaterials, setRawMaterials] = useState([]);
//   const buttons = [
//     { id: 1, label: 'Button 1' },
//     { id: 2, label: 'Button 2' },
//     { id: 3, label: 'Button 3' },
//     { id: 4, label: 'Button 4' },
//     { id: 5, label: 'Button 5' },
//   ];

//   useEffect(() => {
//     const fetchRawMaterials = async () => {
//       try {
//         const response = await axios.get('/api/rawMains/allRawMains');
//         setRawMaterials(response.data);
//       } catch (error) {
//         console.error('Error fetching raw materials:', error);
//       }
//     };

//     fetchRawMaterials();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#0c4999] pb-16">
//       <Navbar />
//       <h2 className="text-[#b1becf] px-6 text-3xl font-semibold pt-28">Raw Material</h2>

//       {rawMaterials.map((rawMaterial, index) => (
//         <div key={index} className="container mx-auto lg:flex justify-between items-center mt-20">
//           <div className="bg-white rounded-lg mx-8 p-4 py-12">
//             <img
//               src={rawMaterial.image || "https://s3-alpha-sig.figma.com/img/4dc8/0c7c/6bbf8cf3fc3ce0f19e5976ed7f283597?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0sCRaWueguU2r0QzqcaJg4ljBitR2KW76sp1LdVZa2QcTV2EYO3aIWk2lKfcm5HYwZQWvDL3oVofSWPXfl-n9sraNMwlFkfCTCkKLXH0KhZTWVFrU-X0uZxt9kKmFGT2xlYuWyQmbXe0nkP32KFaXn1wyePsCTKmyC~sc0w5aivgvmxvRgweKyx~JbFYjnwi68FZoErmJrj547M~l3Td-klC628pMmlymmSpvYpRqOG4x-juI2iD-aJwIk-4R1J7TCey6E29NrhuQm3oWJKk2muFrTeNQV9qQArjVhFZW48eCLQC9-QGEZGcaZnGpkPqCZwNoiGo~Fk2kHfLcwOgQ__"}
//               alt={rawMaterial.name || "Raw Material"}
//               className="w-full rounded-lg"
//               loading="lazy"
//               title={rawMaterial.name || "Raw Material"}
//             />
//           </div>
//           <div className="mt-8 lg:mt-0 lg:ml-8">
//             <h2 className="text-white font-semibold text-3xl px-4">{rawMaterial.name || "Four Arm Shuttle Machine"}</h2>
//             <p className="text-[#C1C1C1] mt-4 px-4">
//               {rawMaterial.description || "Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm."}
//             </p>
//             <div className='mt-4 m-4'>
//               <img src={specication} alt="Specification" />
//             </div>
//             <div className="flex flex-wrap text-white m-2 my-6">
//               {buttons.map((button) => (
//                 <Link
//                   key={button.id}
//                   to={`/raw-details/${button.id}`}
//                   className="bg-blue-950 rounded-lg m-4 px-2 py-1"
//                 >
//                   {button.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RawMaterial;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
// import specification from '../img/Screenshot 2024-07-01 125205.png';
import axios from "axios";

function RawMaterial() {
  const [rawMaterials, setRawMaterials] = useState([]);
  const [title, setTitle] = useState([]);

  const handleTitle = async () => {
    let titleArray = [];
    const responseRawDetails = await fetch("/api/rawDetails/allRawDetails");
    const dataresponseRawDetails = await responseRawDetails.json();
    console.log(dataresponseRawDetails);

    dataresponseRawDetails.map((data) => {
      // console.log("data.title" ,data.title)

      titleArray.push(data.title);

    });
    setTitle(titleArray)
    // console.log("titlearr", titleArray);
  };

  // console.log("Hello newwwwwwwwwwwwww")
  useEffect(() => {
    const fetchRawMaterials = async () => {
      try {
        console.log("Hello");
        const response = await axios.get("/api/rawMains/allRawMains");
        // const responseRawDetails = await fetch("/api/rawDetails/allRawDetails");
        //  const dataresponseRawDetails = await responseRawDetails.json();
        console.log(response.data);
        // console.log(dataresponseRawDetails);
        // console.log(JSON.parse((response.data[4].button))[0].buttonName)
        console.log(response.data[3].button.length);
        console.log(response.data[4].button.length);
        setRawMaterials(response.data);
      } catch (error) {
        console.error("Error fetching raw materials:", error);
      }
    };

    fetchRawMaterials();
    handleTitle();
    console.log("title",title[1]);
    console.log("titlearr", title);

  }, []);

  return (
    <div className="min-h-screen bg-[#0c4999] pb-16">
      <Navbar />
      <h2 className="text-[#b1becf] px-6 text-3xl font-semibold pt-28">
        Raw Material
      </h2>

      {rawMaterials.map((rawMaterial,tindex) => (
        <div
          key={rawMaterial.id}
          className="container mx-auto lg:flex justify-between items-center mt-20"
        >
          <div className="bg-white rounded-lg mx-8 p-4 py-12">
            <img
              src={rawMaterial.image || "default-image-url.png"}
              alt={rawMaterial.name || "Raw Material"}
              className="w-full rounded-lg"
              loading="lazy"
              title={rawMaterial.name || "Raw Material"}
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <h2 className="text-white font-semibold text-3xl px-4">
              {rawMaterial.title || "Default Name"}
            </h2>
            <p className="text-[#C1C1C1] mt-4 px-4">
              {rawMaterial.desc || "Default description."}
            </p>
            <p className="text-[#C1C1C1] mt-4 px-4">
              {rawMaterial.purpose || "Default purpose."}
            </p>
            {/* <p className="text-[#C1C1C1] mt-4 px-4">
              {rawMaterial.buttonName || "Default button."}
              
            </p> */}
            <div className="mt-4 m-4">
              <img src={rawMaterial.specification} alt="Specification" />
            </div>

            <div className="flex flex-wrap text-white m-2 my-6">
              {/* {
                rawMaterial.button.length ?  (   JSON.parse(rawMaterial.button).map((btn,index) => {
                  <Link to={`/raw-details/${index}`}>
                    <button>{btn.buttonName || "Default button."}</button>
                  </Link>  }))
            
                  : ""
              } */}

              {JSON.parse(
                rawMaterial.button.length ? rawMaterial.button : "[]"
              ).map((btn, index) => {
                return (
                  <Link
                    to={`/raw-details/${index + 1}?title=${title[tindex]}`}
                  >
                    {/* <button>{btn.buttonName || "Default button."}</button> */}
                    <button>{`index ${tindex}` || "Default button."}</button>
                  </Link>
                );
              })}

              {/* 
<Link to={`/raw-details/${rawMaterial.id}`}>
<button>{rawMaterial.buttonName || "Default button."}</button>
</Link> */}

              {/* Fetch corresponding title from RawDetails */}
              {/* <Link
                to={`/raw-details/${rawMaterial.id}`} // Assuming rawMaterial.id is linked to the correct detail
                className="bg-blue-950 rounded-lg m-4 px-2 py-1"
              >
                Here, adjust according to how you want to display the title from RawDetails
                {rawMaterial.title || "Default Title"} {/* Make sure to set the correct title */}
              {/* </Link> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RawMaterial;
