import React, { Component } from "react";

import DefaultStyles from "../defaultStyles/styles";
import DefaultClasses from "../defaultStyles/class";

class HybridDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const mynav = {
      ...DefaultClasses.nav,
      backgroundColor: DefaultStyles.colors.error
    };
    return (
      <div>
        <div style={DefaultClasses.header}>Style Encapsulation</div>
        <ul style={mynav}>
          <li style={DefaultClasses.li}>home</li>
          <li style={{ ...DefaultClasses.li, ...DefaultClasses.liActive }}>
            about
          </li>
          <li className="item-li" style={DefaultClasses.li}>
            contact us
          </li>
        </ul>
        <div>
          <p style={DefaultClasses.section}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae
            architecto provident, cupiditate, repellendus voluptates doloribus
            corporis at voluptatum excepturi optio? Quam laboriosam quas rerum
            repudiandae nihil a dicta fugiat? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Aut doloremque asperiores, cumque rem
            voluptatem velit distinctio ipsum deleniti corrupti esse. Magnam
            optio atque dignissimos est labore ab eos, eius ipsum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Facilis consequatur ad,
            eius dolore nesciunt cumque quia, eum omnis rem voluptates, dicta
            quam? Fugiat id natus delectus sed sit atque molestiae.
          </p>
          <p style={DefaultClasses.section}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae
            architecto provident, cupiditate, repellendus voluptates doloribus
            corporis at voluptatum excepturi optio? Quam laboriosam quas rerum
            repudiandae nihil a dicta fugiat? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Aut doloremque asperiores, cumque rem
            voluptatem velit distinctio ipsum deleniti corrupti esse. Magnam
            optio atque dignissimos est labore ab eos, eius ipsum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Facilis consequatur ad,
            eius dolore nesciunt cumque quia, eum omnis rem voluptates, dicta
            quam? Fugiat id natus delectus sed sit atque molestiae.
          </p>
          <p style={DefaultClasses.section}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae
            architecto provident, cupiditate, repellendus voluptates doloribus
            corporis at voluptatum excepturi optio? Quam laboriosam quas rerum
            repudiandae nihil a dicta fugiat? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Aut doloremque asperiores, cumque rem
            voluptatem velit distinctio ipsum deleniti corrupti esse. Magnam
            optio atque dignissimos est labore ab eos, eius ipsum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Facilis consequatur ad,
            eius dolore nesciunt cumque quia, eum omnis rem voluptates, dicta
            quam? Fugiat id natus delectus sed sit atque molestiae.
          </p>
        </div>
        <div style={DefaultClasses.footer}>copyrights 2018</div>
      </div>
    );
  }
}

export default HybridDemo;
