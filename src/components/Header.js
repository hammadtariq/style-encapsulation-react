import React from "react";

const Header = props => {
  return <div style={props.theme}>{props.children}</div>;
};

export default Header;
