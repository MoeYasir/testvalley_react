import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./collection.scss";

const Collection = () => {
  const [data, setData] = useState(null); // State to store the fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.testvalley.kr/collections", {
          params: {
            type: "SINGLE",
            viewType: "TILE"
          }
        });

        // Filter out items with type 'BUNDLE'
        const filteredData = res.data.items.filter(item => item.type !== 'BUNDLE');
        setData(filteredData); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetchData function when component mounts
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts

  return (
    <div className='collectionContainer'>
      {data ? (
        data.map((item, index) => (
          <div key={index} className='collectionItem'>
            <div className="item-content">
              {/* Render item title and subtitle */}
              <p className='item-title'>{item.title}</p>
              <p className='item-subtitle'>{item.subtitle}</p>
            </div>
            {/* Loop through media and render images */}
            <div className="media-container">
              {item.items.map((mediaItem, mediaIndex) => (
                <div key={mediaIndex} className="media-item">
                  {/* Accessing media array inside publication */}
                  {mediaItem.publication.media.map((media, index) => (
                    <div>
                    <img key={index} src={media.uri} alt='' />
                    {mediaItem.publication.priceInfo.couponDiscountRate && mediaItem.publication.priceInfo.couponDiscountPrice && (
  <p className="coupon-rate">
    <span style={{ color: 'red' }}>{mediaItem.publication.priceInfo.couponDiscountRate}%</span>
    {mediaItem.publication.priceInfo.couponDiscountPrice}
  </p>
)}

                    </div>
                  ))}
                  
                </div>
                

              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Collection;
