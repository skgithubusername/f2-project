import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";

const RawDetailsAdmin = () => {
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
            const response = await axios.get('/api/rawDetails/allRawDetails');
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
            await axios.delete(`/api/rawDetails/${detail.id}`);
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

            const url = `/api/rawDetails/${detailToUpdate.id}`;

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
                const response = await axios.post('/api/rawDetails/addRawDetail', formData, {
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
            <h1 className="text-2xl font-bold mb-4">Raw Details</h1>
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

export default RawDetailsAdmin;
