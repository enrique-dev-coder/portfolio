import { createContext, useContext, useState } from 'react';

export const SiteContext = createContext();

export const useProvider = () => useContext(SiteContext);

export const ContextProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  return (
    <>
      <SiteContext.Provider
        value={{
          dark,
          setDark,
        }}
      >
        {children}
      </SiteContext.Provider>
    </>
  );
};
