import React, { createContext, useState, useContext } from 'react';

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState({
    cityName: '',
    cityProvince: '',
  });

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCityContext = () => {
  return useContext(CityContext);
};
