import React, { useEffect, useState } from 'react';

const Api = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
      try {
        const token = 'f7c8ea84eaa2ea31b601b3d1d1c60f4cb87c70fc974d8327d0c3a18dd5e4db356bd00d3675df85558c62c5bff7711757f91fc1e098a1067fa09efc0e4083f078f9c27a772ab29ac299a08559f1acbacde79ac78429bbe9164d2c5156b08ebbde917176ac1b59deb4c34bcba05013c07680a4ca3bbef825d6c2b9644b5ed83336';
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
  
        const url = 'https://study-material-v3sm.onrender.com/api/mis';
  
        const response = await fetch(url, { headers });
        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData)
          setData(responseData.data || []);
        } else {
          console.error('Request failed with status', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
      console.log(data);
    }, []);

  return (
    
    <div>
      
    </div>
  )
}

export default Api
