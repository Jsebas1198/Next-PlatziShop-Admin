import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);

  async function fetchdata() {
    const response = await axios.get(endPoint);
    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return data;
};

export default useFetch;
