import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./shortcut.scss"

const Shortcut = () => {
  const [data, setData] = useState(null); // State to store the fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.testvalley.kr/main-shortcut/all");
        setData(res.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetchData function when component mounts
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts

  return (
    <div>
      {data ? (
        <div className='container'>
          {data.map((item, index) => (
            <div key={index} className='item'>
              <img src={item.imageUrl} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Shortcut;
