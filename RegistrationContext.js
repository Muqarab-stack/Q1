import React, { createContext, useState, useContext } from 'react';

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registration, setRegistration] = useState({
    registrationNumber: '',
    name: '',
  });

  return (
    <RegistrationContext.Provider value={{ registration, setRegistration }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistrationContext = () => {
  return useContext(RegistrationContext);
};
