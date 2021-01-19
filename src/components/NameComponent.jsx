import React, { useContext } from "react";
import { UserContext } from "/src/contexts/userContext.js";

// This component displays name from Context
const RandomComponent = () => {
  const user = useContext(UserContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        {/* Pass name from context here */}
        <strong>Name</strong>: {user.name}
      </h2>
    </div>
  );
};

export default RandomComponent;
