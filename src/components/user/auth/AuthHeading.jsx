import React from "react";

export const AuthHeading = ({ mainHeading, subHeading }) => {
  return (
    <div className="app_user_heading">
      <h2>{mainHeading}</h2>
      <p>{subHeading}</p>
    </div>
  );
};
