import React, { createContext, useState } from "react";

import { getData } from "../utils/fetchData.js";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await getData();
    setData(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
