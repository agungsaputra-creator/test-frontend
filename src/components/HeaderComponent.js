import React from "react";
import { Navbar, Container } from "react-bootstrap";

const HeaderComponent = () => {
  return (
    <Navbar className="header">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/assets/media/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <p className="pointer">Jual</p>
          </Navbar.Text>
          <Navbar.Text>
            <p className="ms-4 pointer">Beli</p>
          </Navbar.Text>
          <Navbar.Text>
            <p className="ms-4 pointer">Sewa</p>
          </Navbar.Text>
          <img src="/assets/media/wishlist-icon.svg" alt="icon" className="icon ms-3" />
          <img src="https://s3-ap-southeast-1.amazonaws.com/public.piintu.com/assets/piintu-portal/mobile/notification.svg" alt="icon" className="icon ms-4 pointer" />
          <button className="btn-auth ms-4 pointer">Login / Register</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
