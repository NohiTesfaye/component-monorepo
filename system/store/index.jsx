import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [sharedMessage, setSharedMessage] = useState('Hello from global state!');
  const [globalCounter, setGlobalCounter] = useState(0);

  // You could add more state variables and update functions here

  return (
    <GlobalStateContext.Provider value={{ sharedMessage, setSharedMessage, globalCounter, setGlobalCounter }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext); 