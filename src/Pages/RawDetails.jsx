// // // // import React from 'react';
// // // // import { useParams } from 'react-router-dom';
// // // // import Navbar from '../component/Navbar';
// // // // import specication from '../img/Screenshot 2024-07-01 125205.png'

// // // // function RawDetails() {
// // // //   const { id } = useParams(); // Use useParams hook to get URL params
// // // //   // Placeholder data for dynamic content (replace with actual data fetching logic)
// // // //   const details = [
// // // //     {
// // // //       id: 1,
// // // //       title: "Four Arm Shuttle Machine",
// // // //       description: "Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.",
// // // //       specifications: [
// // // //         { label: "Capacity", value: "2000 ltr" },
// // // //         { label: "Swing", value: "2700 mm" },
// // // //         { label: "Arm Load Bearing Capacity", value: "980 Kgs" },
// // // //         { label: "Arm Drive", value: "Direct (Hardened Gears)" },
// // // //         { label: "Major/Minor Axis RPM", value: "0-12" },
// // // //         { label: "Burner Type", value: "Single Stage" },
// // // //         { label: "Max Oven Temp.", value: "350 Cel" },
// // // //         { label: "Type Controller", value: "PLC/ Hardware" }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: " Machine 2",
// // // //       description: "Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.",
// // // //       specifications: [
// // // //         { label: "Capacity", value: "2000 ltr" },
// // // //         { label: "Swing", value: "2700 mm" },
// // // //         { label: "Arm Load Bearing Capacity", value: "980 Kgs" },
// // // //         { label: "Arm Drive", value: "Direct (Hardened Gears)" },
// // // //         { label: "Major/Minor Axis RPM", value: "0-12" },
// // // //         { label: "Burner Type", value: "Single Stage" },
// // // //         { label: "Max Oven Temp.", value: "350 Cel" },
// // // //         { label: "Type Controller", value: "PLC/ Hardware" }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: " Machine 3",
// // // //       description: "Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.",
// // // //       specifications: [
// // // //         { label: "Capacity", value: "2000 ltr" },
// // // //         { label: "Swing", value: "2700 mm" },
// // // //         { label: "Arm Load Bearing Capacity", value: "980 Kgs" },
// // // //         { label: "Arm Drive", value: "Direct (Hardened Gears)" },
// // // //         { label: "Major/Minor Axis RPM", value: "0-12" },
// // // //         { label: "Burner Type", value: "Single Stage" },
// // // //         { label: "Max Oven Temp.", value: "350 Cel" },
// // // //         { label: "Type Controller", value: "PLC/ Hardware" }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       title: " Machine 4",
// // // //       description: "Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.",
// // // //       specifications: [
// // // //         { label: "Capacity", value: "2000 ltr" },
// // // //         { label: "Swing", value: "2700 mm" },
// // // //         { label: "Arm Load Bearing Capacity", value: "980 Kgs" },
// // // //         { label: "Arm Drive", value: "Direct (Hardened Gears)" },
// // // //         { label: "Major/Minor Axis RPM", value: "0-12" },
// // // //         { label: "Burner Type", value: "Single Stage" },
// // // //         { label: "Max Oven Temp.", value: "350 Cel" },
// // // //         { label: "Type Controller", value: "PLC/ Hardware" }
// // // //       ]
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       title: " Machine 4",
// // // //       description: "Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.",
// // // //       specifications: [
// // // //         { label: "Capacity", value: "2000 ltr" },
// // // //         { label: "Swing", value: "2700 mm" },
// // // //         { label: "Arm Load Bearing Capacity", value: "980 Kgs" },
// // // //         { label: "Arm Drive", value: "Direct (Hardened Gears)" },
// // // //         { label: "Major/Minor Axis RPM", value: "0-12" },
// // // //         { label: "Burner Type", value: "Single Stage" },
// // // //         { label: "Max Oven Temp.", value: "350 Cel" },
// // // //         { label: "Type Controller", value: "PLC/ Hardware" }
// // // //       ]
// // // //     }
// // // //     // Other details...
// // // //   ];

// // // //   // Find the matching detail based on id (assuming id matches array index)
// // // //   const detail = details[id - 1];

// // // //   if (!detail) {
// // // //     return <div>Loading...</div>; // Handle case where detail is not found
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-[#0c4999]  pb-16">
// // // //       <Navbar />
// // // //       <h2 className="text-white px-6 text-2xl font-semibold pt-28">Machinery</h2>
// // // //       <div className="container mx-auto lg:flex flex flex-col  text-white justify-between items-center mt-20">
// // // //         {/* Your detailed content based on the id */}
// // // //         <div className="lg:w-2/3 rounded-lg mx-8 p-4 py-12  text-white shadow-lg">
// // // //           {/* Example of displaying dynamic content */}
// // // //           <h2 className="text-white font-semibold text-3xl px-4">{detail.title}</h2>
// // // //           <p className="text-gray-300 mt-4 px-4">{detail.description}</p>
// // // //           <div className=' mt-4'>
// // // //             <img src={specication} alt="error" />
// // // //           </div>

// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default RawDetails;

// // // import React, { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import axios from 'axios';
// // // import Navbar from '../component/Navbar';
// // // // import specification from '../img/Screenshot 2024-07-01 125205.png';

// // // function RawDetails() {
// // //   const { id } = useParams(); // Use useParams hook to get URL params
// // //   const [detail, setDetail] = useState(null);

// // //   useEffect(() => {
// // //     // Fetch data from the API
// // //     axios.get('/api/rawDetails/allRawDetails')
// // //       .then(response => {
// // //         // Find the detail based on the id
// // //         const foundDetail = response.data.find(detail => detail.id === parseInt(id));
// // //         setDetail(foundDetail);
// // //       })
// // //       .catch(error => {
// // //         console.error('Error fetching data:', error);
// // //       });
// // //   }, [id]);

// // //   if (!detail) {
// // //     return <div>Loading...</div>; // Handle case where detail is not found
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#0c4999] pb-16">
// // //       <Navbar />
// // //       <h2 className="text-white px-6 text-2xl font-semibold pt-28">Machinery</h2>
// // //       <div className="container mx-auto lg:flex flex flex-col text-white justify-between items-center mt-20">
// // //         <div className="lg:w-2/3 rounded-lg mx-8 p-4 py-12 text-white shadow-lg">
// // //           <h2 className="text-white font-semibold text-3xl px-4">{detail.title}</h2>
// // //           <p className="text-gray-300 mt-4 px-4">{detail.desc}</p>
// // //           <div className='mt-4'>
// // //             <img src={detail.specification} alt="error" loading='lazy' />
// // //           </div>
// // //           <div className="mt-4 px-4">
// // //             <h3 className="text-white text-lg mt-6">TECHNICAL SPECIFICATIONS</h3>
// // //             <ul className="list-disc list-inside">
// // //               {detail.specifications.map((spec, index) => (
// // //                 <li key={index} className="text-gray-300">
// // //                   <span className="font-semibold">{spec.label}:</span> {spec.value}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default RawDetails;

// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import Navbar from '../component/Navbar';
// // import specification from '../img/Screenshot 2024-07-01 125205.png';

// // function RawDetails() {
// //   const { id } = useParams();
// //   const [detail, setDetail] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('/api/rawDetails/allRawDetails');
// //         const data = await response.json();

// //         console.log('Fetched data:', data); // Log fetched data for debugging

// //         // Ensure the id is compared as a number
// //         const foundDetail = data.find(item => item.id === parseInt(id, 10));
// //         console.log('Found detail:', foundDetail); // Log found detail

// //         setDetail(foundDetail);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [id]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (!detail) {
// //     return <div>Detail not found.</div>;
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#0c4999] pb-16">
// //       <Navbar />
// //       <h2 className="text-white px-6 text-2xl font-semibold pt-28">Machinery</h2>
// //       <div className="container mx-auto lg:flex flex flex-col text-white justify-between items-center mt-20">
// //         <div className="lg:w-2/3 rounded-lg mx-8 p-4 py-12 text-white shadow-lg">
// //           <h2 className="text-white font-semibold text-3xl px-4">{detail.title}</h2>
// //           <p className="text-gray-300 mt-4 px-4">{detail.desc}</p>
// //           <div className='mt-4'>
// //             {/* <img src={detail.image} alt="Specification" /> */}
// //             <img src={`${process.env.PUBLIC_URL}/${detail.image}`} alt={detail.title} />

// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default RawDetails;

// // // use react router to achive that






























import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useLocation } from "react-router-dom";

function RawDetails() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  let location = useLocation();
  console.log("location", location);
  let queryParams = new URLSearchParams(location.search);
  console.log("queryParams", queryParams);

  // Example: Accessing a specific query parameter
  let paramValue = queryParams.get("paramName");
  console.log("paramValue", paramValue);

  const raw = (detail) => {
   return  (
    <div key={detail.id} className="container mx-auto lg:flex flex flex-col text-white justify-between items-center mt-20">
        {/* <h2>Under div</h2> */}
      <div className="lg:w-2/3 rounded-lg mx-8 p-4 py-12 text-white shadow-lg">
        <h2 className="text-white font-semibold text-3xl px-4">
          {detail.title || "Default Title"}
        </h2>
        <p className="text-gray-300 mt-4 px-4">
          {detail.desc || "No description available."}
        </p>
        <div className="mt-4">
          {/* <img src={detail.image || "default-image-url.png"} alt={detail.title} /> */}
          <img
            src={`${process.env.PUBLIC_URL}/${detail.image}`}
            alt={detail.title}
          />
        </div>
      </div>
    </div>
   );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/rawDetails/allRawDetails");
        const data = await response.json();

        const foundDetail = data.find((item) => item.id === parseInt(id, 10));
        setDetail(foundDetail);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!detail) {
    return <div>Detail not found.</div>;
  }

 console.log("data" , detail)


  return (
    <div className="min-h-screen bg-[#0c4999] pb-16">
      <Navbar />
      <h2 className="text-[#b1becf] px-6 text-3xl font-semibold pt-28">
        Raw Material Details
        
      </h2>
      {
        raw(detail)
      }
    </div>
  );
}

export default RawDetails;
