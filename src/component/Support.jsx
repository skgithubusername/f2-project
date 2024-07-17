





// // // import React, { useRef, useEffect } from 'react';
// // // import { GiAutoRepair } from "react-icons/gi";
// // // import { MdOutlineSupportAgent } from "react-icons/md";
// // // import { FaScrewdriver } from "react-icons/fa";
// // // import { useInView } from 'react-intersection-observer';

// // // const Support = () => {
// // //   const { ref, inView } = useInView({
// // //     triggerOnce: false,
// // //     threshold: 0.6,
// // //   });

// // //   const supportRef = useRef(null);

// // //   useEffect(() => {
// // //     const supportElement = supportRef.current;

// // //     const handleScrollAnimation = () => {
// // //       if (supportElement && inView) {
// // //         supportElement.classList.add('animate-visible');
// // //       } else {
// // //         supportElement.classList.remove('animate-visible');
// // //       }
// // //     };

// // //     handleScrollAnimation();

// // //     window.addEventListener('scroll', handleScrollAnimation);

// // //     return () => {
// // //       window.removeEventListener('scroll', handleScrollAnimation);
// // //     };
// // //   }, [inView]);

// // //   return (
// // //     <>
// // //       <div id="support" ref={ref} className="bg-gradient-to-b from-transparent to-white bg-opacity-50 p-12 flex justify-center items-center min-h-screen">
// // //         <div ref={supportRef} className="max-w-4xl w-full flex justify-center items-center">
// // //           <div className="w-full">
// // //             <h2 className="text-3xl font-semibold text-center text-white mb-20">Technical Support for Machinery</h2>

// // //             <div className="flex justify-center items-center">
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // //                 {/* Box 1 - Installation */}
// // //                 <div className={`box w-48 h-48 bg-blue-600 bg-opacity-80 hover:bg-opacity-100 transition duration-500 ease-in-out rounded-lg text-black flex flex-col justify-center items-center ${inView ? 'animate-slide-right' : ''}`}>
// // //                   <div className="text-4xl mb-4"><GiAutoRepair /></div>
// // //                   <h3 className="text-lg font-semibold">Installation</h3>
// // //                 </div>

// // //                 {/* Box 2 - Maintenance */}
// // //                 <div className={`box w-48 h-48 bg-white bg-opacity-80 hover:bg-opacity-100 transition duration-500 ease-in-out rounded-lg text-black flex flex-col justify-center items-center ${inView ? 'animate-slide-right' : ''}`}>
// // //                   <div className="text-4xl mb-4"><FaScrewdriver /></div>
// // //                   <h3 className="text-lg font-semibold">Maintenance</h3>
// // //                 </div>

// // //                 {/* Box 3 - Repair */}
// // //                 <div className={`box w-48 h-48 bg-blue-600 bg-opacity-80 hover:bg-opacity-100 transition duration-500 ease-in-out rounded-lg text-white flex flex-col justify-center items-center ${inView ? 'animate-slide-bottom' : ''}`}>
// // //                   <div className="text-4xl mb-4"><GiAutoRepair /></div>
// // //                   <h3 className="text-lg font-semibold">Repair</h3>
// // //                 </div>

// // //                 {/* Box 4 - Upgrades */}
// // //                 <div className={`box w-48 h-48 bg-white bg-opacity-80 hover:bg-opacity-100 transition duration-500 ease-in-out rounded-lg text-black flex flex-col justify-center items-center ${inView ? 'animate-slide-top' : ''}`}>
// // //                   <div className="text-4xl mb-4"><MdOutlineSupportAgent /></div>
// // //                   <h3 className="text-lg font-semibold">Upgrades</h3>
// // //                 </div>

// // //                 {/* Box 5 - Training */}
// // //                 <div className={`box w-48 h-48 bg-blue-600 bg-opacity-80 hover:bg-opacity-100 transition duration-500 ease-in-out rounded-lg text-white flex flex-col justify-center items-center ${inView ? 'animate-slide-left' : ''}`}>
// // //                   <div className="text-4xl mb-4"><MdOutlineSupportAgent /></div>
// // //                   <h3 className="text-lg font-semibold">Training</h3>
// // //                 </div>

// // //                 {/* Box 6 - Support */}
// // //                 <div className={`box w-48 h-48 bg-white bg-opacity-80 hover:bg-opacity-100 transition duration-500 ease-in-out rounded-lg text-black flex flex-col justify-center items-center ${inView ? 'animate-slide-right' : ''}`}>
// // //                   <div className="text-4xl mb-4"><FaScrewdriver /></div>
// // //                   <h3 className="text-lg font-semibold">Support</h3>
// // //                 </div>

               
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Support;




























// // import React, { useRef, useEffect, useState } from 'react';
// // import { GiAutoRepair } from "react-icons/gi";
// // import { MdOutlineSupportAgent } from "react-icons/md";
// // import { FaScrewdriver } from "react-icons/fa";
// // import { useInView } from 'react-intersection-observer';
// // import axios from 'axios';

// // const iconMap = {
// //   'Installation': <GiAutoRepair />,
// //   'Maintenance': <FaScrewdriver />,
// //   'Repair': <GiAutoRepair />,
// //   'Upgrades': <MdOutlineSupportAgent />,
// //   'Training': <MdOutlineSupportAgent />,
// //   'Support': <FaScrewdriver />,
// // };

// // const Support = () => {
// //   const { ref, inView } = useInView({
// //     triggerOnce: false,
// //     threshold: 0.6,
// //   });

// //   const supportRef = useRef(null);
// //   const [supports, setSupports] = useState([]);

// //   useEffect(() => {
// //     const fetchSupports = async () => {
// //       try {
// //         const response = await axios.get('/api/supports/allSupports');
// //         setSupports(response.data);
// //       } catch (error) {
// //         console.error('Error fetching supports:', error);
// //       }
// //     };

// //     fetchSupports();
// //   }, []);

// //   useEffect(() => {
// //     const supportElement = supportRef.current;

// //     const handleScrollAnimation = () => {
// //       if (supportElement && inView) {
// //         supportElement.classList.add('animate-visible');
// //       } else {
// //         supportElement.classList.remove('animate-visible');
// //       }
// //     };

// //     handleScrollAnimation();

// //     window.addEventListener('scroll', handleScrollAnimation);

// //     return () => {
// //       window.removeEventListener('scroll', handleScrollAnimation);
// //     };
// //   }, [inView]);

// //   return (
// //     <>
// //       <div id="support" ref={ref} className="bg-gradient-to-b from-transparent to-white bg-opacity-50 p-12 flex justify-center items-center min-h-screen">
// //         <div ref={supportRef} className="max-w-4xl w-full flex justify-center items-center">
// //           <div className="w-full">
// //             <h2 className="text-3xl font-semibold text-center text-white mb-20">Technical Support for Machinery</h2>

// //             <div className="flex justify-center items-center">
// //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //                 {supports.map((support, index) => {
// //                   const icon = iconMap[support.title] || <MdOutlineSupportAgent />; // Default icon if title doesn't match
// //                   const bgColor = index % 2 === 0 ? 'bg-blue-600' : 'bg-white';
// //                   const textColor = index % 2 === 0 ? 'text-white' : 'text-black';
// //                   const animationClass = index % 6 === 0 ? 'animate-slide-right' : 
// //                                           index % 6 === 1 ? 'animate-slide-right' :
// //                                           index % 6 === 2 ? 'animate-slide-bottom' :
// //                                           index % 6 === 3 ? 'animate-slide-top' :
// //                                           index % 6 === 4 ? 'animate-slide-left' :
// //                                           'animate-slide-right';

// //                   return (
// //                     <div key={index} className={`box w-48 h-48 ${bgColor} bg-opacity-80 hover:bg-opacity-100 transition duration-500 ease-in-out rounded-lg ${textColor} flex flex-col justify-center items-center ${inView ? animationClass : ''}`}>
// //                       <div className="text-4xl mb-4">{icon}</div>
// //                       <h3 className="text-lg font-semibold">{support.title}</h3>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Support;











































































































































import React, { useRef, useEffect, useState } from 'react';
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaScrewdriver } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const Support = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  const supportRef = useRef(null);
  const [supports, setSupports] = useState([]);

  useEffect(() => {
    const fetchSupports = async () => {
      try {
        const response = await axios.get('/api/supports/allSupports');
        setSupports(response.data);
      } catch (error) {
        console.error('Error fetching supports:', error);
      }
    };

    fetchSupports();
  }, []);

  useEffect(() => {
    const supportElement = supportRef.current;

    const handleScrollAnimation = () => {
      if (supportElement && inView) {
        supportElement.classList.add('animate-visible');
      } else {
        supportElement.classList.remove('animate-visible');
      }
    };

    handleScrollAnimation();

    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, [inView]);

  // Assign titles to specific components with corresponding icons
  const titlesWithIcons = {
    Installation: <GiAutoRepair />,
    Maintenance: <FaScrewdriver />,
    Repair: <GiAutoRepair />,
    Upgrades: <MdOutlineSupportAgent />,
    Training: <MdOutlineSupportAgent />,
    Support: <FaScrewdriver />
  };

  // Ensure that the supports array has the titles in a specific order
  const orderedSupports = supports.map((support, index) => ({
    ...support,
    icon: titlesWithIcons[support.title] || <MdOutlineSupportAgent />, // Default icon if title doesn't match
    bgColor: index % 2 === 0 ? 'bg-blue-600' : 'bg-white',
    textColor: index % 2 === 0 ? 'text-white' : 'text-black',
    animationClass: [
      'animate-slide-right',
      'animate-slide-right',
      'animate-slide-bottom',
      'animate-slide-top',
      'animate-slide-left',
      'animate-slide-right'
    ][index % 6]
  }));

  return (
    <>
      <div id="support" ref={ref} className="bg-gradient-to-b from-transparent to-white bg-opacity-50 p-12 flex justify-center items-center min-h-screen">
        <div ref={supportRef} className="max-w-4xl w-full flex justify-center items-center">
          <div className="w-full">
            <h2 className="text-3xl font-semibold text-center text-white mb-20">Technical Support for Machinery</h2>

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {orderedSupports.map((support, index) => (
                  <div key={index} className={`box w-48 h-48 ${support.bgColor} bg-opacity-80 hover:bg-opacity-100 transition duration-500 ease-in-out rounded-lg ${support.textColor} flex flex-col justify-center items-center ${inView ? support.animationClass : ''}`}>
                    <div className="text-4xl mb-4">{support.icon}</div>
                    <h3 className="text-lg font-semibold">{support.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;



// // 



































// import React, { useRef, useEffect, useState } from 'react';
// import { GiAutoRepair } from "react-icons/gi";
// import { MdOutlineSupportAgent } from "react-icons/md";
// import { FaScrewdriver } from "react-icons/fa";
// import { useInView } from 'react-intersection-observer';
// import axios from 'axios';

// const Support = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.6,
//   });

//   const supportRef = useRef(null);
//   const [supports, setSupports] = useState([]);

//   useEffect(() => {
//     const fetchSupports = async () => {
//       try {
//         const response = await axios.get('/api/supports/allSupports');
//         setSupports(response.data);
//       } catch (error) {
//         console.error('Error fetching supports:', error);
//       }
//     };

//     fetchSupports();
//   }, []);

//   useEffect(() => {
//     const supportElement = supportRef.current;

//     const handleScrollAnimation = () => {
//       if (supportElement && inView) {
//         supportElement.classList.add('animate-visible');
//       } else {
//         supportElement.classList.remove('animate-visible');
//       }
//     };

//     handleScrollAnimation();

//     window.addEventListener('scroll', handleScrollAnimation);

//     return () => {
//       window.removeEventListener('scroll', handleScrollAnimation);
//     };
//   }, [inView]);

//   const iconMap = {
//     'Installation': <GiAutoRepair />,
//     'Maintenance': <FaScrewdriver />,
//     'Repair': <GiAutoRepair />,
//     'Upgrades': <MdOutlineSupportAgent />,
//     'Training': <MdOutlineSupportAgent />,
//     'Support': <FaScrewdriver />
//   };

//   return (
//     <>
//       <div id="support" ref={ref} className="bg-gradient-to-b from-transparent to-white bg-opacity-50 p-12 flex justify-center items-center min-h-screen">
//         <div ref={supportRef} className="max-w-4xl w-full flex justify-center items-center">
//           <div className="w-full">
//             <h2 className="text-3xl font-semibold text-center text-white mb-20">Technical Support for Machinery</h2>

//             <div className="flex justify-center items-center">
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {supports.map((support, index) => {
//                   const icon = iconMap[support.title] || <MdOutlineSupportAgent />; // Default icon if title doesn't match
//                   const bgColor = index % 2 === 0 ? 'bg-blue-600' : 'bg-white';
//                   const textColor = index % 2 === 0 ? 'text-white' : 'text-black';
//                   const animationClass = index === 0 ? 'animate-slide-right' :
//                                           index === 1 ? 'animate-slide-right' :
//                                           index === 2 ? 'animate-slide-bottom' :
//                                           index === 3 ? 'animate-slide-top' :
//                                           index === 4 ? 'animate-slide-left' :
//                                           'animate-slide-right';

//                   return (
//                     <div key={index} className={`box w-48 h-48 ${bgColor} bg-opacity-80 hover:bg-opacity-100 transition duration-500 ease-in-out rounded-lg ${textColor} flex flex-col justify-center items-center ${inView ? animationClass : ''}`}>
//                       <div className="text-4xl mb-4">{icon}</div>
//                       <h3 className="text-lg font-semibold">{support.title}</h3>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Support;
