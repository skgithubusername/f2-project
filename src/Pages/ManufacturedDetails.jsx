




import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../component/Navbar';
import specication from '../img/Screenshot 2024-07-01 125205.png'


function ManufacturedDetails() {
  const { id } = useParams(); // Use useParams hook to get URL params
  // Placeholder data for dynamic content (replace with actual data fetching logic)
  const details = [
    {
      id: 1,
      title: "Four Arm Shuttle Machine",
      description: "Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.",
      specifications: [
        { label: "Capacity", value: "2000 ltr" },
        { label: "Swing", value: "2700 mm" },
        { label: "Arm Load Bearing Capacity", value: "980 Kgs" },
        { label: "Arm Drive", value: "Direct (Hardened Gears)" },
        { label: "Major/Minor Axis RPM", value: "0-12" },
        { label: "Burner Type", value: "Single Stage" },
        { label: "Max Oven Temp.", value: "350 Cel" },
        { label: "Type Controller", value: "PLC/ Hardware" }
      ]
    },
    {
      id: 2,
      title: " Machine 2",
      description: "Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.",
      specifications: [
        { label: "Capacity", value: "2000 ltr" },
        { label: "Swing", value: "2700 mm" },
        { label: "Arm Load Bearing Capacity", value: "980 Kgs" },
        { label: "Arm Drive", value: "Direct (Hardened Gears)" },
        { label: "Major/Minor Axis RPM", value: "0-12" },
        { label: "Burner Type", value: "Single Stage" },
        { label: "Max Oven Temp.", value: "350 Cel" },
        { label: "Type Controller", value: "PLC/ Hardware" }
      ]
    },
    {
      id: 3,
      title: " Machine 3",
      description: "Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.",
      specifications: [
        { label: "Capacity", value: "2000 ltr" },
        { label: "Swing", value: "2700 mm" },
        { label: "Arm Load Bearing Capacity", value: "980 Kgs" },
        { label: "Arm Drive", value: "Direct (Hardened Gears)" },
        { label: "Major/Minor Axis RPM", value: "0-12" },
        { label: "Burner Type", value: "Single Stage" },
        { label: "Max Oven Temp.", value: "350 Cel" },
        { label: "Type Controller", value: "PLC/ Hardware" }
      ]
    },
    {
      id: 4,
      title: " Machine 4",
      description: "Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.",
      specifications: [
        { label: "Capacity", value: "2000 ltr" },
        { label: "Swing", value: "2700 mm" },
        { label: "Arm Load Bearing Capacity", value: "980 Kgs" },
        { label: "Arm Drive", value: "Direct (Hardened Gears)" },
        { label: "Major/Minor Axis RPM", value: "0-12" },
        { label: "Burner Type", value: "Single Stage" },
        { label: "Max Oven Temp.", value: "350 Cel" },
        { label: "Type Controller", value: "PLC/ Hardware" }
      ]
    },
    {
      id: 4,
      title: " Machine 4",
      description: "Four Arms Configuration Shuttle machine. Swing diameter up to 6000 mm. Floor area provides 8 working stations with two dedicated working stations for each arm.",
      specifications: [
        { label: "Capacity", value: "2000 ltr" },
        { label: "Swing", value: "2700 mm" },
        { label: "Arm Load Bearing Capacity", value: "980 Kgs" },
        { label: "Arm Drive", value: "Direct (Hardened Gears)" },
        { label: "Major/Minor Axis RPM", value: "0-12" },
        { label: "Burner Type", value: "Single Stage" },
        { label: "Max Oven Temp.", value: "350 Cel" },
        { label: "Type Controller", value: "PLC/ Hardware" }
      ]
    }
    // Other details...
  ];

  // Find the matching detail based on id (assuming id matches array index)
  const detail = details[id - 1];

  if (!detail) {
    return <div>Loading...</div>; // Handle case where detail is not found
  }

  return (
    <div className="min-h-screen bg-[#0c4999]  pb-16">
      <Navbar />
      <h2 className="text-white px-6 text-2xl font-semibold pt-28">Machinery</h2>
      <div className="container mx-auto lg:flex flex flex-col  text-white justify-between items-center mt-20">
        {/* Your detailed content based on the id */}
        <div className="lg:w-2/3 rounded-lg mx-8 p-4 py-12  text-white shadow-lg">
          {/* Example of displaying dynamic content */}
          <h2 className="text-white font-semibold text-3xl px-4">{detail.title}</h2>
          <p className="text-gray-300 mt-4 px-4">{detail.description}</p>
          <div className=' mt-4'>
            <img src={specication} alt="error" />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default ManufacturedDetails;
