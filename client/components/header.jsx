import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect className="color-nav" expand="md" sticky="top" >
        <Container fluid>
          <Navbar.Brand href="#" className="px-sm-5">Hope Care</Navbar.Brand>
          {/* see if I can put logo here ^ */}
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
          <Navbar.Offcanvas id="offcanvasNavbar-expand" aria-labelledby="offcanvasNavbar-expand" placement="end">
            <Offcanvas.Header className="mx-4 border-bot" closeButton>
              <Offcanvas.Title className="pt-2" id="offcanvasNavbar-expand">
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="px-4">
              <Nav className="justify-content-end flex-grow-1 pe-3" onSelect={(_, event) => { window.location.href = event.target.href; }} >
                <Button className="px-3 px-lg-3 nav-button" href="">714.724.8033</Button>
                <Nav.Link className="px-3 px-lg-3 menu-link" href="#">HOSPICE BASICS</Nav.Link>
                <Nav.Link className="px-3 px-lg-3 menu-link" href="#newInquiry">REFERRALS</Nav.Link>
                <Nav.Link className="px-3 px-lg-3 menu-link" href="#aboutUs">ABOUT US</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}
