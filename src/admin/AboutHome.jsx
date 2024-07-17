// AboutHome.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDeleteForever } from 'react-icons/md';

const AboutHome = () => {
    const [aboutHomes, setAboutHomes] = useState([]);
    const [form, setForm] = useState({ title: '', desc: '' });
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        fetchAboutHomes();
    }, []);

    const fetchAboutHomes = async () => {
        try {
            const response = await axios.get('/api/aboutHomes/allAboutHomes');
            setAboutHomes(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editing) {
            await axios.put(`/api/aboutHomes/${editing.id}`, form);
        } else {
            await axios.post('/api/aboutHomes/addAboutHome', form);
        }
        setForm({ title: '', desc: '' });
        setEditing(null);
        fetchAboutHomes();
    };

    const handleEdit = (aboutHome) => {
        setForm(aboutHome);
        setEditing(aboutHome);
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/aboutHomes/${id}`);
        fetchAboutHomes();
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">About Home</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="desc"
                        value={form.desc}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="px-8 py-2  bg-green-500 hover:bg-geen-700 shadow-md shadow-green-500 text-white rounded-md  "
                >
                    {editing ? 'Update' : 'Add'}
                </button>
            </form>
            <ul className="space-y-2">
                {aboutHomes.map((aboutHome) => (
                    <li
                        key={aboutHome.id}
                        className="p-4 bg-white rounded-md shadow-sm flex justify-between items-center"
                    >
                        <div>
                            <h2 className="text-lg font-semibold">{aboutHome.title}</h2>
                            <p className="text-gray-600">{aboutHome.desc}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button onClick={() => handleEdit(aboutHome)} className="text-blue-500 hover:text-blue-700">
                                <AiOutlineEdit size={24} />
                            </button>
                            <button onClick={() => handleDelete(aboutHome.id)} className="text-red-500 hover:text-red-700">
                                <MdOutlineDeleteForever size={24} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AboutHome;
