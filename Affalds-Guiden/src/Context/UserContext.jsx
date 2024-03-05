import { createContext, useState } from "react";

// Taget fra tidligere opgave som Kasper har lavet

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userData, setUserData] = useState();

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </UserContext.Provider>
  );
};
