// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

// const About = () => {
//     const [title, setTitle] = useState('');
//     const [desc, setDesc] = useState('');
//     const [subdesc, setSubdesc] = useState('');
//     const [abouts, setAbouts] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         fetchAbouts();
//     }, []);

//     const fetchAbouts = async () => {
//         try {
//             const response = await axios.get('/api/abouts/allAbouts');
//             setAbouts(response.data);
//         } catch (error) {
//             console.error('Error fetching abouts:', error);
//         }
//     };

//     const handleCreateAbout = async () => {
//         if (title && desc) {
//             const info = { title, desc, subdesc };
//             try {
//                 const response = await axios.post('/api/abouts/addAbout', info);
//                 setAbouts([...abouts, response.data]);
//                 resetForm();
//             } catch (error) {
//                 console.error('Error creating about:', error);
//                 setError('Failed to create about');
//             }
//         } else {
//             setError('Title and Description are required');
//         }
//     };

//     const handleEditAbout = (id) => {
//         const about = abouts.find(a => a.id === id);
//         if (about) {
//             setTitle(about.title);
//             setDesc(about.desc);
//             setSubdesc(about.subdesc || ''); // Ensure subdesc is initialized
//         }
//     };

//     const handleUpdateAbout = async (id) => {
//         const info = { title, desc, subdesc };
//         try {
//             const response = await axios.put(`/api/abouts/${id}`, info);
//             setAbouts(abouts.map(a => (a.id === id ? response.data : a)));
//             resetForm();
//         } catch (error) {
//             console.error('Error updating about:', error);
//             setError('Failed to update about');
//         }
//     };

//     const handleDeleteAbout = async (id) => {
//         try {
//             await axios.delete(`/api/abouts/${id}`);
//             setAbouts(abouts.filter(a => a.id !== id));
//         } catch (error) {
//             console.error('Error deleting about:', error);
//             setError('Failed to delete about');
//         }
//     };

//     const resetForm = () => {
//         setTitle('');
//         setDesc('');
//         setSubdesc('');
//         setError('');
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">About Management</h1>
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     placeholder="Title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 <textarea
//                     placeholder="Description"
//                     value={desc}
//                     onChange={(e) => setDesc(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 <textarea
//                     placeholder="Sub Description (Optional)"
//                     value={subdesc}
//                     onChange={(e) => setSubdesc(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded mb-2"
//                 />
//                 {error && <p className="text-red-500">{error}</p>}
//                 <button
//                     onClick={handleCreateAbout}
//                     className="bg-blue-500 text-white p-2 rounded mr-2"
//                 >
//                     Create
//                 </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {abouts.map((about) => (
//                     <div key={about.id} className="p-4 border border-gray-300 rounded">
//                         <h2 className="text-xl font-bold mb-2">{about.title}</h2>
//                         <p className="mb-2">{about.desc}</p>
//                         {about.subdesc && <p className="mb-2">{about.subdesc}</p>}
//                         <div className="flex">
//                             <button
//                                 onClick={() => handleEditAbout(about.id)}
//                                 className="text-blue-500 mr-2"
//                             >
//                                 <AiOutlineEdit />
//                             </button>
//                             <button
//                                 onClick={() => handleDeleteAbout(about.id)}
//                                 className="text-red-500"
//                             >
//                                 <AiOutlineDelete />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default About;
























import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const About = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [subdesc, setSubdesc] = useState('');
    const [abouts, setAbouts] = useState([]);
    const [error, setError] = useState('');
    const [currentId, setCurrentId] = useState(null); // Track current editing ID

    useEffect(() => {
        fetchAbouts();
    }, []);

    const fetchAbouts = async () => {
        try {
            const response = await axios.get('/api/abouts/allAbouts');
            setAbouts(response.data);
        } catch (error) {
            console.error('Error fetching abouts:', error);
        }
    };

    const handleCreateAbout = async () => {
        if (title && desc) {
            const info = { title, desc, subdesc };
            try {
                const response = await axios.post('/api/abouts/addAbout', info);
                setAbouts([...abouts, response.data]);
                resetForm();
            } catch (error) {
                console.error('Error creating about:', error);
                setError('Failed to create about');
            }
        } else {
            setError('Title and Description are required');
        }
    };

    const handleEditAbout = (id) => {
        const about = abouts.find(a => a.id === id);
        if (about) {
            setTitle(about.title);
            setDesc(about.desc);
            setSubdesc(about.subdesc || ''); // Ensure subdesc is initialized
            setCurrentId(id); // Set current editing ID
        }
    };

    const handleUpdateAbout = async () => {
        if (currentId) {
            const info = { title, desc, subdesc };
            try {
                const response = await axios.put(`/api/abouts/${currentId}`, info);
                setAbouts(abouts.map(a => (a.id === currentId ? response.data : a)));
                resetForm();
                setCurrentId(null); // Reset current editing ID after update
            } catch (error) {
                console.error('Error updating about:', error);
                setError('Failed to update about');
            }
        }
    };

    const handleDeleteAbout = async (id) => {
        try {
            await axios.delete(`/api/abouts/${id}`);
            setAbouts(abouts.filter(a => a.id !== id));
        } catch (error) {
            console.error('Error deleting about:', error);
            setError('Failed to delete about');
        }
    };

    const resetForm = () => {
        setTitle('');
        setDesc('');
        setSubdesc('');
        setError('');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">About Management</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <textarea
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <textarea
                    placeholder="Sub Description (Optional)"
                    value={subdesc}
                    onChange={(e) => setSubdesc(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                {error && <p className="text-red-500">{error}</p>}
                {currentId === null ? (
                    <button
                        onClick={handleCreateAbout}
                        className="bg-blue-500 text-white p-2 rounded mr-2 hover:bg-blue-600"
                    >
                        Create
                    </button>
                ) : (
                    <button
                        onClick={handleUpdateAbout}
                        className="bg-green-500 text-white p-2 rounded mr-2 hover:bg-green-600"
                    >
                        Update
                    </button>
                )}
                <button
                    onClick={resetForm}
                    className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
                >
                    Reset
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {abouts.map((about) => (
                    <div key={about.id} className="bg-white p-6 rounded-lg shadow-md w-full">
                        <h2 className="text-xl font-bold mb-2">{about.title}</h2>
                        <p className="mb-4">{about.desc}</p>
                        {about.subdesc && <p className="mb-4">{about.subdesc}</p>}
                        <div className="flex justify-end">
                            <button
                                onClick={() => handleEditAbout(about.id)}
                                className="text-blue-500 mr-2 hover:text-blue-600"
                            >
                                <AiOutlineEdit />
                            </button>
                            <button
                                onClick={() => handleDeleteAbout(about.id)}
                                className="text-red-500 hover:text-red-600"
                            >
                                <AiOutlineDelete />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
