import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
const SaveButton =({ className, onClick, children }) => (
  <button
    onClick={onClick}
    className={`btn btn-success input-lg`}
    style={{"margin-top:60px;"}}
  >
    {children}
  </button>
);

export default SaveButton;
