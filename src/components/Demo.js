import React, { Component } from "react";

import DefaultStyles from "../defaultStyles/styles";
import DefaultClasses from "../defaultStyles/class";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("default nav", DefaultClasses.nav);
    const mynav = {
      ...DefaultClasses.nav,
      backgroundColor: DefaultStyles.colors.error
    };
    console.log("new nav", mynav);
    return (
      <div>
        <div style={DefaultClasses.header}>Style Encapsulation</div>
        <div style={mynav}>
          <ul>
            <li style={DefaultClasses.li}>home</li>
            <li style={{ ...DefaultClasses.li, ...DefaultClasses.liActive }}>
              about
            </li>
            <li className="item-li" style={DefaultClasses.li}>
              contact us
            </li>
          </ul>
        </div>
        <div style={DefaultClasses.footer}>copyrights 2018</div>
      </div>
    );
  }
}

export default Demo;
