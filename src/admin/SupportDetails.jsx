// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SupportDetails = () => {
//     const [supports, setSupports] = useState([]);
//     const [newSupport, setNewSupport] = useState('');
//     const [editingSupportId, setEditingSupportId] = useState(null);
//     const [editedSupport, setEditedSupport] = useState('');

//     useEffect(() => {
//         fetchSupports();
//     }, []);

//     const fetchSupports = async () => {
//         try {
//             const response = await axios.get('/api/supports/allSupports');
//             setSupports(response.data);
//         } catch (error) {
//             console.error('Error fetching supports:', error);
//         }
//     };

//     const handleAddSupport = async () => {
//         try {
//             if (!newSupport.trim()) {
//                 alert('Title is required');
//                 return;
//             }
//             const response = await axios.post('/api/supports/addSupport', { title: newSupport });
//             setSupports([...supports, response.data]);
//             setNewSupport('');
//         } catch (error) {
//             console.error('Error adding support:', error);
//         }
//     };

//     const handleEditSupport = async (id) => {
//         try {
//             if (!editedSupport.trim()) {
//                 alert('Title is required');
//                 return;
//             }
//             const response = await axios.put(`/api/supports/${id}`, { title: editedSupport });
//             const updatedSupports = supports.map((support) =>
//                 support.id === id ? response.data : support
//             );
//             setSupports(updatedSupports);
//             setEditingSupportId(null);
//             setEditedSupport('');
//         } catch (error) {
//             console.error('Error editing support:', error);
//         }
//     };

//     const handleDeleteSupport = async (id) => {
//         try {
//             await axios.delete(`/api/supports/${id}`);
//             const updatedSupports = supports.filter((support) => support.id !== id);
//             setSupports(updatedSupports);
//         } catch (error) {
//             console.error('Error deleting support:', error);
//         }
//     };

//     const handleToggleEdit = (id, title) => {
//         setEditingSupportId(id);
//         setEditedSupport(title);
//     };

//     return (
//         <div>
//             <h2>Support Details</h2>
//             <div>
//                 <h3>Add Support</h3>
//                 <input
//                     type="text"
//                     value={newSupport}
//                     onChange={(e) => setNewSupport(e.target.value)}
//                     placeholder="Enter support title"
//                 />
//                 <button onClick={handleAddSupport}>Add</button>
//             </div>
//             <div>
//                 <h3>All Supports</h3>
//                 <ul>
//                     {supports.map((support) => (
//                         <li key={support.id}>
//                             {editingSupportId === support.id ? (
//                                 <>
//                                     <input
//                                         type="text"
//                                         value={editedSupport}
//                                         onChange={(e) => setEditedSupport(e.target.value)}
//                                         placeholder="Edit support title"
//                                     />
//                                     <button onClick={() => handleEditSupport(support.id)}>Save</button>
//                                     <button onClick={() => setEditingSupportId(null)}>Cancel</button>
//                                 </>
//                             ) : (
//                                 <>
//                                     {support.title}
//                                     <button onClick={() => handleToggleEdit(support.id, support.title)}>
//                                         Edit
//                                     </button>
//                                     <button onClick={() => handleDeleteSupport(support.id)}>Delete</button>
//                                 </>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default SupportDetails;




















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDeleteForever } from 'react-icons/md';

const SupportDetails = () => {
    const [supports, setSupports] = useState([]);
    const [newSupport, setNewSupport] = useState('');
    const [editingSupportId, setEditingSupportId] = useState(null);
    const [editedSupport, setEditedSupport] = useState('');

    useEffect(() => {
        fetchSupports();
    }, []);

    const fetchSupports = async () => {
        try {
            const response = await axios.get('/api/supports/allSupports');
            setSupports(response.data);
        } catch (error) {
            console.error('Error fetching supports:', error);
        }
    };

    const handleAddSupport = async () => {
        try {
            if (!newSupport.trim()) {
                alert('Title is required');
                return;
            }
            if (supports.length >= 6) {
                alert('Cannot add more than 6 supports');
                return;
            }
            const response = await axios.post('/api/supports/addSupport', { title: newSupport });
            setSupports([...supports, response.data]);
            setNewSupport('');
        } catch (error) {
            console.error('Error adding support:', error);
        }
    };

    const handleEditSupport = async (id) => {
        try {
            if (!editedSupport.trim()) {
                alert('Title is required');
                return;
            }
            const response = await axios.put(`/api/supports/${id}`, { title: editedSupport });
            const updatedSupports = supports.map((support) =>
                support.id === id ? response.data : support
            );
            setSupports(updatedSupports);
            setEditingSupportId(null);
            setEditedSupport('');
        } catch (error) {
            console.error('Error editing support:', error);
        }
    };

    const handleDeleteSupport = async (id) => {
        try {
            await axios.delete(`/api/supports/${id}`);
            const updatedSupports = supports.filter((support) => support.id !== id);
            setSupports(updatedSupports);
        } catch (error) {
            console.error('Error deleting support:', error);
        }
    };

    const handleToggleEdit = (id, title) => {
        setEditingSupportId(id);
        setEditedSupport(title);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Support Details</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Add Support</h3>
                <div className="flex">
                    <input
                        type="text"
                        value={newSupport}
                        onChange={(e) => setNewSupport(e.target.value)}
                        placeholder="Enter support title"
                        className="border border-gray-300 px-2 py-1 mr-2 rounded-md flex-1"
                    />
                    <button
                        onClick={handleAddSupport}
                        // className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                               className="px-8 py-2  bg-green-500 hover:bg-green-700 shadow-md shadow-green-500 text-white rounded-md  "
                        disabled={supports.length >= 6}
                    >
                        Add
                    </button>
                </div>
                {supports.length >= 6 && (
                    <p className="text-red-500 mt-2">You cannot add more than 6 supports.</p>
                )}
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">All Supports</h3>
                <ul className="divide-y divide-gray-300">
                    {supports.map((support) => (
                        <li key={support.id} className="py-2 flex items-center justify-between">
                            {editingSupportId === support.id ? (
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        value={editedSupport}
                                        onChange={(e) => setEditedSupport(e.target.value)}
                                        placeholder="Edit support title"
                                        className="border border-gray-300 px-2 py-1 mr-2 rounded-md flex-1"
                                    />
                                    <button
                                        onClick={() => handleEditSupport(support.id)}
                                        // className="bg-green-500 text-white px-4 py-1 rounded-md mr-2 hover:bg-green-600"
                                               className="px-8 py-1  ml-12 mx-4 bg-green-600 hover:bg-green-700 text-white rounded-md  "
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditingSupportId(null)}
                                        className="bg-gray-300 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <div className="flex-1">{support.title}</div>
                            )}
                            <div>
                                <button
                                    onClick={() => handleToggleEdit(support.id, support.title)}
                                    className=" text-yellow-500 px-4 py-1  mr-2 hover:text-yellow-600"
                                >
                               <AiOutlineEdit size={24} />
                                </button>
                                <button
                                    onClick={() => handleDeleteSupport(support.id)}
                                    className="text-red-500 px-4 py-1 rounded-md hover:text-red-600"
                                >
                                 <MdOutlineDeleteForever size={24} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SupportDetails;
