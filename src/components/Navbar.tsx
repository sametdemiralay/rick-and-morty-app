import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavComp: FC = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>Rick and Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Form.Control
            type='search'
            placeholder='Search'
            className='ms-auto me-2 w-50'
            aria-label='Search'
          />
          <Nav
            className='my-2 my-lg-0 d-flex align-items-center justify-content-center w-25'
            navbarScroll
          >
            <p className='m-0'>asd</p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComp;
