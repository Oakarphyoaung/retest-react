import React from "react";
import { memo } from "react";

const Content = ({ user1, user2 }) => {
  console.log("component rendered...in Content");
  return (
    <div>
      <h1>Name of {user1}</h1>
      <h1>Name of {user2}</h1>
    </div>
  );
};

export default memo(Content);
