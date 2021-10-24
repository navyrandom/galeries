import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Icon from "@material-tailwind/react/Icon";
import DescriptionIcon from "@material-ui/icons/Description";
import NewProject from "../fonctionnalities/NewProject";

export default function BarNav({ onSubmit }) {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color='yellow' navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand color="black">Nha Vy VO DOAN</NavbarBrand>
          <NavbarToggler
            color="black"
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple=""
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav leftSide>
            <NavLink href="/portfolio" ripple="">
              <DescriptionIcon />
              Portfolio
            </NavLink>
            <NavLink href="/" ripple="">
              <Icon name="account_circle" size="xl" color='black'/>
              Presentation
            </NavLink>
          </Nav>

          <NewProject />
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
