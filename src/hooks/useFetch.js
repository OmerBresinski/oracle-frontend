import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (endpoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/${endpoint}`);
      setData(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  return { data };
};
