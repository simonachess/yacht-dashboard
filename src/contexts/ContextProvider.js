import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#002149');
  const [accenttColor, setAccentColor] = useState('#F36D45');
  const [activeMenu, setActiveMenu] = useState(true);

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentColor, activeMenu, screenSize, setScreenSize, setActiveMenu, setCurrentColor, setColor, accenttColor, setAccentColor }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
