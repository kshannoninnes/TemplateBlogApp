'use client'

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';

const Createblog = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  const [data, setData] = useState<any[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("myData") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('myData', JSON.stringify(data));
    }
  }, [data]);

  const addData = () => {
    const currentDate = new Date().toLocaleDateString();
    const newData = {
      id: data.length + 1,
      author,
      title,
      description,
      imageUrl,
      date: currentDate
    };

    setData(prev => [...prev, newData]);
    setAuthor('');
    setTitle('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <div>
      <Navbar />
      <div className="container bg-light" style={{ marginTop: '5rem' }}>
        <div className="row">
          <div className="col">
            <input
              className="form-control mb-2"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="form-control mb-2"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />

            <button onClick={addData} className="btn btn-primary mb-2">
              Add Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createblog;