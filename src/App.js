// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



// // import Admin from './admin/Admin';
// import AboutPage from './Pages/AboutPage';
// import Contact from './Pages/Contact';
// import MachineryDetails from './Pages/MachineryDetails';
// import ManufacturedDetails from './Pages/ManufacturedDetails';
// import RawDetails from './Pages/RawDetails';
// import Machinery from './component/Machinery';

// import Home from './component/Home';
// import Manufactured from './component/Manufactured';
// import RawMaterial from './component/RawMaterial';

// function App() {
//   return (
    

//     <Router>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/machinery" element={<Machinery />} />
//         <Route path="/manufactured" element={<Manufactured />} />
//         <Route path="/raw" element={<RawMaterial />} />
//         <Route path="/machinery-details/:id" element={<MachineryDetails/>} />
//         <Route path="/manufactured-details/:id" element={<ManufacturedDetails/>} />
//         <Route path="/raw-details/:id" element={<RawDetails/>} />
       
//       </Routes>
//     </Router>


//     // <div>
//     //   <Admin/>
//     // </div>

//   );
// }

// export default App;






























import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from './Pages/AboutPage';
import Contact from './Pages/Contact';
import MachineryDetails from './Pages/MachineryDetails';
import ManufacturedDetails from './Pages/ManufacturedDetails';
import RawDetails from './Pages/RawDetails';
import Machinery from './component/Machinery';
import Home from './component/Home';
import Manufactured from './component/Manufactured';
import RawMaterial from './component/RawMaterial';

function App() {
  console.log("new")
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/machinery" element={<Machinery />} />
        <Route path="/manufactured" element={<Manufactured />} />
        <Route path="/raw" element={<RawMaterial />} />
        <Route path="/machinery-details/:id" element={<MachineryDetails />} />
        <Route path="/manufactured-details/:id" element={<ManufacturedDetails />} />
        {/* <Route path=`/raw-details/:id?title=${"title"}` element={<RawDetails />} /> */}
        <Route path="/raw-details/:id" element={<RawDetails />} />
        <Route path="/raw-details" element={<RawDetails />} />
      </Routes>
    </Router>
  );
}

export default App;


