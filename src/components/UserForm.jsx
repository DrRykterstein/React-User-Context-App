import React, { useContext } from "react";
import { UpdateUserContext } from "/src/contexts/userContext.js";

const Form = () => {
  const updateUser = useContext(UpdateUserContext);
  const { setName, setLocation } = updateUser;

  const formatName = (e) => {
    const inputValue = e.target.value;
    inputValue === "" ? setName("Rio Yasui") : setName(inputValue);
  };

  const formatLocation = (e) => {
    const inputValue = e.target.value;
    inputValue === "" ? setLocation("Tokyo") : setLocation(inputValue);
  };

  return (
    <div className="user-form">
      {/* Change user's name in context */}
      <div className="input-item">
        <label className="label">Update Name: </label>
        <input className="input" onChange={(e) => formatName(e)} />
      </div>

      {/* Change user's location in context */}
      <div className="input-item">
        <label className="label">Update Location: </label>
        <input className="input" onChange={(e) => formatLocation(e)} />
      </div>
    </div>
  );
};

export default Form;
