import React from "react";

const PageWithId = ({ params }) => {
  console.log("p", params);
  return <div>{params.id}</div>;
};

export default PageWithId;
