

// import React, { useState } from 'react';
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdOutlineDeleteForever } from "react-icons/md";

// const MachineryDetailsAdmin = ({ images, setImages }) => {
//   const [title, setTitle] = useState('');
//   const [subtitle, setSubtitle] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedFile(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = (index) => {
//     setImages(images.filter((_, i) => i !== index));
//   };

//   const handleEditImage = (index) => {
//     const image = images[index];
//     setTitle(image.title);
//     setSubtitle(image.subtitle);
//     setCurrentIndex(index);
//     setSelectedFile(image.src);
//   };

//   const handleUpdateImage = () => {
//     if (currentIndex !== null) {
//       const updatedImages = images.map((image, index) => {
//         if (index === currentIndex) {
//           return { ...image, title, subtitle, src: selectedFile };
//         }
//         return image;
//       });
//       setImages(updatedImages);
//       resetForm();
//     }
//   };

//   const handleCreateImage = () => {
//     if (title && subtitle) {
//       setImages(prevImages => [...prevImages, { src: selectedFile || '', title, subtitle }]);
//       resetForm();
//     }
//   };

//   const resetForm = () => {
//     setTitle('');
//     setSubtitle('');
//     setCurrentIndex(null);
//     setSelectedFile(null);
//   };

//   return (
//     <div className="container mx-auto mt-10">
//       <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
//         Title:
//       </label>
//       <textarea
//         id="title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded-lg"
//         rows="1"
//       />

//       <label htmlFor="subtitle" className="block text-gray-700 font-semibold mb-2">
//         Subtitle:
//       </label>
//       <textarea
//         id="subtitle"
//         value={subtitle}
//         onChange={(e) => setSubtitle(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded-lg"
//         rows="3"
//       />

//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//         className="mb-4 mt-4 py-2 px-4 rounded-full border-2 border-blue-400 text-blue-700 bg-blue-50 hover:bg-blue-100"
//       />

//       {currentIndex !== null ? (
//         <button onClick={handleUpdateImage} className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mb-4">
//           Update
//         </button>
//       ) : (
//         <button onClick={handleCreateImage} className="bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-lg mb-4">
//           Create
//         </button>
//       )}

//       <div className="flex flex-wrap justify-center">
//         {images.map((image, index) => (
//           <div key={index} className="relative bg-white m-4 p-4 lg:w-[1200px] w-[600px] sm:w-[300px] md:w-[800px] rounded-lg shadow-lg flex">
//             <div className="flex-none mr-4">
//               {image.src && (
//                 <img
//                   src={image.src}
//                   alt={`Uploaded ${index}`}
//                   className="w-32 h-32 object-cover rounded-lg"
//                 />
//               )}
//             </div>
//             <div className="flex-1">
//               <p className="text-lg font-bold mb-2">Title: {image.title}</p>
//               <p className="text-sm mb-4">Subtitle: {image.subtitle}</p>
//               <div className="flex space-x-2 absolute top-2 right-2">
//                 <button 
//                   onClick={() => handleDeleteImage(index)}
//                   className="text-red-500 flex items-center justify-center"
//                 >
//                   <MdOutlineDeleteForever className="w-6 h-6"/>
//                 </button>
//                 <button 
//                   onClick={() => handleEditImage(index)}
//                   className="text-yellow-500 flex items-center justify-center"
//                 >
//                   <AiOutlineEdit className="w-6 h-6" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MachineryDetailsAdmin;












import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";

const MaterialDetailsAdmin = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [currentIndex, setCurrentIndex] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [details, setDetails] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails = async () => {
        try {
            const response = await axios.get('/api/materialDetails/allMaterialDetails');
            setDetails(response.data);
        } catch (error) {
            console.error('Error fetching details:', error);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleDeleteDetail = async (index) => {
        const detail = details[index];
        try {
            await axios.delete(`/api/materialDetails/${detail.id}`);
            setDetails(details.filter((_, i) => i !== index));
        } catch (error) {
            console.error('Error deleting detail:', error);
        }
    };

    const handleEditDetail = (index) => {
        const detail = details[index];
        setTitle(detail.title);
        setDesc(detail.desc);
        setCurrentIndex(index);
    };

    const handleUpdateDetail = async () => {
        if (currentIndex !== null) {
            const detailToUpdate = details[currentIndex];

            const formData = new FormData();
            formData.append('title', title);
            formData.append('desc', desc);
            if (selectedFile) {
                formData.append('image', selectedFile);
            }

            const url = `/api/materialDetails/${detailToUpdate.id}`;

            try {
                const response = await axios.put(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                setDetails(details.map((detail, index) => (index === currentIndex ? response.data : detail)));
                resetForm();
            } catch (error) {
                console.error('Error updating detail:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                }
            }
        }
    };

    const handleCreateDetail = async () => {
        if (title && desc && selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('title', title);
            formData.append('desc', desc);

            try {
                const response = await axios.post('/api/materialDetails/addMaterialDetail', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setDetails([...details, response.data]);
                resetForm();
            } catch (error) {
                console.error('Error creating detail:', error);
            }
        } else {
            setError('Title, description, and image are required');
        }
    };

    const resetForm = () => {
        setTitle('');
        setDesc('');
        setSelectedFile(null);
        setCurrentIndex(null);
        setError('');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Material Details</h1>
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
                <input type="file" onChange={handleFileChange} className="mb-2" />
                <button 
                    onClick={currentIndex === null ? handleCreateDetail : handleUpdateDetail}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    {currentIndex === null ? 'Add' : 'Update'}
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
            <div className="lg:grid lg:grid-cols-1 gap-4 flex flex-col">
                {details.map((detail, index) => (
                    <div key={detail.id} className="border p-4 rounded shadow mb-4 overflow-hidden">
                        <div className='w-full h-[300px] mb-2'>
                            <img src={`/${detail.image}`} alt={detail.title} className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-lg font-semibold truncate">{detail.title}</h2>
                        <p className="mb-2 break-words">{detail.desc}</p>
                        <div className="flex space-x-2">
                            <button 
                                onClick={() => handleEditDetail(index)} 
                                className="flex items-center justify-center text-yellow-500 p-2"
                            >
                                <AiOutlineEdit />
                            </button>
                            <button 
                                onClick={() => handleDeleteDetail(index)} 
                                className="flex items-center justify-center text-red-500 p-2"
                            >
                                <MdOutlineDeleteForever />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MaterialDetailsAdmin;



