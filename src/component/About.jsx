






// import React from 'react';

// function About() {
//   return (
//     <div className="about-page-container" style={{
//       position: 'relative',
//       minHeight: '100vh',
//       width: '100%',
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       backgroundImage: 
//         'url(https://s3-alpha-sig.figma.com/img/eaeb/90e5/9e96ba606ef03b66faaa34c9a567feb8?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OciefVNghuLEggYp~WO1HipO~rxT2brTGHv44Qx-1umqACm-L8Aeqd~v8yJwzOZ8HLGwEm1djbQ8VU598CUsXvZZ3lqKFS-kziVjQVd2BDFbKw-WbkAiGIGqwrCkI1Z76tWV6aLkU~GrraQdRZU~-rcseCfEY9F-r9zZdtTTGKB2og5yuRq-wGQCm72T4sHvIeqEBnGwhC3Qa1ipjVDugPt-UqDf~miP2sJUk-1cursbu3kz-9R7KLtPPy8euDl3LlMKFviBT0utNqFwMEEIivWnAcxYbK3iwVqxF8NwmS5Sv6oJiNn6ZXTgWO1elgofBB6FPbFDm87CDzoWVjUy4Q__)'
//     }}>
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: ' rgba(255, 255, 255, 0.8)',
//         zIndex: 1
//       }} />
//       <div style={{
//         position: 'relative',
//         zIndex: 2,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         color: '#000',
//         margin: '0 auto',
//         width: '100%'
//       }}>
//         <div style={{ position: 'relative', width: '100%', height: '300px' }}>
//           <div style={{
//             position: 'absolute',
//             top: '0',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             height: '60px',
//             width: '4.5px',
//             backgroundColor: 'rgb(31, 31, 150)',
//           }} />
          
//           <div style={{
//             position: 'absolute',
//             top: '60px',
//             right: 'calc(50% - 2px)',
//             height: '4.5px',
//             width: '234px',
//             backgroundColor: 'rgb(31, 31, 150)',
//           }} />
//           <div style={{
//             position: 'absolute',
//             top: '60px',
//             right: 'calc(50% - 12px + 240px)',
//             height: '60px',
//             width: '4.5px',
//             backgroundColor: 'rgb(31, 31, 150)',
//           }} />
//         </div>
//         <div style={{
//           textAlign: 'left',
     
//         }}>
//           <h2 className='  text-blue-900 font-semibold text-3xl  ml-12 lg:text-[3rem]'>Your Trusted Partner in Machinery</h2>
//           <p className=' mt-6 text-gray-800   ml-12 w-[60%]  text-lg'>
//           KSR as a dynamic import-export enterprise, we specialize in the global trade of machinery, chemicals, spare parts, and lighting equipment. Our comprehensive services ensure the seamless flow 
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About;





































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function About() {
//   const [aboutData, setAboutData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/aboutHomes/allAboutHomes');
//         setAboutData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="about-page-container" style={{
//       position: 'relative',
//       minHeight: '100vh',
//       width: '100%',
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/eaeb/90e5/9e96ba606ef03b66faaa34c9a567feb8?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OciefVNghuLEggYp~WO1HipO~rxT2brTGHv44Qx-1umqACm-L8Aeqd~v8yJwzOZ8HLGwEm1djbQ8VU598CUsXvZZ3lqKFS-kziVjQVd2BDFbKw-WbkAiGIGqwrCkI1Z76tWV6aLkU~GrraQdRZU~-rcseCfEY9F-r9zZdtTTGKB2og5yuRq-wGQCm72T4sHvIeqEBnGwhC3Qa1ipjVDugPt-UqDf~miP2sJUk-1cursbu3kz-9R7KLtPPy8euDl3LlMKFviBT0utNqFwMEEIivWnAcxYbK3iwVqxF8NwmS5Sv6oJiNn6ZXTgWO1elgofBB6FPbFDm87CDzoWVjUy4Q__)'
//     }}>
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(255, 255, 255, 0.8)',
//         zIndex: 1
//       }} />
//       <div style={{
//         position: 'relative',
//         zIndex: 2,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         color: '#000',
//         margin: '0 auto',
//         width: '100%'
//       }}>
//         <div style={{ position: 'relative', width: '100%', height: '300px' }}>
//           <div style={{
//             position: 'absolute',
//             top: '0',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             height: '60px',
//             width: '4.5px',
//             backgroundColor: 'rgb(31, 31, 150)',
//           }} />
          
//           <div style={{
//             position: 'absolute',
//             top: '60px',
//             right: 'calc(50% - 2px)',
//             height: '4.5px',
//             width: '234px',
//             backgroundColor: 'rgb(31, 31, 150)',
//           }} />
//           <div style={{
//             position: 'absolute',
//             top: '60px',
//             right: 'calc(50% - 12px + 240px)',
//             height: '60px',
//             width: '4.5px',
//             backgroundColor: 'rgb(31, 31, 150)',
//           }} />
//         </div>
//         <div style={{ textAlign: 'left' }}>
//           {aboutData.map((data, index) => (
//             <React.Fragment key={index}>
//               <h2 className='text-blue-900 font-semibold text-3xl ml-12 lg:text-[3rem]'>
//                 {data.title}
//               </h2>
//               <p className='mt-6 text-gray-800 ml-12 w-[60%] text-lg'>
//                 {data.desc}
//               </p>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

















import React, { useState, useEffect } from 'react';
import axios from 'axios';

function About() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/aboutHomes/allAboutHomes');
        setAboutData(response.data); // Assuming response.data is an array of objects
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="about-page-container" style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/eaeb/90e5/9e96ba606ef03b66faaa34c9a567feb8?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OciefVNghuLEggYp~WO1HipO~rxT2brTGHv44Qx-1umqACm-L8Aeqd~v8yJwzOZ8HLGwEm1djbQ8VU598CUsXvZZ3lqKFS-kziVjQVd2BDFbKw-WbkAiGIGqwrCkI1Z76tWV6aLkU~GrraQdRZU~-rcseCfEY9F-r9zZdtTTGKB2og5yuRq-wGQCm72T4sHvIeqEBnGwhC3Qa1ipjVDugPt-UqDf~miP2sJUk-1cursbu3kz-9R7KLtPPy8euDl3LlMKFviBT0utNqFwMEEIivWnAcxYbK3iwVqxF8NwmS5Sv6oJiNn6ZXTgWO1elgofBB6FPbFDm87CDzoWVjUy4Q__)'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1
      }} />
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#000',
        margin: '0 auto',
        width: '100%'
      }}>
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '60px',
            width: '4.5px',
            backgroundColor: 'rgb(31, 31, 150)',
          }} />
          
          <div style={{
            position: 'absolute',
            top: '60px',
            right: 'calc(50% - 2px)',
            height: '4.5px',
            width: '234px',
            backgroundColor: 'rgb(31, 31, 150)',
          }} />
          <div style={{
            position: 'absolute',
            top: '60px',
            right: 'calc(50% - 12px + 240px)',
            height: '60px',
            width: '4.5px',
            backgroundColor: 'rgb(31, 31, 150)',
          }} />
        </div>
        <div style={{ textAlign: 'left' }}>
          {aboutData.map((data, index) => (
            <React.Fragment key={index}>
              <h2 className='text-blue-900 font-semibold text-3xl ml-12 lg:text-[3rem]'>
                {data.title}
              </h2>
              <p className='mt-6 text-gray-800 ml-12 w-[60%] text-lg'>
                {data.desc}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
