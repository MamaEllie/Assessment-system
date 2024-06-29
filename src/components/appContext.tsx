import React, { ReactElement, createContext, useState } from "react";

export const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: any) => {
  const [state, setState] = useState({
    score: null,
    recomendations: [],
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
