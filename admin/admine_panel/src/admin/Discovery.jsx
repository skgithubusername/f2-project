













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdOutlineDeleteForever } from "react-icons/md";

// const Discovery = () => {
//     const [title, setTitle] = useState('');
//     const [desc, setDesc] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(null);
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [images, setImages] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         fetchImages();
//     }, []);

//     const fetchImages = async () => {
//         try {
//             const response = await axios.get('/api/discoverys/allDiscoverys');
//             setImages(response.data);
//         } catch (error) {
//             console.error('Error fetching images:', error);
//         }
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setSelectedFile(file);
//         }
//     };

//     const handleDeleteImage = async (index) => {
//         const image = images[index];
//         try {
//             await axios.delete(`/api/discoverys/${image.id}`);
//             setImages(images.filter((_, i) => i !== index));
//         } catch (error) {
//             console.error('Error deleting image:', error);
//         }
//     };

//     const handleEditImage = (index) => {
//         const image = images[index];
//         setTitle(image.title);
//         setDesc(image.desc);
//         setCurrentIndex(index);
//     };

//     const handleUpdateImage = async () => {
//         if (currentIndex !== null) {
//             const imageToUpdate = images[currentIndex];

//             const formData = new FormData();
//             formData.append('title', title);
//             formData.append('desc', desc);
//             if (selectedFile) {
//                 formData.append('image', selectedFile);
//             }

//             const url = `/api/discoverys/${imageToUpdate.id}`;

//             try {
//                 const response = await axios.put(url, formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 });

//                 setImages(images.map((image, index) => (index === currentIndex ? response.data : image)));
//                 resetForm();
//             } catch (error) {
//                 console.error('Error updating image:', error);
//                 if (error.response) {
//                     console.error('Response data:', error.response.data);
//                 }
//             }
//         }
//     };

//     const handleCreateImage = async () => {
//         if (title && desc && selectedFile) {
//             const formData = new FormData();
//             formData.append('image', selectedFile);
//             formData.append('title', title);
//             formData.append('desc', desc);

//             try {
//                 const response = await axios.post('/api/discoverys/addDiscovery', formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 });
//                 setImages([...images, response.data]);
//                 resetForm();
//             } catch (error) {
//                 console.error('Error creating image:', error);
//             }
//         } else {
//             setError('Title, description, and image are required');
//         }
//     };

//     const resetForm = () => {
//         setTitle('');
//         setDesc('');
//         setSelectedFile(null);
//         setCurrentIndex(null);
//         setError('');
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Image Upload</h1>
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
//                 <input type="file" onChange={handleImageChange} className="mb-2" />
//                 <button 
//                     onClick={currentIndex === null ? handleCreateImage : handleUpdateImage}
//                     className="bg-blue-500 text-white p-2 rounded"
//                 >
//                     {currentIndex === null ? 'Add' : 'Update'}
//                 </button>
//                 {error && <p className="text-red-500 mt-2">{error}</p>}
//             </div>
//             <div className="lg:grid lg:grid-cols-1 gap-4 flex flex-col">
//                 {images.map((image, index) => (
//                     <div key={image.id} className="border p-4 rounded shadow mb-4 overflow-hidden">
//                         <div className='w-full h-[300px] mb-2'>
//                             <img src={`/${image.image}`} alt={image.title} className="w-full h-full object-cover" />
//                         </div>
//                         <h2 className="text-lg font-semibold truncate">{image.title}</h2>
//                         <p className="mb-2 break-words">{image.desc}</p>
//                         <div className="flex space-x-2">
//                             <button 
//                                 onClick={() => handleEditImage(index)} 
//                                 className="flex items-center justify-center text-yellow-500 p-2"
//                             >
//                                 <AiOutlineEdit />
//                             </button>
//                             <button 
//                                 onClick={() => handleDeleteImage(index)} 
//                                 className="flex items-center justify-center text-red-500 p-2"
//                             >
//                                 <MdOutlineDeleteForever />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Discovery;






























































import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";

const Discovery = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [currentIndex, setCurrentIndex] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('/api/discoverys/allDiscoverys');
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleDeleteImage = async (index) => {
        const image = images[index];
        try {
            await axios.delete(`/api/discoverys/${image.id}`);
            setImages(images.filter((_, i) => i !== index));
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const handleEditImage = (index) => {
        const image = images[index];
        setTitle(image.title);
        setDesc(image.desc);
        setCurrentIndex(index);
    };

    const handleUpdateImage = async () => {
        if (currentIndex !== null) {
            const imageToUpdate = images[currentIndex];

            const formData = new FormData();
            formData.append('title', title);
            formData.append('desc', desc);
            if (selectedFile) {
                formData.append('image', selectedFile);
            }

            const url = `/api/discoverys/${imageToUpdate.id}`;

            try {
                const response = await axios.put(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                setImages(images.map((image, index) => (index === currentIndex ? response.data : image)));
                resetForm();
            } catch (error) {
                console.error('Error updating image:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                }
            }
        }
    };

    const handleCreateImage = async () => {
        if (title && desc && selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('title', title);
            formData.append('desc', desc);

            try {
                const response = await axios.post('/api/discoverys/addDiscovery', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setImages([...images, response.data]);
                resetForm();
            } catch (error) {
                console.error('Error creating image:', error);
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
            <h1 className="text-3xl font-bold mb-6 text-center">Discovery Image Upload</h1>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4">{currentIndex === null ? 'Add New Image' : 'Edit Image'}</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded mb-4"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded mb-4"
                />
                <input type="file" onChange={handleImageChange} className="mb-4" />
                <button 
                    onClick={currentIndex === null ? handleCreateImage : handleUpdateImage}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    {currentIndex === null ? 'Add' : 'Update'}
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <div key={image.id} className="border p-4 rounded-lg shadow-md overflow-hidden bg-white">
                        <div className='w-full h-64 mb-4'>
                            <img src={`/${image.image}`} alt={image.title} className="w-full h-full object-cover rounded-md" />
                        </div>
                        <h2 className="text-lg font-semibold truncate mb-2">{image.title}</h2>
                        <p className="text-gray-600 mb-4">{image.desc}</p>
                        <div className="flex space-x-4 justify-center">
                            <button 
                                onClick={() => handleEditImage(index)} 
                                className="flex items-center justify-center text-yellow-500 hover:text-yellow-700 p-2"
                            >
                                <AiOutlineEdit size={24} />
                            </button>
                            <button 
                                onClick={() => handleDeleteImage(index)} 
                                className="flex items-center justify-center text-red-500 hover:text-red-700 p-2"
                            >
                                <MdOutlineDeleteForever size={24} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Discovery;
