import React, { createContext } from "react";
export const authDataContext = createContext();

function AuthContaxt({ children }) {
  let serverUrl = "http://127.0.0.1:8000";
  let value = {
    serverUrl,
  };
  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  );
}

export default AuthContaxt;
