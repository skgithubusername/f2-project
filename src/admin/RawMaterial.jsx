// // // // // RawMainAdmin.jsx

// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

// // // // const RawMainAdmin = () => {
// // // //     const [title, setTitle] = useState('');
// // // //     const [desc, setDesc] = useState('');
// // // //     const [mainImage, setMainImage] = useState(null);
// // // //     const [specificationImage, setSpecificationImage] = useState(null);
// // // //     const [mainImageFile, setMainImageFile] = useState(null);
// // // //     const [specificationImageFile, setSpecificationImageFile] = useState(null);
// // // //     const [currentIndex, setCurrentIndex] = useState(null);
// // // //     const [rawMains, setRawMains] = useState([]);
// // // //     const [error, setError] = useState('');

// // // //     useEffect(() => {
// // // //         fetchRawMains();
// // // //     }, []);

// // // //     const fetchRawMains = async () => {
// // // //         try {
// // // //             const response = await axios.get('/api/rawMains/allRawMains');
// // // //             setRawMains(response.data);
// // // //         } catch (error) {
// // // //             console.error('Error fetching RawMains:', error);
// // // //         }
// // // //     };

// // // //     const handleMainImageChange = (e) => {
// // // //         const file = e.target.files[0];
// // // //         if (file) {
// // // //             setMainImage(URL.createObjectURL(file));
// // // //             setMainImageFile(file);
// // // //         }
// // // //     };

// // // //     const handleSpecificationImageChange = (e) => {
// // // //         const file = e.target.files[0];
// // // //         if (file) {
// // // //             setSpecificationImage(URL.createObjectURL(file));
// // // //             setSpecificationImageFile(file);
// // // //         }
// // // //     };

// // // //     const handleDeleteRawMain = async (id) => {
// // // //         try {
// // // //             await axios.delete(`/api/rawMains/${id}`);
// // // //             setRawMains(rawMains.filter((rawMain) => rawMain.id !== id));
// // // //         } catch (error) {
// // // //             console.error('Error deleting RawMain:', error);
// // // //         }
// // // //     };

// // // //     const handleEditRawMain = (index) => {
// // // //         const rawMain = rawMains[index];
// // // //         setTitle(rawMain.title);
// // // //         setDesc(rawMain.desc);
// // // //         setMainImage(rawMain.image);
// // // //         setSpecificationImage(rawMain.specification);
// // // //         setCurrentIndex(index);
// // // //     };

// // // //     const handleUpdateRawMain = async () => {
// // // //         if (currentIndex !== null && title && mainImageFile && specificationImageFile) {
// // // //             const rawMainToUpdate = rawMains[currentIndex];

// // // //             const formData = new FormData();
// // // //             formData.append('image', mainImageFile);
// // // //             formData.append('title', title);
// // // //             formData.append('desc', desc);
// // // //             formData.append('specification', specificationImageFile);
// // // //             formData.append('purpose', ''); // Assuming purpose is not required

// // // //             try {
// // // //                 const response = await axios.put(`/api/rawMains/${rawMainToUpdate.id}`, formData, {
// // // //                     headers: {
// // // //                         'Content-Type': 'multipart/form-data'
// // // //                     }
// // // //                 });

// // // //                 setRawMains(rawMains.map((rawMain, index) => (index === currentIndex ? response.data : rawMain)));
// // // //                 resetForm();
// // // //             } catch (error) {
// // // //                 console.error('Error updating RawMain:', error);
// // // //                 if (error.response) {
// // // //                     console.error('Response data:', error.response.data);
// // // //                 }
// // // //             }
// // // //         } else {
// // // //             setError('Title, main image, and specification image are required');
// // // //         }
// // // //     };

// // // //     const handleCreateRawMain = async () => {
// // // //         if (title && mainImageFile && specificationImageFile) {
// // // //             const formData = new FormData();
// // // //             formData.append('image', mainImageFile);
// // // //             formData.append('title', title);
// // // //             formData.append('desc', desc);
// // // //             formData.append('specification', specificationImageFile);
// // // //             formData.append('purpose', ''); // Assuming purpose is not required

// // // //             try {
// // // //                 const response = await axios.post('/api/rawMains/addRawMain', formData, {
// // // //                     headers: {
// // // //                         'Content-Type': 'multipart/form-data'
// // // //                     }
// // // //                 });

// // // //                 setRawMains([...rawMains, response.data]);
// // // //                 resetForm();
// // // //             } catch (error) {
// // // //                 console.error('Error creating RawMain:', error);
// // // //             }
// // // //         } else {
// // // //             setError('Title, main image, and specification image are required');
// // // //         }
// // // //     };

// // // //     const resetForm = () => {
// // // //         setTitle('');
// // // //         setDesc('');
// // // //         setMainImage(null);
// // // //         setSpecificationImage(null);
// // // //         setMainImageFile(null);
// // // //         setSpecificationImageFile(null);
// // // //         setCurrentIndex(null);
// // // //         setError('');
// // // //     };

// // // //     return (
// // // //         <div className="container mx-auto p-4">
// // // //             <h1 className="text-2xl font-bold mb-4">RawMain Management</h1>
// // // //             <div className="mb-4">
// // // //                 <input
// // // //                     type="text"
// // // //                     placeholder="Title"
// // // //                     value={title}
// // // //                     onChange={(e) => setTitle(e.target.value)}
// // // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // // //                 />
// // // //                 <input
// // // //                     type="text"
// // // //                     placeholder="Description"
// // // //                     value={desc}
// // // //                     onChange={(e) => setDesc(e.target.value)}
// // // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // // //                 />
// // // //                 <div className="flex mb-2">
// // // //                     <div className="w-1/2 mr-2">
// // // //                         <label className="block mb-1">Main Image</label>
// // // //                         <input type="file" onChange={handleMainImageChange} className="mb-2" />
// // // //                         {mainImage && (
// // // //                             <img src={mainImage} alt="Main" className="w-full h-48 object-cover mb-2 rounded" />
// // // //                         )}
// // // //                     </div>
// // // //                     <div className="w-1/2 ml-2">
// // // //                         <label className="block mb-1">Specification Image</label>
// // // //                         <input type="file" onChange={handleSpecificationImageChange} className="mb-2" />
// // // //                         {specificationImage && (
// // // //                             <img
// // // //                                 src={specificationImage}
// // // //                                 alt="Specification"
// // // //                                 className="w-full h-48 object-cover mb-2 rounded"
// // // //                             />
// // // //                         )}
// // // //                     </div>
// // // //                 </div>
// // // //                 <button
// // // //                     onClick={currentIndex === null ? handleCreateRawMain : handleUpdateRawMain}
// // // //                     className="bg-blue-500 text-white p-2 rounded"
// // // //                 >
// // // //                     {currentIndex === null ? 'Add RawMain' : 'Update RawMain'}
// // // //                 </button>
// // // //                 {error && <p className="text-red-500 mt-2">{error}</p>}
// // // //             </div>
// // // //             <div className="lg:grid lg:grid-cols-1 gap-4 flex flex-col">
// // // //                 {rawMains.map((rawMain, index) => (
// // // //                     <div key={rawMain.id} className="border p-4 rounded shadow mb-4 overflow-hidden">
// // // //                         <div className="w-full h-[300px] mb-2">
// // // //                             <img src={`/${rawMain.image}`} alt={rawMain.title} className="w-full h-full object-cover" />
// // // //                         </div>
// // // //                         <div className="w-full h-[300px] mb-2">
// // // //                             <img src={`/${rawMain.specification}`} alt={rawMain.title} className="w-full h-full object-cover" />
// // // //                         </div>
// // // //                         <h2 className="text-lg font-semibold truncate">{rawMain.title}</h2>
// // // //                         <p className="mb-2 break-words">{rawMain.desc}</p>
// // // //                         <div className="flex space-x-2">
// // // //                             <button
// // // //                                 onClick={() => handleEditRawMain(index)}
// // // //                                 className="flex items-center justify-center text-yellow-500 p-2"
// // // //                             >
// // // //                                 <AiOutlineEdit />
// // // //                             </button>
// // // //                             <button
// // // //                                 onClick={() => handleDeleteRawMain(rawMain.id)}
// // // //                                 className="flex items-center justify-center text-red-500 p-2"
// // // //                             >
// // // //                                 <AiOutlineDelete />
// // // //                             </button>
// // // //                         </div>
// // // //                     </div>
// // // //                 ))}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default RawMainAdmin;

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

// // // const RawMainAdmin = () => {
// // //     const [title, setTitle] = useState('');
// // //     const [desc, setDesc] = useState('');
// // //     const [purpose, setPurpose] = useState(''); // Added purpose field
// // //     const [mainImage, setMainImage] = useState(null);
// // //     const [specificationImage, setSpecificationImage] = useState(null);
// // //     const [mainImageFile, setMainImageFile] = useState(null);
// // //     const [specificationImageFile, setSpecificationImageFile] = useState(null);
// // //     const [currentIndex, setCurrentIndex] = useState(null);
// // //     const [rawMains, setRawMains] = useState([]);
// // //     const [error, setError] = useState('');

// // //     useEffect(() => {
// // //         fetchRawMains();
// // //     }, []);

// // //     const fetchRawMains = async () => {
// // //         try {
// // //             const response = await axios.get('/api/rawMains/allRawMains');
// // //             setRawMains(response.data);
// // //         } catch (error) {
// // //             console.error('Error fetching RawMains:', error);
// // //         }
// // //     };

// // //     const handleImageChange = (e, setImage, setImageFile) => {
// // //         const file = e.target.files[0];
// // //         if (file) {
// // //             setImage(URL.createObjectURL(file));
// // //             setImageFile(file);
// // //         }
// // //     };

// // //     const handleFormSubmit = async () => {
// // //         if (!title || !purpose || !(mainImageFile || mainImage) || !(specificationImageFile || specificationImage)) {
// // //             setError('Title, purpose, main image, and specification image are required');
// // //             return;
// // //         }

// // //         const formData = new FormData();
// // //         if (mainImageFile) {
// // //             formData.append('image', mainImageFile);
// // //         }
// // //         if (specificationImageFile) {
// // //             formData.append('specification', specificationImageFile);
// // //         }
// // //         formData.append('title', title);
// // //         formData.append('desc', desc);
// // //         formData.append('purpose', purpose);

// // //         console.log('Form Data:', formData); // Log formData being sent

// // //         try {
// // //             const url = currentIndex === null ? '/api/rawMains/addRawMain' : `/api/rawMains/${rawMains[currentIndex].id}`;
// // //             const method = currentIndex === null ? 'post' : 'put';

// // //             const response = await axios[method](url, formData, {
// // //                 headers: { 'Content-Type': 'multipart/form-data' },
// // //             });

// // //             console.log('Response from server:', response.data); // Log server response

// // //             if (currentIndex === null) {
// // //                 setRawMains([...rawMains, response.data]);
// // //             } else {
// // //                 setRawMains(rawMains.map((rawMain, index) => (index === currentIndex ? response.data : rawMain)));
// // //             }
// // //             resetForm();
// // //         } catch (error) {
// // //             console.error('Error submitting form:', error);
// // //             if (error.response) {
// // //                 console.error('Response data:', error.response.data);
// // //             }
// // //         }
// // //     };

// // //     const handleEditRawMain = (index) => {
// // //         const rawMain = rawMains[index];
// // //         setTitle(rawMain.title);
// // //         setDesc(rawMain.desc);
// // //         setPurpose(rawMain.purpose); // Added purpose field
// // //         setMainImage(rawMain.image);
// // //         setSpecificationImage(rawMain.specification);
// // //         setCurrentIndex(index);
// // //     };

// // //     const handleDeleteRawMain = async (id) => {
// // //         try {
// // //             await axios.delete(`/api/rawMains/${id}`);
// // //             setRawMains(rawMains.filter((rawMain) => rawMain.id !== id));
// // //         } catch (error) {
// // //             console.error('Error deleting RawMain:', error);
// // //         }
// // //     };

// // //     const resetForm = () => {
// // //         setTitle('');
// // //         setDesc('');
// // //         setPurpose(''); // Added purpose field
// // //         setMainImage(null);
// // //         setSpecificationImage(null);
// // //         setMainImageFile(null);
// // //         setSpecificationImageFile(null);
// // //         setCurrentIndex(null);
// // //         setError('');
// // //     };

// // //     return (
// // //         <div className="container mx-auto p-4">
// // //             <h1 className="text-2xl font-bold mb-4">RawMain Management</h1>
// // //             <div className="mb-4">
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Title"
// // //                     value={title}
// // //                     onChange={(e) => setTitle(e.target.value)}
// // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // //                 />
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Description"
// // //                     value={desc}
// // //                     onChange={(e) => setDesc(e.target.value)}
// // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // //                 />
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Purpose"
// // //                     value={purpose}
// // //                     onChange={(e) => setPurpose(e.target.value)}
// // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // //                 />
// // //                 <div className="flex mb-2">
// // //                     <div className="w-1/2 mr-2">
// // //                         <label className="block mb-1">Main Image</label>
// // //                         <input type="file" onChange={(e) => handleImageChange(e, setMainImage, setMainImageFile)} className="mb-2" />
// // //                         {mainImage && (
// // //                             <img src={mainImage} alt="Main" className="w-full h-48 object-cover mb-2 rounded" />
// // //                         )}
// // //                     </div>
// // //                     <div className="w-1/2 ml-2">
// // //                         <label className="block mb-1">Specification Image</label>
// // //                         <input type="file" onChange={(e) => handleImageChange(e, setSpecificationImage, setSpecificationImageFile)} className="mb-2" />
// // //                         {specificationImage && (
// // //                             <img
// // //                                 src={specificationImage}
// // //                                 alt="Specification"
// // //                                 className="w-full h-48 object-cover mb-2 rounded"
// // //                             />
// // //                         )}
// // //                     </div>
// // //                 </div>
// // //                 <button
// // //                     onClick={handleFormSubmit}
// // //                     className="bg-blue-500 text-white p-2 rounded"
// // //                 >
// // //                     {currentIndex === null ? 'Add RawMain' : 'Update RawMain'}
// // //                 </button>
// // //                 {error && <p className="text-red-500 mt-2">{error}</p>}
// // //             </div>
// // //             <div className="lg:grid lg:grid-cols-1 gap-4 flex flex-col">
// // //                 {rawMains.map((rawMain, index) => (
// // //                     <div key={rawMain.id} className="border p-4 rounded shadow mb-4 overflow-hidden">
// // //                         <div className="w-full h-[300px] mb-2">
// // //                             <img src={`/${rawMain.image}`} alt={rawMain.title} className="w-full h-full object-cover" />
// // //                         </div>
// // //                         <div className="w-full h-[300px] mb-2">
// // //                             <img src={`/${rawMain.specification}`} alt={rawMain.title} className="w-full h-full object-cover" />
// // //                         </div>
// // //                         <h2 className="text-lg font-semibold truncate">{rawMain.title}</h2>
// // //                         <p className="mb-2 break-words">{rawMain.desc}</p>
// // //                         <p className="mb-2 break-words">{rawMain.purpose}</p> {/* Added purpose field */}
// // //                         <div className="flex space-x-2">
// // //                             <button
// // //                                 onClick={() => handleEditRawMain(index)}
// // //                                 className="flex items-center justify-center text-yellow-500 p-2"
// // //                             >
// // //                                 <AiOutlineEdit />
// // //                             </button>
// // //                             <button
// // //                                 onClick={() => handleDeleteRawMain(rawMain.id)}
// // //                                 className="flex items-center justify-center text-red-500 p-2"
// // //                             >
// // //                                 <AiOutlineDelete />
// // //                             </button>
// // //                         </div>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default RawMainAdmin;

// // // // RawMain.js

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { AiOutlineEdit } from "react-icons/ai";
// // // import { MdOutlineDeleteForever } from "react-icons/md";

// // // const RawMain = () => {
// // //     const [title, setTitle] = useState('');
// // //     const [desc, setDesc] = useState('');
// // //     const [purpose, setPurpose] = useState('');
// // //     const [currentIndex, setCurrentIndex] = useState(null);
// // //     const [selectedImage, setSelectedImage] = useState(null);
// // //     const [selectedSpecification, setSelectedSpecification] = useState(null);
// // //     const [rawMains, setRawMains] = useState([]);
// // //     const [error, setError] = useState('');

// // //     useEffect(() => {
// // //         fetchRawMains();
// // //     }, []);

// // //     const fetchRawMains = async () => {
// // //         try {
// // //             const response = await axios.get('/api/rawMains/allRawMains');
// // //             setRawMains(response.data);
// // //         } catch (error) {
// // //             console.error('Error fetching RawMains:', error);
// // //         }
// // //     };

// // //     const handleImageChange = (e) => {
// // //         const file = e.target.files[0];
// // //         if (file) {
// // //             setSelectedImage(file);
// // //         }
// // //     };

// // //     const handleSpecificationChange = (e) => {
// // //         const file = e.target.files[0];
// // //         if (file) {
// // //             setSelectedSpecification(file);
// // //         }
// // //     };

// // //     const handleDeleteRawMain = async (id) => {
// // //         try {
// // //             await axios.delete(`/api/rawMains/${id}`);
// // //             setRawMains(rawMains.filter(rawMain => rawMain.id !== id));
// // //         } catch (error) {
// // //             console.error('Error deleting RawMain:', error);
// // //         }
// // //     };

// // //     const handleEditRawMain = (index) => {
// // //         const rawMain = rawMains[index];
// // //         setTitle(rawMain.title);
// // //         setDesc(rawMain.desc);
// // //         setPurpose(rawMain.purpose);
// // //         setCurrentIndex(index);
// // //     };

// // //     const handleUpdateRawMain = async () => {
// // //         if (currentIndex !== null) {
// // //             const rawMainToUpdate = rawMains[currentIndex];

// // //             const formData = new FormData();
// // //             formData.append('title', title);
// // //             formData.append('desc', desc);
// // //             formData.append('purpose', purpose);

// // //             if (selectedImage) {
// // //                 formData.append('image', selectedImage);
// // //             }
// // //             if (selectedSpecification) {
// // //                 formData.append('specification', selectedSpecification);
// // //             }

// // //             const url = `/api/rawMains/${rawMainToUpdate.id}`;

// // //             try {
// // //                 const response = await axios.put(url, formData, {
// // //                     headers: {
// // //                         'Content-Type': 'multipart/form-data'
// // //                     }
// // //                 });

// // //                 setRawMains(rawMains.map((rawMain, index) => (index === currentIndex ? response.data : rawMain)));
// // //                 resetForm();
// // //             } catch (error) {
// // //                 console.error('Error updating RawMain:', error);
// // //                 if (error.response) {
// // //                     console.error('Response data:', error.response.data);
// // //                 }
// // //             }
// // //         }
// // //     };

// // //     // const handleUpdateRawMain = async () => {
// // //     //     console.log('currentIndex', currentIndex)
// // //     //     if (currentIndex !== null) {
// // //     //         const rawMainToUpdate = rawMains[currentIndex];
// // //     //         const formData = new FormData();
// // //     //         formData.append('title', title);
// // //     //         formData.append('desc', desc);
// // //     //         formData.append('purpose', purpose);
// // //     //         if (selectedImage) {
// // //     //             formData.append('image', selectedImage);
// // //     //         }
// // //     //         if (selectedSpecification) {
// // //     //             formData.append('specification', selectedSpecification);
// // //     //         }

// // //     //         const url = `/api/rawMains/${rawMainToUpdate.id}`;

// // //     //         // try {
// // //     //         //     const response = await axios.put(url, formData, {
// // //     //         //         headers: {
// // //     //         //             'Content-Type': 'multipart/form-data'
// // //     //         //         }
// // //     //         //     });

// // //     //         //     setRawMains(rawMains.map((rawMain, index) => (index === currentIndex ? response.data : rawMain)));
// // //     //         //     resetForm();
// // //     //         // } catch (error) {
// // //     //         //     console.error('Error updating RawMain:', error);
// // //     //         //     if (error.response) {
// // //     //         //         console.error('Response data:', error.response.data);
// // //     //         //     }
// // //     //         // }
// // //     //     }
// // //     // };

// // //     const handleCreateRawMain = async () => {
// // //         if (title && purpose && selectedImage && selectedSpecification) {
// // //             const formData = new FormData();
// // //             formData.append('image', selectedImage);
// // //             formData.append('specification', selectedSpecification);
// // //             formData.append('title', title);
// // //             formData.append('desc', desc);
// // //             formData.append('purpose', purpose);

// // //             try {
// // //                 const response = await axios.post('/api/rawMains/addRawMain', formData, {
// // //                     headers: {
// // //                         'Content-Type': 'multipart/form-data'
// // //                     }
// // //                 });
// // //                 setRawMains([...rawMains, response.data]);
// // //                 resetForm();
// // //             } catch (error) {
// // //                 console.error('Error creating RawMain:', error);
// // //             }
// // //         } else {
// // //             setError('Title, description, purpose, image, and specification are required');
// // //         }
// // //     };

// // //     const resetForm = () => {
// // //         setTitle('');
// // //         setDesc('');
// // //         setPurpose('');
// // //         setSelectedImage(null);
// // //         setSelectedSpecification(null);
// // //         setCurrentIndex(null);
// // //         setError('');
// // //     };

// // //     return (
// // //         <div className="container mx-auto p-4">
// // //             <h1 className="text-2xl font-bold mb-4">RawMain Management</h1>
// // //             <div className="mb-4">
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Title"
// // //                     value={title}
// // //                     onChange={(e) => setTitle(e.target.value)}
// // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // //                 />
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Description"
// // //                     value={desc}
// // //                     onChange={(e) => setDesc(e.target.value)}
// // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // //                 />
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Purpose"
// // //                     value={purpose}
// // //                     onChange={(e) => setPurpose(e.target.value)}
// // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // //                 />
// // //                 <input type="file" onChange={handleImageChange} className="mb-2" />
// // //                 <input type="file" onChange={handleSpecificationChange} className="mb-2" />
// // //                 <button
// // //                     onClick={currentIndex === null ? handleCreateRawMain : handleUpdateRawMain}
// // //                     className="bg-blue-500 text-white p-2 rounded"
// // //                 >
// // //                     {currentIndex === null ? 'Add' : 'Update'}
// // //                 </button>
// // //                 {error && <p className="text-red-500 mt-2">{error}</p>}
// // //             </div>
// // //             <div className="lg:grid lg:grid-cols-1 gap-4 flex flex-col">
// // //                 {rawMains.map((rawMain, index) => (
// // //                     <div key={rawMain.id} className="border p-4 rounded shadow mb-4 overflow-hidden">
// // //                         {rawMain.image && (
// // //                             <div className='w-full h-[300px] mb-2'>
// // //                                 <img src={`/${rawMain.image}`} alt={rawMain.title} className="w-full h-full object-cover" />
// // //                             </div>
// // //                         )}
// // //                         <h2 className="text-lg font-semibold truncate">{rawMain.title}</h2>
// // //                         <p className="mb-2 break-words">{rawMain.desc}</p>
// // //                         <p className="mb-2 break-words">{rawMain.purpose}</p>
// // //                         <div className="flex space-x-2">
// // //                             <button
// // //                                 onClick={() => handleEditRawMain(index)}
// // //                                 className="flex items-center justify-center text-yellow-500 p-2"
// // //                             >
// // //                                 <AiOutlineEdit />
// // //                             </button>
// // //                             <button
// // //                                 onClick={() => handleDeleteRawMain(rawMain.id)}
// // //                                 className="flex items-center justify-center text-red-500 p-2"
// // //                             >
// // //                                 <MdOutlineDeleteForever />
// // //                             </button>
// // //                         </div>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default RawMain;

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { AiOutlineEdit } from "react-icons/ai";
// // // import { MdOutlineDeleteForever } from "react-icons/md";

// // // const RawMaterial = () => {
// // //     const [title, setTitle] = useState('');
// // //     const [desc, setDesc] = useState('');
// // //     const [purpose, setPurpose] = useState('');
// // //     const [currentIndex, setCurrentIndex] = useState(null);
// // //     const [selectedImage, setSelectedImage] = useState(null);
// // //     const [selectedSpecification, setSelectedSpecification] = useState(null);
// // //     const [rawMains, setRawMains] = useState([]);
// // //     const [error, setError] = useState('');

// // //     useEffect(() => {
// // //         fetchRawMains();
// // //     }, []);

// // //     const fetchRawMains = async () => {
// // //         try {
// // //             const response = await axios.get('/api/rawMains/allRawMains');
// // //             setRawMains(response.data);
// // //         } catch (error) {
// // //             console.error('Error fetching rawMains:', error);
// // //         }
// // //     };

// // //     const handleImageChange = (e) => {
// // //         const file = e.target.files[0];
// // //         if (file) {
// // //             setSelectedImage(file);
// // //         }
// // //     };

// // //     const handleSpecificationChange = (e) => {
// // //         const file = e.target.files[0];
// // //         if (file) {
// // //             setSelectedSpecification(file);
// // //         }
// // //     };

// // //     const handleDeleteRawMain = async (index) => {
// // //         const rawMain = rawMains[index];
// // //         try {
// // //             await axios.delete(`/api/rawMains/${rawMain.id}`);
// // //             setRawMains(rawMains.filter((_, i) => i !== index));
// // //         } catch (error) {
// // //             console.error('Error deleting rawMain:', error);
// // //         }
// // //     };

// // //     const handleEditRawMain = (index) => {
// // //         const rawMain = rawMains[index];
// // //         setTitle(rawMain.title);
// // //         setDesc(rawMain.desc);
// // //         setPurpose(rawMain.purpose);
// // //         setCurrentIndex(index);
// // //     };

// // //     const handleUpdateRawMain = async () => {
// // //         if (currentIndex !== null) {
// // //             const rawMainToUpdate = rawMains[currentIndex];

// // //             const formData = new FormData();
// // //             formData.append('title', title);
// // //             formData.append('desc', desc);
// // //             formData.append('purpose', purpose);
// // //             if (selectedImage) {
// // //                 formData.append('image', selectedImage);
// // //             }
// // //             if (selectedSpecification) {
// // //                 formData.append('specification', selectedSpecification);
// // //             }

// // //             const url = `/api/rawMains/${rawMainToUpdate.id}`;

// // //             try {
// // //                 console.log('FormData before sending:', Array.from(formData.entries()));
// // //                 const response = await axios.put(url, formData, {
// // //                     headers: {
// // //                         'Content-Type': 'multipart/form-data'
// // //                     }
// // //                 });

// // //                 console.log('Update response:', response.data);
// // //                 setRawMains(rawMains.map((rawMain, index) => (index === currentIndex ? response.data : rawMain)));
// // //                 resetForm();
// // //             } catch (error) {
// // //                 console.error('Error updating rawMain:', error);
// // //                 if (error.response) {
// // //                     console.error('Response data:', error.response.data);
// // //                 }
// // //             }
// // //         }
// // //     };

// // //     const handleCreateRawMain = async () => {
// // //         if (title && desc && purpose && selectedImage && selectedSpecification) {
// // //             const formData = new FormData();
// // //             formData.append('image', selectedImage);
// // //             formData.append('specification', selectedSpecification);
// // //             formData.append('title', title);
// // //             formData.append('desc', desc);
// // //             formData.append('purpose', purpose);

// // //             try {
// // //                 const response = await axios.post('/api/rawMains/addRawMain', formData, {
// // //                     headers: {
// // //                         'Content-Type': 'multipart/form-data'
// // //                     }
// // //                 });
// // //                 setRawMains([...rawMains, response.data]);
// // //                 resetForm();
// // //             } catch (error) {
// // //                 console.error('Error creating rawMain:', error);
// // //             }
// // //         } else {
// // //             setError('All fields are required');
// // //         }
// // //     };

// // //     const resetForm = () => {
// // //         setTitle('');
// // //         setDesc('');
// // //         setPurpose('');
// // //         setSelectedImage(null);
// // //         setSelectedSpecification(null);
// // //         setCurrentIndex(null);
// // //         setError('');
// // //     };

// // //     return (
// // //         <div className="container mx-auto p-4">
// // //             <h1 className="text-2xl font-bold mb-4">Raw Material Management</h1>
// // //             <div className="mb-4">
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Title"
// // //                     value={title}
// // //                     onChange={(e) => setTitle(e.target.value)}
// // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // //                 />
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Description"
// // //                     value={desc}
// // //                     onChange={(e) => setDesc(e.target.value)}
// // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // //                 />
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Purpose"
// // //                     value={purpose}
// // //                     onChange={(e) => setPurpose(e.target.value)}
// // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // //                 />
// // //                 <input
// // //                     type="file"
// // //                     onChange={handleImageChange}
// // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // //                 />
// // //                 <input
// // //                     type="file"
// // //                     onChange={handleSpecificationChange}
// // //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// // //                 />
// // //                 {error && <p className="text-red-500">{error}</p>}
// // //                 {currentIndex === null ? (
// // //                     <button
// // //                         onClick={handleCreateRawMain}
// // //                         className="bg-blue-500 text-white p-2 rounded"
// // //                     >
// // //                         Create
// // //                     </button>
// // //                 ) : (
// // //                     <button
// // //                         onClick={handleUpdateRawMain}
// // //                         className="bg-green-500 text-white p-2 rounded"
// // //                     >
// // //                         Update
// // //                     </button>
// // //                 )}
// // //             </div>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // //                 {rawMains.map((rawMain, index) => (
// // //                     <div key={index} className="p-4 border border-gray-300 rounded">
// // //                         <img src={`/${rawMain.image}`} alt="Raw Material" className="w-full h-48 object-cover mb-4" />
// // //                         <h2 className="text-xl font-bold mb-2">{rawMain.title}</h2>
// // //                         <p className="mb-2">{rawMain.desc}</p>
// // //                         <p className="mb-2">{rawMain.purpose}</p>
// // //                         <img src={`/${rawMain.specification}`} alt="Specification" className="w-full h-48 object-cover mb-4" />
// // //                         <button
// // //                             onClick={() => handleEditRawMain(index)}
// // //                             className="text-blue-500 mr-2"
// // //                         >
// // //                             <AiOutlineEdit />
// // //                         </button>
// // //                         <button
// // //                             onClick={() => handleDeleteRawMain(index)}
// // //                             className="text-red-500"
// // //                         >
// // //                             <MdOutlineDeleteForever />
// // //                         </button>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default RawMaterial;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { AiOutlineEdit } from "react-icons/ai";
// // import { MdOutlineDeleteForever } from "react-icons/md";

// // const RawMaterial = () => {
// //     const [title, setTitle] = useState('');
// //     const [desc, setDesc] = useState('');
// //     const [purpose, setPurpose] = useState('');
// //     const [currentIndex, setCurrentIndex] = useState(null);
// //     const [selectedImage, setSelectedImage] = useState(null);
// //     const [selectedSpecification, setSelectedSpecification] = useState(null);
// //     const [rawMains, setRawMains] = useState([]);
// //     const [error, setError] = useState('');

// //     useEffect(() => {
// //         fetchRawMains();
// //     }, []);

// //     const fetchRawMains = async () => {
// //         try {
// //             const response = await axios.get('/api/rawMains/allRawMains');
// //             setRawMains(response.data);
// //         } catch (error) {
// //             console.error('Error fetching rawMains:', error);
// //         }
// //     };

// //     const handleImageChange = (e) => {
// //         const file = e.target.files[0];
// //         if (file) {
// //             setSelectedImage(file);
// //         }
// //     };

// //     const handleSpecificationChange = (e) => {
// //         const file = e.target.files[0];
// //         if (file) {
// //             setSelectedSpecification(file);
// //         }
// //     };

// //     const handleDeleteRawMain = async (index) => {
// //         const rawMain = rawMains[index];
// //         try {
// //             await axios.delete(`/api/rawMains/${rawMain.id}`);
// //             setRawMains(rawMains.filter((_, i) => i !== index));
// //         } catch (error) {
// //             console.error('Error deleting rawMain:', error);
// //         }
// //     };

// //     const handleEditRawMain = (index) => {
// //         const rawMain = rawMains[index];
// //         setTitle(rawMain.title);
// //         setDesc(rawMain.desc);
// //         setPurpose(rawMain.purpose || ''); // Ensure purpose is initialized
// //         setCurrentIndex(index);
// //     };

// //     const handleUpdateRawMain = async () => {
// //         if (currentIndex !== null) {
// //             const rawMainToUpdate = rawMains[currentIndex];

// //             const formData = new FormData();
// //             formData.append('title', title);
// //             formData.append('desc', desc);
// //             if (purpose) {
// //                 formData.append('purpose', purpose);
// //             }
// //             if (selectedImage) {
// //                 formData.append('image', selectedImage);
// //             }
// //             if (selectedSpecification) {
// //                 formData.append('specification', selectedSpecification);
// //             }

// //             const url = `/api/rawMains/${rawMainToUpdate.id}`;

// //             try {
// //                 console.log('FormData before sending:', Array.from(formData.entries()));
// //                 const response = await axios.put(url, formData, {
// //                     headers: {
// //                         'Content-Type': 'multipart/form-data'
// //                     }
// //                 });

// //                 console.log('Update response:', response.data);
// //                 setRawMains(rawMains.map((rawMain, index) => (index === currentIndex ? response.data : rawMain)));
// //                 resetForm();
// //             } catch (error) {
// //                 console.error('Error updating rawMain:', error);
// //                 if (error.response) {
// //                     console.error('Response data:', error.response.data);
// //                 }
// //             }
// //         }
// //     };

// //     const handleCreateRawMain = async () => {
// //         if (title && desc && selectedImage && selectedSpecification) {
// //             const formData = new FormData();
// //             formData.append('image', selectedImage);
// //             formData.append('specification', selectedSpecification);
// //             formData.append('title', title);
// //             formData.append('desc', desc);
// //             if (purpose) {
// //                 formData.append('purpose', purpose);
// //             }

// //             try {
// //                 const response = await axios.post('/api/rawMains/addRawMain', formData, {
// //                     headers: {
// //                         'Content-Type': 'multipart/form-data'
// //                     }
// //                 });
// //                 setRawMains([...rawMains, response.data]);
// //                 resetForm();
// //             } catch (error) {
// //                 console.error('Error creating rawMain:', error);
// //             }
// //         } else {
// //             setError('All fields except Purpose are required');
// //         }
// //     };

// //     const resetForm = () => {
// //         setTitle('');
// //         setDesc('');
// //         setPurpose('');
// //         setSelectedImage(null);
// //         setSelectedSpecification(null);
// //         setCurrentIndex(null);
// //         setError('');
// //     };

// //     return (
// //         <div className="container mx-auto p-4">
// //             <h1 className="text-2xl font-bold mb-4">Raw Material Management</h1>
// //             <div className="mb-4">
// //                 <input
// //                     type="text"
// //                     placeholder="Title"
// //                     value={title}
// //                     onChange={(e) => setTitle(e.target.value)}
// //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// //                 />
// //                 <input
// //                     type="text"
// //                     placeholder="Description"
// //                     value={desc}
// //                     onChange={(e) => setDesc(e.target.value)}
// //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// //                 />
// //                 <input
// //                     type="text"
// //                     placeholder="Purpose (Optional)"
// //                     value={purpose}
// //                     onChange={(e) => setPurpose(e.target.value)}
// //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// //                 />
// //                 <input
// //                     type="file"
// //                     onChange={handleImageChange}
// //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// //                 />
// //                 <input
// //                     type="file"
// //                     onChange={handleSpecificationChange}
// //                     className="w-full p-2 border border-gray-300 rounded mb-2"
// //                 />
// //                 {error && <p className="text-red-500">{error}</p>}
// //                 {currentIndex === null ? (
// //                     <button
// //                         onClick={handleCreateRawMain}
// //                         className="bg-blue-500 text-white p-2 rounded"
// //                     >
// //                         Create
// //                     </button>
// //                 ) : (
// //                     <button
// //                         onClick={handleUpdateRawMain}
// //                         className="bg-green-500 text-white p-2 rounded"
// //                     >
// //                         Update
// //                     </button>
// //                 )}
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                 {rawMains.map((rawMain, index) => (
// //                     <div key={index} className="p-4 border border-gray-300 rounded">
// //                         <img src={`/${rawMain.image}`} alt="Raw Material" className="w-full h-48 object-cover mb-4" />
// //                         <h2 className="text-xl font-bold mb-2">{rawMain.title}</h2>
// //                         <p className="mb-2">{rawMain.desc}</p>
// //                         <p className="mb-2">{rawMain.purpose}</p>
// //                         <img src={`/${rawMain.specification}`} alt="Specification" className="w-full h-48 object-cover mb-4" />
// //                         <button
// //                             onClick={() => handleEditRawMain(index)}
// //                             className="text-blue-500 mr-2"
// //                         >
// //                             <AiOutlineEdit />
// //                         </button>
// //                         <button
// //                             onClick={() => handleDeleteRawMain(index)}
// //                             className="text-red-500"
// //                         >
// //                             <MdOutlineDeleteForever />
// //                         </button>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default RawMaterial;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdOutlineDeleteForever } from "react-icons/md";

// const RawMaterial = () => {
//     const [title, setTitle] = useState('');
//     const [desc, setDesc] = useState('');
//     const [purpose, setPurpose] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(null);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [selectedSpecification, setSelectedSpecification] = useState(null);
//     const [rawMains, setRawMains] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         fetchRawMains();
//     }, []);

//     const fetchRawMains = async () => {
//         try {
//             const response = await axios.get('/api/rawMains/allRawMains');
//             setRawMains(response.data);
//         } catch (error) {
//             console.error('Error fetching rawMains:', error);
//         }
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setSelectedImage(file);
//         }
//     };

//     const handleSpecificationChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setSelectedSpecification(file);
//         }
//     };

//     const handleDeleteRawMain = async (index) => {
//         const rawMain = rawMains[index];
//         try {
//             await axios.delete(`/api/rawMains/${rawMain.id}`);
//             setRawMains(rawMains.filter((_, i) => i !== index));
//         } catch (error) {
//             console.error('Error deleting rawMain:', error);
//         }
//     };

//     const handleEditRawMain = (index) => {
//         const rawMain = rawMains[index];
//         setTitle(rawMain.title);
//         setDesc(rawMain.desc);
//         setPurpose(rawMain.purpose || '');
//         setCurrentIndex(index);
//     };

//     const handleUpdateRawMain = async () => {
//         if (currentIndex !== null) {
//             const rawMainToUpdate = rawMains[currentIndex];

//             const formData = new FormData();
//             formData.append('title', title);
//             formData.append('desc', desc);
//             if (purpose) {
//                 formData.append('purpose', purpose);
//             }
//             if (selectedImage) {
//                 formData.append('image', selectedImage);
//             }
//             if (selectedSpecification) {
//                 formData.append('specification', selectedSpecification);
//             }

//             const url = `/api/rawMains/${rawMainToUpdate.id}`;

//             try {
//                 console.log('FormData before sending:', Array.from(formData.entries()));
//                 const response = await axios.put(url, formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 });

//                 console.log('Update response:', response.data);
//                 setRawMains(rawMains.map((rawMain, index) => (index === currentIndex ? response.data : rawMain)));
//                 resetForm();
//             } catch (error) {
//                 console.error('Error updating rawMain:', error);
//                 if (error.response) {
//                     console.error('Response data:', error.response.data);
//                 }
//             }
//         }
//     };

//     const handleCreateRawMain = async () => {
//         if (title && desc && selectedImage && selectedSpecification) {
//             const formData = new FormData();
//             formData.append('image', selectedImage);
//             formData.append('specification', selectedSpecification);
//             formData.append('title', title);
//             formData.append('desc', desc);
//             if (purpose) {
//                 formData.append('purpose', purpose);
//             }

//             try {
//                 const response = await axios.post('/api/rawMains/addRawMain', formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 });
//                 setRawMains([...rawMains, response.data]);
//                 resetForm();
//             } catch (error) {
//                 console.error('Error creating rawMain:', error);
//             }
//         } else {
//             setError('Title, Description, Image, and Specification are required');
//         }
//     };

//     const resetForm = () => {
//         setTitle('');
//         setDesc('');
//         setPurpose('');
//         setSelectedImage(null);
//         setSelectedSpecification(null);
//         setCurrentIndex(null);
//         setError('');
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Raw Material Management</h1>
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     placeholder="Title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Description"
//                     value={desc}
//                     onChange={(e) => setDesc(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Purpose (Optional)"
//                     value={purpose}
//                     onChange={(e) => setPurpose(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />

//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 <input
//                     type="file"
//                     onChange={handleSpecificationChange}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 {error && <p className="text-red-500">{error}</p>}
//                 {currentIndex === null ? (
//                     <button
//                         onClick={handleCreateRawMain}
//                         className="bg-blue-500 text-white p-2 rounded"
//                     >
//                         Create
//                     </button>
//                 ) : (
//                     <button
//                         onClick={handleUpdateRawMain}
//                         className="bg-green-500 text-white p-2 rounded"
//                     >
//                         Update
//                     </button>
//                 )}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {rawMains.map((rawMain, index) => (
//                     <div key={index} className="p-4 border border-gray-300 rounded">
//                         <img src={`/${rawMain.image}`} alt="Raw Material" className="w-full h-48 object-cover mb-4" />
//                         <h2 className="text-xl font-bold mb-2">{rawMain.title}</h2>
//                         <p className="mb-2">{rawMain.desc}</p>
//                         <p className="mb-2">{rawMain.purpose}</p>
//                         <p className="mb-2">{rawMain.buttonName}</p>
//                         <img src={`/${rawMain.specification}`} alt="Specification" className="w-full h-48 object-cover mb-4" />
//                         <button
//                             onClick={() => handleEditRawMain(index)}
//                             className="text-blue-500 mr-2"
//                         >
//                             <AiOutlineEdit />
//                         </button>
//                         <button
//                             onClick={() => handleDeleteRawMain(index)}
//                             className="text-red-500"
//                         >
//                             <MdOutlineDeleteForever />
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RawMaterial;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdOutlineDeleteForever } from "react-icons/md";

// const RawMaterial = () => {
//     const [title, setTitle] = useState('');
//     const [desc, setDesc] = useState('');
//     const [purpose, setPurpose] = useState('');
//     const [buttonName, setButtonName] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(null);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [selectedSpecification, setSelectedSpecification] = useState(null);
//     const [rawMains, setRawMains] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         fetchRawMains();
//     }, []);

//     const fetchRawMains = async () => {
//         try {
//             const response = await axios.get('/api/rawMains/allRawMains');
//             setRawMains(response.data);
//         } catch (error) {
//             console.error('Error fetching rawMains:', error);
//         }
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setSelectedImage(file);
//         }
//     };

//     const handleSpecificationChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setSelectedSpecification(file);
//         }
//     };

//     const handleDeleteRawMain = async (index) => {
//         const rawMain = rawMains[index];
//         try {
//             await axios.delete(`/api/rawMains/${rawMain.id}`);
//             setRawMains(rawMains.filter((_, i) => i !== index));
//         } catch (error) {
//             console.error('Error deleting rawMain:', error);
//         }
//     };

//     const handleEditRawMain = (index) => {
//         const rawMain = rawMains[index];
//         setTitle(rawMain.title);
//         setDesc(rawMain.desc);
//         setPurpose(rawMain.purpose || '');
//         setButtonName(rawMain.buttonName || '');
//         setCurrentIndex(index);
//     };

//     const handleUpdateRawMain = async () => {
//         if (currentIndex !== null) {
//             const rawMainToUpdate = rawMains[currentIndex];

//             const formData = new FormData();
//             formData.append('title', title);
//             formData.append('desc', desc);
//             if (purpose) {
//                 formData.append('purpose', purpose);
//             }
//             if (buttonName) {
//                 formData.append('buttonName', buttonName);
//             }
//             if (selectedImage) {
//                 formData.append('image', selectedImage);
//             }
//             if (selectedSpecification) {
//                 formData.append('specification', selectedSpecification);
//             }

//             const url = `/api/rawMains/${rawMainToUpdate.id}`;

//             try {
//                 console.log('FormData before sending:', Array.from(formData.entries()));
//                 const response = await axios.put(url, formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 });

//                 console.log('Update response:', response.data);
//                 setRawMains(rawMains.map((rawMain, index) => (index === currentIndex ? response.data : rawMain)));
//                 resetForm();
//             } catch (error) {
//                 console.error('Error updating rawMain:', error);
//                 if (error.response) {
//                     console.error('Response data:', error.response.data);
//                 }
//             }
//         }
//     };

//     // const handleCreateRawMain = async () => {
//     //     if (title && desc && selectedImage && selectedSpecification) {
//     //         const formData = new FormData();
//     //         formData.append('image', selectedImage);
//     //         formData.append('specification', selectedSpecification);
//     //         formData.append('title', title);
//     //         formData.append('desc', desc);
//     //         if (purpose) {
//     //             formData.append('purpose', purpose);
//     //         }
//     //         if (buttonName) {
//     //             formData.append('buttonName', buttonName);
//     //         }

//     //         console.log("title", title);
//     //         console.log(" formData", formData);

//     //         try {
//     //             console.log(  "daata from  frontend")
//     //             console.log(  formData)
//     //             // const response = await axios.post('/api/rawMains/addRawMain', formData, {
//     //             //     headers: {
//     //             //         'Content-Type': 'multipart/form-data'
//     //             //     }
//     //             // });
//     //             // setRawMains([...rawMains, response.data]);
//     //             // resetForm();
//     //         } catch (error) {
//     //             console.error('Error creating rawMain:', error);
//     //         }
//     //     } else {
//     //         setError('Title, Description, Image, and Specification are required');
//     //     }
//     // };

// //  const handleCreateRawMain = () => {

// // const rawMainObj = {

// //     title:title,
// //     desc:desc,
// //    image:selectedImage,
// //    specification:selectedSpecification,
// //    purpose:purpose,

// //    button:buttonName

// // }

// // console.log(' rawMainObj', rawMainObj )
// //  }

//     const resetForm = () => {
//         setTitle('');
//         setDesc('');
//         setPurpose('');
//         setButtonName('');
//         setSelectedImage(null);
//         setSelectedSpecification(null);
//         setCurrentIndex(null);
//         setError('');
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Raw Material Management</h1>
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     placeholder="Title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Description"
//                     value={desc}
//                     onChange={(e) => setDesc(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Purpose (Optional)"
//                     value={purpose}
//                     onChange={(e) => setPurpose(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Button Name"
//                     value={buttonName}
//                     onChange={(e) => setButtonName(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 <input
//                     type="file"
//                     onChange={handleSpecificationChange}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 {error && <p className="text-red-500">{error}</p>}
//                 {currentIndex === null ? (
//                     <button
//                         onClick={handleCreateRawMain}
//                         className="bg-blue-500 text-white p-2 rounded"
//                     >
//                         Create
//                     </button>
//                 ) : (
//                     <button
//                         onClick={handleUpdateRawMain}
//                         className="bg-green-500 text-white p-2 rounded"
//                     >
//                         Update
//                     </button>
//                 )}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {rawMains.map((rawMain, index) => (
//                     <div key={index} className="p-4 border border-gray-300 rounded">
//                         <img src={`/${rawMain.image}`} alt="Raw Material" className="w-full h-48 object-cover mb-4" />
//                         <h2 className="text-xl font-bold mb-2">{rawMain.title}</h2>
//                         <p className="mb-2">{rawMain.desc}</p>
//                         <p className="mb-2">{rawMain.purpose}</p>
//                         <p className="mb-2">{rawMain.buttonName}</p>
//                         <img src={`/${rawMain.specification}`} alt="Specification" className="w-full h-48 object-cover mb-4" />
//                         <button
//                             onClick={() => handleEditRawMain(index)}
//                             className="text-blue-500 mr-2"
//                         >
//                             <AiOutlineEdit />
//                         </button>
//                         <button
//                             onClick={() => handleDeleteRawMain(index)}
//                             className="text-red-500"
//                         >
//                             <MdOutlineDeleteForever />
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RawMaterial;

// 23456789

import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";

const RawMaterial = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [purpose, setPurpose] = useState("");
  const [buttonNames, setButtonNames] = useState([""]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSpecification, setSelectedSpecification] = useState(null);
  const [rawMains, setRawMains] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRawMains();
  }, []);

  const fetchRawMains = async () => {
    try {
      const response = await axios.get("/api/rawMains/allRawMains");

      setRawMains(response.data);
    } catch (error) {
      console.error("Error fetching rawMains:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSpecificationChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedSpecification(file);
    }
  };

  const handleDeleteRawMain = async (index) => {
    const rawMain = rawMains[index];
    try {
      await axios.delete(`/api/rawMains/${rawMain.id}`);
      setRawMains(rawMains.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting rawMain:", error);
    }
  };

  const handleEditRawMain = (index) => {
    const rawMain = rawMains[index];
    setTitle(rawMain.title);
    setDesc(rawMain.desc);
    setPurpose(rawMain.purpose || "");
    setButtonNames(rawMain.buttonNames || [""]);
    setCurrentIndex(index);
  };

  const handleUpdateRawMain = async () => {
    if (currentIndex !== null) {
      const rawMainToUpdate = rawMains[currentIndex];

      const formData = new FormData();
      formData.append("title", title);
      formData.append("desc", desc);
      if (purpose) {
        formData.append("purpose", purpose);
      }
      buttonNames.forEach((name, index) => {
        formData.append(`buttonName[${index}]`, name);
      });
      if (selectedImage) {
        formData.append("image", selectedImage);
      }
      if (selectedSpecification) {
        formData.append("specification", selectedSpecification);
      }

      const url = `/api/rawMains/${rawMainToUpdate.id}`;

      try {
        const response = await axios.put(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setRawMains(
          rawMains.map((rawMain, index) =>
            index === currentIndex ? response.data : rawMain
          )
        );
        resetForm();
      } catch (error) {
        console.error("Error updating rawMain:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      }
    }
  };

  // const handleCreateRawMain = async () => {
  //     if (title && desc && selectedImage && selectedSpecification) {
  //         const formData = new FormData();

  //         formData.append('image', selectedImage);
  //         formData.append('specification', selectedSpecification);
  //         formData.append('title', title);
  //         formData.append('desc', desc);
  //         if (purpose) {
  //             formData.append('purpose', purpose);
  //         }
  //         buttonNames.forEach((name, index) => {
  //             formData.append(`buttonName[${index}]`, name);
  //         });

  //         try {
  //             console.log( formData)
  //             // const response = await axios.post('/api/rawMains/addRawMain', formData, {
  //             //     headers: {
  //             //         'Content-Type': 'multipart/form-data'
  //             //     }
  //             // }
  //         // );
  //             // setRawMains([...rawMains, response.data]);
  //             // resetForm();
  //         } catch (error) {
  //             console.error('Error creating rawMain:', error);
  //         }
  //     } else {
  //         setError('Title, Description, Image, and Specification are required');
  //     }
  // };

  const handleCreateRawMain = async () => {
    const buttonList = [];
    buttonNames.forEach((name, index) => {
      buttonList.push({
        buttonName: name,
      });
    });

    const rawMainObj = {
      title: title,
      desc: desc,
      image: selectedImage,
      specification: selectedSpecification,
      purpose: purpose,

      button: buttonList,
    };

    try {
      const response = await axios.post(
        "/api/rawMains/addRawMain",
        rawMainObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setRawMains([...rawMains, response.data]);
      resetForm();
    } catch (error) {
      console.error("Error creating rawMain:", error);
    }

    console.log(" rawMainObj", rawMainObj);
  };

  const resetForm = () => {
    setTitle("");
    setDesc("");
    setPurpose("");
    setButtonNames([""]);
    setSelectedImage(null);
    setSelectedSpecification(null);
    setCurrentIndex(null);
    setError("");
  };

  const handleButtonNameChange = (index, value) => {
    const updatedButtonNames = [...buttonNames];
    updatedButtonNames[index] = value;
    setButtonNames(updatedButtonNames);
  };

  const addButtonNameField = () => {
    setButtonNames([...buttonNames, ""]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Raw Material Management</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          placeholder="Purpose (Optional)"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        {buttonNames.map((name, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Button Name ${index + 1}`}
            value={name}
            onChange={(e) => handleButtonNameChange(index, e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        ))}
        <button
          onClick={addButtonNameField}
          className="bg-gray-500 text-white p-2 rounded mb-2"
        >
          Add Button
        </button>
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="file"
          onChange={handleSpecificationChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        {error && <p className="text-red-500">{error}</p>}
        {currentIndex === null ? (
          <button
            onClick={handleCreateRawMain}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Create
          </button>
        ) : (
          <button
            onClick={handleUpdateRawMain}
            className="bg-green-500 text-white p-2 rounded"
          >
            Update
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rawMains.map((rawMain, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded">
            <img
              src={`/${rawMain.image}`}
              alt="Raw Material"
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{rawMain.title}</h2>
            <p className="mb-2">{rawMain.desc}</p>
            <p className="mb-2">{rawMain.purpose}</p>
            {rawMain.buttonNames && rawMain.buttonNames.length > 0 ? (
              rawMain.buttonNames.map((name, i) => (
                <p key={i} className="mb-2">
                  {name}
                </p>
              ))
            ) : (
              <p className="mb-2">No button names available</p>
            )}
            <img
              src={`/${rawMain.specification}`}
              alt="Specification"
              className="w-full h-48 object-cover mb-4"
            />
            <button
              onClick={() => handleEditRawMain(index)}
              className="text-blue-500 mr-2"
            >
              <AiOutlineEdit />
            </button>
            <button
              onClick={() => handleDeleteRawMain(index)}
              className="text-red-500"
            >
              <MdOutlineDeleteForever />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RawMaterial;
