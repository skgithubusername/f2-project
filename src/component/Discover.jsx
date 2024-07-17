





// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Slider from "react-slick";
// // import { useState } from 'react';
// // import img1 from "../img/GOATYK8VWPC-SCREW-BARREL-removebg-preview 2 (1).png";
// // import img2 from "../img/GOATYK8VWPC-SCREW-BARREL-removebg-preview 2 (2).png";
// // import img3 from "../img/GOATYK8VWPC-SCREW-BARREL-removebg-preview 2 (3).png";
// // import img4 from "../img/GOATYK8VWPC-SCREW-BARREL-removebg-preview 2 (4).png";
// // import img5 from "../img/GOATYK8VWPC-SCREW-BARREL-removebg-preview 2 (5).png";
// // import img6 from "../img/GOATYK8VWPC-SCREW-BARREL-removebg-preview 2 (6).png";
// // import img7 from "../img/GOATYK8VWPC-SCREW-BARREL-removebg-preview 2.png";

// // function Discover() {
// //   const [selectedBox, setSelectedBox] = useState(1);

// //   const details = [
// //     {
// //       img: img1,
// //       title: "PLASTIC INJECTION MOULDING MACHINE",
// //       description: "XTREME SERIES (50-2260) NECTAR SERIES (100-290) NV SERIES (NV15-NV85) MOULDS"
// //     },
// //     {
// //       img: img2,
// //       title: "Screw & Barrel",
// //       description: "The screw barrel is used in almost every Plastic processing machinery. This makes the product versatile for any plastic plant."
// //     },
// //     {
// //       img: img3,
// //       title: "ROTO MOULDING & ROCK AND ROLL MOULDING MACHINE",
// //       description: "TWO ARM SHUTTLE MACHINE FOUR ARM SHUTTLE MACHINE INDEPENDENT CAROUSEL MACHINE ROTO CURVE PLASTISOL MACHINE FIXED TURRET CAROUSAL MACHINE SINGLE STATION MACHINE"
// //     },
// //     {
// //       img: img4,
// //       title: "BLOW MOULDING MACHINE",
// //       description: "SESZ conical twin screw extruder series UPVC/CPVC/RPVC single pipe extrusion line PVC dual pipe extrusion line PVC/WPC profile extrusion line PVC conical twin screw extruder pelletizing extrusion machine"
// //     },
// //     {
// //       img: img5,
// //       title: "HEATER COOLER MIXER",
// //       description: "SESZ conical twin screw extruder series UPVC/CPVC/RPVC single pipe extrusion line PVC dual pipe extrusion line PVC/WPC profile extrusion line PVC conical twin screw extruder pelletizing extrusion machine"
// //     },
// //     {
// //       img: img6,
// //       title: "PULVERIZER",
// //       description: "SESZ conical twin screw extruder series UPVC/CPVC/RPVC single pipe extrusion line PVC dual pipe extrusion line PVC/WPC profile extrusion line PVC conical twin screw extruder pelletizing extrusion machine"
// //     },
// //     {
// //       img: img7,
// //       title: "PVC & HDPE PIPE PRODUCTION",
// //       description: "SESZ conical twin screw extruder series UPVC/CPVC/RPVC single pipe extrusion line PVC dual pipe extrusion line PVC/WPC profile extrusion line PVC conical twin screw extruder pelletizing extrusion machine"
// //     },
// //   ];

// //   const settings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 300,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 4000,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 2,
// //           slidesToScroll: 1,
// //           infinite: true,
// //           dots: false
// //         }
// //       },
// //       {
// //         breakpoint: 600,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1,
// //           initialSlide: 1
// //         }
// //       }
// //     ],
// //     beforeChange: (current, next) => setSelectedBox(next + 1)
// //   };

// //   return (
// //     <div className="flex flex-col items-center bg-gradient-to-b p-4 pb-12 from-blue-900 to-blue-500 overflow-hidden">
// //       <div className="text-center px-4 w-full lg:w-3/4 xl:w-2/3">
// //         <h2 className="text-2xl lg:text-4xl font-semibold mb-4 mt-16 text-white">
// //           Discover Our Machinery Expertise
// //         </h2>
// //         {/* <hr className="  w-[700px] ml-32 text-center  text-white"/> */}
// //         <div className="mt-8 w-full">
// //           <Slider {...settings}>
// //             {details.map((detail, index) => (
// //               <div key={index} className="box p-2">
// //                 {/* Add any additional content here if needed */}
// //               </div>
// //             ))}
// //           </Slider>
         


// // <div className="mt-8 lg:mt-12 shadow-lg mx-auto w-full pb-12 lg:h-[500px] h-[550px] shadow-blue-100 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 p-4 lg:p-8">
// //   <div className="text-left text-white px-4 lg:w-1/2">
// //     <h2 className="text-xl lg:text-2xl font-bold mb-4">{details[selectedBox - 1].title}</h2>
// //     <p className="text-sm lg:text-lg">{details[selectedBox - 1].description}</p>
// //   </div>
// //   <div className="relative w-full md:w-[400px] sm:w-[300px] lg:w-1/2 h-auto p-2 rounded-lg flex flex-col items-center">
// //     <img 
// //       loading="lazy" 
// //       title="KSR Enterprises Logo" 
// //       src={details[selectedBox - 1].img} 
// //       className="w-full h-auto object-cover lg:h-[300px]" 
// //       alt="Machinery" 
// //     />
// //     <img 
// //       loading="lazy" 
// //       title="KSR Enterprises Logo" 
// //       src={details[selectedBox - 1].img} 
// //       className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 md:mb-6 lg:mb-0 md:w-96 sm:w-72 lg:w-56 h-auto rounded-lg shadow-lg shadow-blue-200" 
// //       alt="Machinery" 
// //     />
// //   </div>
// // </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Discover;

































// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Slider from 'react-slick';
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // function Discover() {
// //   const [selectedBox, setSelectedBox] = useState(1);
// //   const [details, setDetails] = useState([]);

// //   useEffect(() => {
// //     fetchMachineryDetails();
// //   }, []);

// //   const fetchMachineryDetails = async () => {
// //     try {
// //       const response = await axios.get('/api/discoverys/allDiscoverys');
// //       setDetails(response.data);
// //     } catch (error) {
// //       console.error('Error fetching machinery details:', error);
// //     }
// //   };

// //   const settings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 300,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 4000,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 2,
// //           slidesToScroll: 1,
// //           infinite: true,
// //           dots: false
// //         }
// //       },
// //       {
// //         breakpoint: 600,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1,
// //           initialSlide: 1
// //         }
// //       }
// //     ],
// //     beforeChange: (current, next) => setSelectedBox(next + 1)
// //   };

// //   return (
// //     <div className="flex flex-col items-center bg-gradient-to-b p-4 pb-12 from-blue-900 to-blue-500 overflow-hidden">
// //       <div className="text-center px-4 w-full lg:w-3/4 xl:w-2/3">
// //         <h2 className="text-2xl lg:text-4xl font-semibold mb-4 mt-16 text-white">
// //           Discover Our Machinery Expertise
// //         </h2>
// //         <div className="mt-8 w-full">
// //           <Slider {...settings}>
// //             {details.map((detail, index) => (
// //               <div key={index} className="box p-2">
// //                 <div className="shadow-lg mx-auto w-full pb-12 lg:h-[500px] h-[550px] shadow-blue-100 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 p-4 lg:p-8">
// //                   <div className="text-left text-white px-4 lg:w-1/2">
// //                     <h2 className="text-xl lg:text-2xl font-bold mb-4">{detail.title}</h2>
// //                     <p className="text-sm lg:text-lg">{detail.desc}</p>
// //                   </div>
// //                   <div className="relative w-full md:w-[400px] sm:w-[300px] lg:w-1/2 h-auto p-2 rounded-lg flex flex-col items-center">
// //                     <img 
// //                       loading="lazy" 
// //                       src={detail.  image} 
// //                       className="w-full h-auto object-cover lg:h-[300px]" 
// //                       alt="Machinery" 
// //                     />
// //                     <img 
// //                       loading="lazy" 
// //                       src={detail.  image} 
// //                       className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 md:mb-6 lg:mb-0 md:w-96 sm:w-72 lg:w-56 h-auto rounded-lg shadow-lg shadow-blue-200" 
// //                       alt="Machinery" 
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </Slider>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Discover;


















// // import React, { useEffect, useState } from 'react';
// // import Slider from "react-slick";
// // import axios from 'axios';
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // function Discover() {
// //   const [details, setDetails] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('/api/discoverys/allDiscoverys'); // Adjust the URL based on your actual endpoint
// //         setDetails(response.data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000
// //   };

// //   return (
// //     <div className="flex flex-col items-center bg-gradient-to-b p-4 pb-12 from-blue-900 to-blue-500 overflow-hidden">
// //       <div className="text-center px-4 w-full lg:w-3/4 xl:w-2/3">
// //         <h2 className="text-2xl lg:text-4xl font-semibold mb-4 mt-16 text-white">
// //           Discover Our Machinery Expertise
// //         </h2>
// //         <div className="mt-8 w-full">
// //           <Slider {...settings}>
// //             {details.map((detail, index) => (
// //               <div key={index} className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 p-4 lg:p-8">
// //                 <div className="text-left text-white px-4 lg:w-1/2">
// //                   <h2 className="text-xl lg:text-2xl font-bold mb-4">{detail.title}</h2>
// //                   <p className="text-sm lg:text-lg">{detail.desc}</p>
// //                 </div>
// //                 <div className="relative w-full md:w-[400px] sm:w-[300px] lg:w-1/2 h-auto p-2 rounded-lg flex flex-col items-center">
// //                   <img 
// //                     loading="lazy" 
// //                     src={`/${detail.image}`} 
// //                     className="w-full h-auto object-cover lg:h-[300px]" 
// //                     alt={detail.title} 
// //                   />
// //                   <img 
// //                     loading="lazy" 
// //                     src={`/${detail.image}`} 
// //                     className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 md:mb-6 lg:mb-0 md:w-96 sm:w-72 lg:w-56 h-auto rounded-lg shadow-lg shadow-blue-200" 
// //                     alt={detail.title} 
// //                   />
// //                 </div>
// //               </div>
// //             ))}
// //           </Slider>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Discover;






















// import React, { useEffect, useState } from 'react';
// import Slider from "react-slick";
// import axios from 'axios';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Discover() {
//   const [details, setDetails] = useState([]);
//   const [selectedBox, setSelectedBox] = useState(1);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/discoverys/allDiscoverys'); // Adjust the URL based on your actual endpoint
//         setDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1
//         }
//       }
//     ],
//     beforeChange: (current, next) => setSelectedBox(next + 1)
//   };

//   return (
//     <div className="flex flex-col items-center bg-gradient-to-b p-4 pb-12 from-blue-900 to-blue-500 overflow-hidden">
//       <div className="text-center px-4 w-full lg:w-3/4 xl:w-2/3">
//         <h2 className="text-2xl lg:text-4xl font-semibold mb-4 mt-16 text-white">
//           Discover Our Machinery Expertise
//         </h2>
//         <div className="mt-8 w-full">
//           <Slider {...settings}>
//             {details.map((detail, index) => (
//               <div key={index} className="box p-2">
//                 {/* Add any additional content here if needed */}
//               </div>
//             ))}
//           </Slider>

//           {details.length > 0 && (
//             <div className="mt-8 lg:mt-12 shadow-lg mx-auto w-full pb-12 lg:h-[500px] h-[550px] shadow-blue-100 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 p-4 lg:p-8">
//               <div className="text-left text-white px-4 lg:w-1/2">
//                 <h2 className="text-xl lg:text-2xl font-bold mb-4">{details[selectedBox - 1].title}</h2>
//                 <p className="text-sm lg:text-lg">{details[selectedBox - 1].desc}</p>
//               </div>
//               <div className="relative w-full md:w-[400px] sm:w-[300px] lg:w-1/2 h-auto p-2 rounded-lg flex flex-col items-center">
//                 <img 
//                   loading="lazy" 
//                   src={`/${details[selectedBox - 1].image}`} 
//                   className="w-full h-auto object-cover lg:h-[300px]" 
//                   alt={details[selectedBox - 1].title} 
//                 />
//                 <img 
//                   loading="lazy" 
//                   src={`/${details[selectedBox - 1].image}`} 
//                   className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 md:mb-6 lg:mb-0 md:w-96 sm:w-72 lg:w-56 h-auto rounded-lg shadow-lg shadow-blue-200" 
//                   alt={details[selectedBox - 1].title} 
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Discover;


























import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Discover() {
  const [details, setDetails] = useState([]);
  const [selectedBox, setSelectedBox] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/discoverys/allDiscoverys');
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ],
    beforeChange: (current, next) => setSelectedBox(next + 1)
  };

  const selectedDetail = details[selectedBox - 1] || {};

  return (
    <div className="flex flex-col items-center bg-gradient-to-b p-4 pb-12 from-blue-900 to-blue-500 overflow-hidden">
      <div className="text-center px-4 w-full lg:w-3/4 xl:w-2/3">
        <h2 className="text-2xl lg:text-4xl font-semibold mb-4 mt-16 text-white">
          Discover Our Machinery Expertise
        </h2>
        <div className="mt-8 w-full">
          <Slider {...settings}>
            {details.map((detail, index) => (
              <div key={index} className="box p-2">
                {/* Add any additional content here if needed */}
              </div>
            ))}
          </Slider>

          {details.length > 0 && (
            <div className="mt-8 lg:mt-12 shadow-lg mx-auto w-full pb-12 lg:h-[500px] h-[550px] shadow-blue-100 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 p-4 lg:p-8">
              <div className="text-left text-white px-4 lg:w-1/2">
                <h2 className="text-xl lg:text-2xl font-bold mb-4">{selectedDetail.title || 'No title available'}</h2>
                <p className="text-sm lg:text-lg">{selectedDetail.desc || 'No description available'}</p>
              </div>
              <div className="relative w-full md:w-[400px] sm:w-[300px] lg:w-1/2 h-auto p-2 rounded-lg flex flex-col items-center">
                {selectedDetail.image && (
                  <>
                    <img 
                      loading="lazy" 
                      src={`/${selectedDetail.image}`} 
                      className="w-full h-auto object-cover lg:h-[300px]" 
                      alt={selectedDetail.title} 
                    />
                    <img 
                      loading="lazy" 
                      src={`/${selectedDetail.image}`} 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 md:mb-6 lg:mb-0 md:w-96 sm:w-72 lg:w-56 h-auto rounded-lg shadow-lg shadow-blue-200" 
                      alt={selectedDetail.title} 
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Discover;
