import React, { memo } from "react";

function User({ userName, email }) {
  console.log("component rendered...in User");
  return (
    <div>
      <h1>This is from User Component</h1>
      <h1>User name is --{userName}</h1>
      <h1>email is --{email}</h1>
    </div>
  );
}
// a memo is a higher-order component that is used to optimize the rendering performance of functional components by preventing unnecessary re-renders.
export default memo(User);
