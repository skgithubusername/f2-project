

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../component/Navbar';
// import specication from '../img/Screenshot 2024-07-01 125205.png'

// function Manufactured() {
//   // Dummy data for buttons, replace with your actual data source
//   const buttons = [
//     { id: 1, label: 'Button 1' },
//     { id: 2, label: 'Button 2' },
//     { id: 3, label: 'Button 3' },
//     { id: 4, label: 'Button 4' },
//     { id: 5, label: 'Button 5' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0c4999] pb-16">
//       <Navbar />
//       <h2 className="text-[#b1becf] px-6 text-3xl font-semibold pt-28">Manufactured</h2>
//       <div className="container mx-auto lg:flex justify-between items-center mt-20">
//         <div className="bg-white rounded-lg mx-8 p-4 py-12">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/4dc8/0c7c/6bbf8cf3fc3ce0f19e5976ed7f283597?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0sCRaWueguU2r0QzqcaJg4ljBitR2KW76sp1LdVZa2QcTV2EYO3aIWk2lKfcm5HYwZQWvDL3oVofSWPXfl-n9sraNMwlFkfCTCkKLXH0KhZTWVFrU-X0uZxt9kKmFGT2xlYuWyQmbXe0nkP32KFaXn1wyePsCTKmyC~sc0w5aivgvmxvRgweKyx~JbFYjnwi68FZoErmJrj547M~l3Td-klC628pMmlymmSpvYpRqOG4x-juI2iD-aJwIk-4R1J7TCey6E29NrhuQm3oWJKk2muFrTeNQV9qQArjVhFZW48eCLQC9-QGEZGcaZnGpkPqCZwNoiGo~Fk2kHfLcwOgQ__"
//             alt="Four Arm Shuttle Machine"
//             className="w-full rounded-lg"
//             loading="lazy" 
//             title="KSR Enterprises manfucture" 
//           />
//         </div>
//         <div className="mt-8 lg:mt-0 lg:ml-8">
//           <h2 className="text-white font-semibold text-3xl px-4">Four Arm Shuttle Machine</h2>
//           <p className="text-[#C1C1C1] mt-4 px-4">
//             Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.
//           </p>
//           {/* <h3 className="text-white text-lg mt-6 px-4">TECHNICAL SPECIFICATIONS</h3> */}
//           <div className=' mt-4 m-4'>
//             <img src={specication} alt="error" />
//           </div>
         
                
//           <div className="flex flex-wrap text-white m-2 my-6">
//             {buttons.map((button) => (
//               <Link
//                 key={button.id}
//                 to={`/manufactured-details/${button.id}`}
//                 className="bg-blue-950 rounded-lg m-4 px-2 py-1"
//               >
//                 {button.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* 2 */}
//       <div className="container mx-auto lg:flex justify-between items-center mt-20">
//         <div className="bg-white rounded-lg mx-8 p-4 py-12">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/4dc8/0c7c/6bbf8cf3fc3ce0f19e5976ed7f283597?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0sCRaWueguU2r0QzqcaJg4ljBitR2KW76sp1LdVZa2QcTV2EYO3aIWk2lKfcm5HYwZQWvDL3oVofSWPXfl-n9sraNMwlFkfCTCkKLXH0KhZTWVFrU-X0uZxt9kKmFGT2xlYuWyQmbXe0nkP32KFaXn1wyePsCTKmyC~sc0w5aivgvmxvRgweKyx~JbFYjnwi68FZoErmJrj547M~l3Td-klC628pMmlymmSpvYpRqOG4x-juI2iD-aJwIk-4R1J7TCey6E29NrhuQm3oWJKk2muFrTeNQV9qQArjVhFZW48eCLQC9-QGEZGcaZnGpkPqCZwNoiGo~Fk2kHfLcwOgQ__"
//             alt="Four Arm Shuttle Machine"
//             className="w-full rounded-lg"
//           />
//         </div>
//         <div className="mt-8 lg:mt-0 lg:ml-8">
//           <h2 className="text-white font-semibold text-3xl px-4">Four Arm Shuttle Machine</h2>
//           <p className="text-[#C1C1C1] mt-4 px-4">
//             Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.
//           </p>
//           {/* <h3 className="text-white text-lg mt-6 px-4">TECHNICAL SPECIFICATIONS</h3> */}
//           <div className=' mt-4 m-4'>
//             <img src={specication} alt="error" />
//           </div>
         
                
//           <div className="flex flex-wrap text-white m-2 my-6">
//             {buttons.map((button) => (
//               <Link
//                 key={button.id}
//                 to={`/manufactured-details/${button.id}`}
//                 className="bg-blue-950 rounded-lg m-4 px-2 py-1"
//               >
//                 {button.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* 3 */}
//       <div className="container mx-auto lg:flex justify-between items-center mt-20">
//         <div className="bg-white rounded-lg mx-8 p-4 py-12">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/4dc8/0c7c/6bbf8cf3fc3ce0f19e5976ed7f283597?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0sCRaWueguU2r0QzqcaJg4ljBitR2KW76sp1LdVZa2QcTV2EYO3aIWk2lKfcm5HYwZQWvDL3oVofSWPXfl-n9sraNMwlFkfCTCkKLXH0KhZTWVFrU-X0uZxt9kKmFGT2xlYuWyQmbXe0nkP32KFaXn1wyePsCTKmyC~sc0w5aivgvmxvRgweKyx~JbFYjnwi68FZoErmJrj547M~l3Td-klC628pMmlymmSpvYpRqOG4x-juI2iD-aJwIk-4R1J7TCey6E29NrhuQm3oWJKk2muFrTeNQV9qQArjVhFZW48eCLQC9-QGEZGcaZnGpkPqCZwNoiGo~Fk2kHfLcwOgQ__"
//             alt="Four Arm Shuttle Machine"
//             className="w-full rounded-lg"
//           />
//         </div>
//         <div className="mt-8 lg:mt-0 lg:ml-8">
//           <h2 className="text-white font-semibold text-3xl px-4">Four Arm Shuttle Machine</h2>
//           <p className="text-[#C1C1C1] mt-4 px-4">
//             Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.
//           </p>
//           {/* <h3 className="text-white text-lg mt-6 px-4">TECHNICAL SPECIFICATIONS</h3> */}
//           <div className=' bg-white mt-4 m-4'>
//             <img src={specication} alt="error" />
//           </div>
         
                
//           <div className="flex flex-wrap text-white m-2 my-6">
//             {buttons.map((button) => (
//               <Link
//                 key={button.id}
//                 to={`/manufactured-details/${button.id}`}
//                 className="bg-blue-950 rounded-lg m-4 px-2 py-1"
//               >
//                 {button.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Manufactured;





















import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
// import specication from '../img/Screenshot 2024-07-01 125205.png';
import axios from 'axios';

function Manufactured() {
  const [manufactureMains, setManufactureMains] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/manufactureMains/allManufactureMains');
        setManufactureMains(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="min-h-screen bg-[#0c4999] pb-16">
      <Navbar />
      <h2 className="text-[#b1becf] px-6 text-3xl font-semibold pt-28">Manufactured</h2>
      <div className="container mx-auto lg:flex justify-between items-center mt-20">
        {manufactureMains.map((item) => (
          <div key={item.id} className=" mb-4 mx-8 p-4 py-12">
            <img
              src={item.image} // Ensure you have a proper image URL in your API response
              alt={item.title}
              className="w-full rounded-lg"
              loading="lazy"
              title={`KSR Enterprises ${item.title}`}
            />
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <h2 className="text-white font-semibold text-3xl px-4">{item.title}</h2>
              <p className="text-[#C1C1C1] mt-4 px-4">{item.desc}</p>
              {item.purpose && <p className="text-gray-400  ml-4 mt-2">Purpose: {item.purpose}</p>}
              {item.specification && (
                <div className="mt-2 p-10">
                  <img
                    src={item.specification}
                    alt="Specification"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              )}
              <div className="flex flex-wrap text-white m-2 my-6">
                <Link
                //  key={button.id}
                  to={`/manufactured-details/${item.id}`}
                  className="bg-blue-950 rounded-lg m-4 px-2 py-1"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Manufactured;







