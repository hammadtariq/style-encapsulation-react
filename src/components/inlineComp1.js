import React from "react";

const Comp1 = () => {
  return (
    <div style={{ width: 500, height: 200, backgroundColor: "#0CC" }}>
      <img style={{ width: 50, height: 50 }} src="./logo.png" />
      <h2 style={{ color: "#FDE" }}> {this.props.name} </h2>
    </div>
  );
};

export default Comp1;
