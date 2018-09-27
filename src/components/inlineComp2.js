import React from "react";

const styles = {
  container: { width: 500, height: 200, backgroundColor: "#0CC" },
  img: { width: 50, height: 50 },
  h2: { color: "#FDE" }
};

const Comp2 = () => {
  return (
    <div style={styles.container}>
      <img style={styles.img} src="./logo.png" />
      <h2 style={styles.img}> {this.props.name} </h2>
    </div>
  );
};

export default Comp2;
