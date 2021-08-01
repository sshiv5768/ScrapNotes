import React from "react";
import { Nav, Anchor } from "grommet";

export default class NavBar extends React.Component {
  render() {
    return (
      <>
        <Nav direction="row" background="brand" pad="medium">
          <Anchor href="/" label="Home" />
          <Anchor href="/" label="About" />
          <Anchor href="/" label="Contact" />
        </Nav>
      </>
    );
  }
}
