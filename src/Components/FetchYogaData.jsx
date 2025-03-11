import React from 'react';
import UseFetch from './UseFetch';
import './FetchYogaData.css';

const FetchYogaData = () => {
  const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');

  console.log("Fetched Data:", data);

  return (
    <ul className='list_data_main'>
      {data && Array.isArray(data) ? (
        data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))
      ) : (
        <li>Loading or No Data Available</li>
      )}
    </ul>
  );
}

export default FetchYogaData;