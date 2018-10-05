import React from "react";

import Section from "./Section";
import Footer from "./Footer";
import Header from "./Header";

import DefaultStyles from "../defaultStyles/styles";
import DefaultClasses from "../defaultStyles/class";

const HybridDemo = () => {
  const mynav = {
    ...DefaultClasses.nav,
    backgroundColor: DefaultStyles.colors.error
  };

  function merge() {
    let res = {};
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i]) {
        res = { ...res, ...arguments[i] };
      }
    }
    return res;
  }

  return (
    <div>
      <Header theme={DefaultClasses.header}> Style Encapsulation </Header>
      <ul style={mynav}>
        <li style={DefaultClasses.li}>home</li>
        <li style={merge(DefaultClasses.li, DefaultClasses.liActive)}>about</li>
        <li style={DefaultClasses.li}>contact us</li>
      </ul>
      <div>
        <Section style={DefaultClasses.section} />
        <Section style={DefaultClasses.section} />
        <Section style={DefaultClasses.section} />
      </div>
      <Footer theme={DefaultClasses.footer} />
    </div>
  );
};

export default HybridDemo;
