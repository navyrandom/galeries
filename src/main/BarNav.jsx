import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DescriptionIcon from "@material-ui/icons/Description";
import NewProject from "../fonctionnalities/NewProject";

export default function BarNav({ onSubmit }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar color="lightBlue">
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>MÂY Studio</NavbarBrand>
          <NavbarToggler
            color="white"
            onClick={() => setOpenMenu(!openMenu)}
            ripple="light"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openMenu}>
          <Nav>
            <NavLink href="/">
              <AccountCircle />
              Presentation
            </NavLink>

            <NavLink href="/portfolio">
              <DescriptionIcon />
              Galerie
            </NavLink>

            <NavLink>
              <AddCircleOutlineIcon />
              <NewProject />
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
