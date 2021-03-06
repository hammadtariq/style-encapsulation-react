import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
`;

const Header = styled.div`
  font-size: 16px;
  background-color: #7b6092;
  height: 20px;
  padding: 10px;
  color: #fff;
  text-align: "center";
`;

const List = styled.ul`
  font-weight: bold;
  background-color: #b9dbd5;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ListItem = styled.li`
  list-style-type: none;
  display: inline;
  padding: 20px;
  text-transform: capitalize;
  &:hover {
    color: yellow;
  }
`;

const Section = styled.p`
  text-align: justify;
  padding: 20px;
  margin: 20px;
`;

const Footer = styled.div`
  font-size: 14px;
  background-color: #93bdb5;
  height: 20px;
  padding: 10px;
`;

const StyledComponentDemo1 = () => {
  return (
    <Wrapper>
      <Header>Style Encapsulation</Header>
      <List>
        <ListItem>home</ListItem>
        <ListItem>about</ListItem>
        <ListItem>contact us</ListItem>
      </List>
      <Section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae
        architecto provident, cupiditate, repellendus voluptates doloribus
        corporis at voluptatum excepturi optio? Quam laboriosam quas rerum
        repudiandae nihil a dicta fugiat? Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Aut doloremque asperiores, cumque rem
        voluptatem velit distinctio ipsum deleniti corrupti esse. Magnam optio
        atque dignissimos est labore ab eos, eius ipsum! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Facilis consequatur ad, eius dolore
        nesciunt cumque quia, eum omnis rem voluptates, dicta quam? Fugiat id
        natus delectus sed sit atque molestiae.
      </Section>
      <Section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae
        architecto provident, cupiditate, repellendus voluptates doloribus
        corporis at voluptatum excepturi optio? Quam laboriosam quas rerum
        repudiandae nihil a dicta fugiat? Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Aut doloremque asperiores, cumque rem
        voluptatem velit distinctio ipsum deleniti corrupti esse. Magnam optio
        atque dignissimos est labore ab eos, eius ipsum! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Facilis consequatur ad, eius dolore
        nesciunt cumque quia, eum omnis rem voluptates, dicta quam? Fugiat id
        natus delectus sed sit atque molestiae.
      </Section>
      <Section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam beatae
        architecto provident, cupiditate, repellendus voluptates doloribus
        corporis at voluptatum excepturi optio? Quam laboriosam quas rerum
        repudiandae nihil a dicta fugiat? Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Aut doloremque asperiores, cumque rem
        voluptatem velit distinctio ipsum deleniti corrupti esse. Magnam optio
        atque dignissimos est labore ab eos, eius ipsum! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Facilis consequatur ad, eius dolore
        nesciunt cumque quia, eum omnis rem voluptates, dicta quam? Fugiat id
        natus delectus sed sit atque molestiae.
      </Section>

      <Footer>copyrights 2018</Footer>
    </Wrapper>
  );
};

export default StyledComponentDemo1;
