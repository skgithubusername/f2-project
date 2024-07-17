






import React, { useState } from 'react';
import logo from '../img/KSR-logo.png';
import Discovery from './Discovery';
import About from './About';
import RawMaterial from './RawMaterial';
import RawDetails from './RawDetails';
import Manufacture from './Manufacture';
import Machinery from './Machinery';
import ManufacturedDetailsAdmin from './ManufacturedDetailsAdmin';
import MachineryDetailsAdmin from './MachineryDetailsAdmin';
import SupportDetails from './SupportDetails';
import AboutHome from './AboutHome';
import { TbWorld } from "react-icons/tb";
import { BiConversation } from "react-icons/bi";
import { LiaIconsSolid } from "react-icons/lia";
import { GiAutoRepair } from "react-icons/gi";
import { SiContentstack } from "react-icons/si";
import { FaScrewdriver } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Admin = () => {
  const [activeTab, setActiveTab] = useState('discovery');
  const [navOpen, setNavOpen] = useState(false);

  // State for discovery
  const [adsBannerImages, setAdsBannerImages] = useState([]);

  // State for about
  const [offers, setOffers] = useState([]);
  const [offerText, setOfferText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // State for Raw material
  const [category, setCategory] = useState('Newspaper');
  const [data, setData] = useState({
    image: '',
    name: '',
    price: '',
    language: ''
  });
  const [submissions, setSubmissions] = useState({
    Newspaper: [],
    Magazines: [],
    Publication: []
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'discovery':
        return (
          <Discovery
            images={adsBannerImages}
            setImages={setAdsBannerImages}
          />
        );
      case 'about':
        return (
          <About
            offers={offers}
            setOffers={setOffers}
            offerText={offerText}
            setOfferText={setOfferText}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
          />
        );
      case 'raw':
        return (
          <RawMaterial
            images={adsBannerImages}
            setImages={setAdsBannerImages}
          />
        );
      case 'raw-detail':
        return (
          <RawDetails
            images={adsBannerImages}
            setImages={setAdsBannerImages}
          />
        );
      case 'manufacture':
        return (
          <Manufacture
            images={adsBannerImages}
            setImages={setAdsBannerImages}
          />
        );
      case 'manufacture-details':
        return (
          <ManufacturedDetailsAdmin
            images={adsBannerImages}
            setImages={setAdsBannerImages}
          />
        );
      case 'machine-details':
        return (
          <MachineryDetailsAdmin
            images={adsBannerImages}
            setImages={setAdsBannerImages}
          />
        );
      case 'machine':
        return (
          <Machinery
            images={adsBannerImages}
            setImages={setAdsBannerImages}
          />
        );
      case 'support':
        return (
          <SupportDetails
          offers={offers}
          setOffers={setOffers}
          offerText={offerText}
          setOfferText={setOfferText}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          />
        );
      case 'aboutHome':
        return (
          <AboutHome
          offers={offers}
          setOffers={setOffers}
          offerText={offerText}
          setOfferText={setOfferText}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex items-center shadow-md shadow-blue-100 bg-white p-4 justify-between">
        <h1 className="text-xl font-bold text-black">Admin Panel</h1>
        <img src={logo} alt="Company Logo" className="w-10 h-10" />
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <HiMenu className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      <div className="min-h-screen flex flex-col lg:flex-row">
        <div
          className={`lg:w-60 w-full lg:block bg-white shadow-md shadow-blue-500 p-4 fixed lg:relative top-0 left-0 h-full lg:h-auto z-50 transform transition-transform ${
            navOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}
          style={{ width: '300px' }}
        >
          <div className="flex justify-between items-center lg:hidden">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              className="focus:outline-none"
              onClick={() => setNavOpen(false)}
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-8 lg:space-y-10 mt-4 lg:mt-0">
            <button
              onClick={() => setActiveTab('discovery')}
              className={`px-4 py-2 mt-12 flex rounded-lg hover:bg-blue-50 items-center font-semibold ${
                activeTab === 'discovery' ? 'bg-blue-100 text-black' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <TbWorld className="mx-2" />
              Discovery
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2 flex rounded-lg hover:bg-blue-50 items-center font-semibold ${
                activeTab === 'about' ? 'bg-blue-100 text-black' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <BiConversation className="mx-2" />
              About
            </button>
            <button
              onClick={() => setActiveTab('raw')}
              className={`px-4 py-2 flex rounded-lg hover:bg-blue-50 items-center font-semibold ${
                activeTab === 'raw' ? 'bg-blue-100 text-black' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <LiaIconsSolid className="mx-2" />
              Raw Material
            </button>
            <button
              onClick={() => setActiveTab('raw-detail')}
              className={`px-4 py-2 flex rounded-lg hover:bg-blue-50 items-center font-semibold ${
                activeTab === 'raw-detail' ? 'bg-blue-100 text-black' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <LiaIconsSolid className="mx-2" />
              Raw Material Details
            </button>
            <button
              onClick={() => setActiveTab('manufacture')}
              className={`px-4 py-2 flex rounded-lg hover:bg-blue-50 items-center font-semibold ${
                activeTab === 'manufacture' ? 'bg-blue-100 text-black' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <GiAutoRepair className="mx-2" />
              Manufacture
            </button>
            <button
              onClick={() => setActiveTab('manufacture-details')}
              className={`px-4 py-2 flex rounded-lg hover:bg-blue-50 items-center font-semibold ${
                activeTab === 'manufacture-details' ? 'bg-blue-100 text-black' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <GiAutoRepair className="mx-2" />
              Manufacture Details
            </button>
            <button
              onClick={() => setActiveTab('machine')}
              className={`px-4 py-2 flex rounded-lg hover:bg-blue-50 items-center font-semibold ${
                activeTab === 'machine' ? 'bg-blue-100 text-black' : 'bg-gray-100 text-gray-700'
              } w-full text-left`}
            >
              <GiAutoRepair className="mx-2" />
              Machine
            </button>
            <button
              onClick={() => setActiveTab('machine-details')}
              className={`px-4 py-2 flex rounded-lg hover:bg-blue-50 items-center font-semibold ${
                activeTab === 'machine-details' ? 'bg-blue-100 text-black' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <GiAutoRepair className="mx-2" />
              Machine Details
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`px-4 py-2 flex rounded-lg hover:bg-blue-50 items-center font-semibold ${
                activeTab === 'support' ? 'bg-blue-100 text-black' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <BiConversation className="mx-2" />
              Support
            </button>
            <button
              onClick={() => setActiveTab('aboutHome')}
              className={`px-4 py-2 flex rounded-lg hover:bg-blue-50 items-center font-semibold ${
                activeTab === 'aboutHome' ? 'bg-blue-100 text-black' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <BiConversation className="mx-2" />
              About Home
            </button>
          </nav>
        </div>
        {/* <div className="w-full lg:w-[100%] p-6 bg-gradient-to-b from-transparent to-blue-200 bg-opacity-50 ml-auto"> */}
        <div className="w-full lg:w-[100%] p-6  ml-auto">
          <div className="container mx-auto p-6">
            <div>{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
