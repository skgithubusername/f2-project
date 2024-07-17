// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdOutlineDeleteForever } from "react-icons/md";

// const Manufacture = () => {
//     const [title, setTitle] = useState('');
//     const [desc, setDesc] = useState('');
//     const [purpose, setPurpose] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(null);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [selectedSpecification, setSelectedSpecification] = useState(null);
//     const [manufactureMains, setManufactureMains] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         fetchManufactureMains();
//     }, []);

//     const fetchManufactureMains = async () => {
//         try {
//             const response = await axios.get('/api/manufactureMains/allManufactureMains');
//             setManufactureMains(response.data);
//         } catch (error) {
//             console.error('Error fetching manufactureMains:', error);
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

//     const handleDeleteManufactureMain = async (index) => {
//         const manufactureMain = manufactureMains[index];
//         try {
//             await axios.delete(`/api/manufactureMains/${manufactureMain.id}`);
//             setManufactureMains(manufactureMains.filter((_, i) => i !== index));
//         } catch (error) {
//             console.error('Error deleting manufactureMain:', error);
//         }
//     };

//     const handleEditManufactureMain = (index) => {
//         const manufactureMain = manufactureMains[index];
//         setTitle(manufactureMain.title);
//         setDesc(manufactureMain.desc);
//         setPurpose(manufactureMain.purpose);
//         setCurrentIndex(index);
//     };

//     const handleUpdateManufactureMain = async () => {
//         if (currentIndex !== null) {
//             const manufactureMainToUpdate = manufactureMains[currentIndex];

//             const formData = new FormData();
//             formData.append('title', title);
//             formData.append('desc', desc);
//             formData.append('purpose', purpose);
//             if (selectedImage) {
//                 formData.append('image', selectedImage);
//             }
//             if (selectedSpecification) {
//                 formData.append('specification', selectedSpecification);
//             }

//             const url = `/api/manufactureMains/${manufactureMainToUpdate.id}`;

//             try {
//                 const response = await axios.put(url, formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 });

//                 setManufactureMains(manufactureMains.map((manufactureMain, index) => (index === currentIndex ? response.data : manufactureMain)));
//                 resetForm();
//             } catch (error) {
//                 console.error('Error updating manufactureMain:', error);
//             }
//         }
//     };

//     const handleCreateManufactureMain = async () => {
//         if (title && desc && purpose && selectedImage && selectedSpecification) {
//             const formData = new FormData();
//             formData.append('image', selectedImage);
//             formData.append('specification', selectedSpecification);
//             formData.append('title', title);
//             formData.append('desc', desc);
//             formData.append('purpose', purpose);

//             try {
//                 const response = await axios.post('/api/manufactureMains/addManufactureMain', formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 });
//                 setManufactureMains([...manufactureMains, response.data]);
//                 resetForm();
//             } catch (error) {
//                 console.error('Error creating manufactureMain:', error);
//             }
//         } else {
//             setError('All fields are required');
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
//             <h1 className="text-2xl font-bold mb-4">Manufacture Management</h1>
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
//                     placeholder="Purpose"
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
//                         onClick={handleCreateManufactureMain}
//                         className="bg-blue-500 text-white p-2 rounded"
//                     >
//                         Create
//                     </button>
//                 ) : (
//                     <button
//                         onClick={handleUpdateManufactureMain}
//                         className="bg-green-500 text-white p-2 rounded"
//                     >
//                         Update
//                     </button>
//                 )}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {manufactureMains.map((manufactureMain, index) => (
//                     <div key={index} className="p-4 border border-gray-300 rounded">
//                         <img src={`/${manufactureMain.image}`} alt="Manufacture" className="w-full h-48 object-cover mb-4" />
//                         <h2 className="text-xl font-bold mb-2">{manufactureMain.title}</h2>
//                         <p className="mb-2">{manufactureMain.desc}</p>
//                         <p className="mb-2">{manufactureMain.purpose}</p>
//                         <img src={`/${manufactureMain.specification}`} alt="Specification" className="w-full h-48 object-cover mb-4" />
//                         <button
//                             onClick={() => handleEditManufactureMain(index)}
//                             className="text-blue-500 mr-2"
//                         >
//                             <AiOutlineEdit />
//                         </button>
//                         <button
//                             onClick={() => handleDeleteManufactureMain(index)}
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

// export default Manufacture;










































import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";

const Manufacture = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [purpose, setPurpose] = useState('');
    const [currentIndex, setCurrentIndex] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedSpecification, setSelectedSpecification] = useState(null);
    const [manufactureMains, setManufactureMains] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchManufactureMains();
    }, []);

    const fetchManufactureMains = async () => {
        try {
            const response = await axios.get('/api/manufactureMains/allManufactureMains');
            setManufactureMains(response.data);
        } catch (error) {
            console.error('Error fetching manufactureMains:', error);
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

    const handleDeleteManufactureMain = async (index) => {
        const manufactureMain = manufactureMains[index];
        try {
            await axios.delete(`/api/manufactureMains/${manufactureMain.id}`);
            setManufactureMains(manufactureMains.filter((_, i) => i !== index));
        } catch (error) {
            console.error('Error deleting manufactureMain:', error);
        }
    };

    const handleEditManufactureMain = (index) => {
        const manufactureMain = manufactureMains[index];
        setTitle(manufactureMain.title);
        setDesc(manufactureMain.desc);
        setPurpose(manufactureMain.purpose);
        setCurrentIndex(index);
    };

    const handleUpdateManufactureMain = async () => {
        if (currentIndex !== null) {
            const manufactureMainToUpdate = manufactureMains[currentIndex];
    
            const formData = new FormData();
            formData.append('title', title);
            formData.append('desc', desc);
            if (purpose) {
                formData.append('purpose', purpose);
            }
            if (selectedImage) {
                formData.append('image', selectedImage);
            }
            if (selectedSpecification) {
                formData.append('specification', selectedSpecification);
            }
    
            const url = `/api/manufactureMains/${manufactureMainToUpdate.id}`;
    
            try {
                console.log('FormData before sending:', Array.from(formData.entries()));
                const response = await axios.put(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
    
                console.log('Update response:', response.data);
                setManufactureMains(manufactureMains.map((manufactureMain, index) => (index === currentIndex ? response.data : manufactureMain)));
                resetForm();
            } catch (error) {
                console.error('Error updating manufactureMain:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                }
            }
        }
    };
    

    const handleCreateManufactureMain = async () => {
        if (title && desc && selectedImage && selectedSpecification) {
            const formData = new FormData();
            formData.append('image', selectedImage);
            formData.append('specification', selectedSpecification);
            formData.append('title', title);
            formData.append('desc', desc);
            if (purpose) {
                formData.append('purpose', purpose);
            }

            try {
                const response = await axios.post('/api/manufactureMains/addManufactureMain', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setManufactureMains([...manufactureMains, response.data]);
                resetForm();
            } catch (error) {
                console.error('Error creating manufactureMain:', error);
            }
        } else {
            setError('All fields except purpose are required');
        }
    };

    const resetForm = () => {
        setTitle('');
        setDesc('');
        setPurpose('');
        setSelectedImage(null);
        setSelectedSpecification(null);
        setCurrentIndex(null);
        setError('');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Manufacture Management</h1>
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
                        onClick={handleCreateManufactureMain}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Create
                    </button>
                ) : (
                    <button
                        onClick={handleUpdateManufactureMain}
                        className="bg-green-500 text-white p-2 rounded"
                    >
                        Update
                    </button>
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {manufactureMains.map((manufactureMain, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded">
                        <img src={`/${manufactureMain.image}`} alt="Manufacture" className="w-full h-48 object-cover mb-4" />
                        <h2 className="text-xl font-bold mb-2">{manufactureMain.title}</h2>
                        <p className="mb-2">{manufactureMain.desc}</p>
                        <p className="mb-2">{manufactureMain.purpose}</p>
                        <img src={`/${manufactureMain.specification}`} alt="Specification" className="w-full h-48 object-cover mb-4" />
                        <button
                            onClick={() => handleEditManufactureMain(index)}
                            className="text-blue-500 mr-2"
                        >
                            <AiOutlineEdit />
                        </button>
                        <button
                            onClick={() => handleDeleteManufactureMain(index)}
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

export default Manufacture;
