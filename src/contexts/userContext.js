import React, { createContext, useState } from "react";

export const UserContext = createContext();
export const UpdateUserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState("Rio Yasui");
  const [location, setLocation] = useState("Kandersteg");

  return (
    <UserContext.Provider value={{ name, location }}>
      <UpdateUserContext.Provider value={{ setName, setLocation }}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;
