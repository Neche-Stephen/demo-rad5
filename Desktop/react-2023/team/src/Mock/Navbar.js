import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Receipt Generator</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/create-receipt">Receipt Creation</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

// The `as={Link}` syntax in the Navbar component refers to the usage of the `Link` component from `react-router-dom` as a replacement for the standard HTML anchor (`<a>`) tag. 

// By using `as={Link}`, we are indicating that the `Navbar.Brand` and `Nav.Link` components should render as `Link` components instead of regular anchor tags. The `Link` component provided by `react-router-dom` is specifically designed for handling navigation within a React application, and it integrates seamlessly with the routing functionality provided by `react-router-dom`.

// Using `Link` instead of regular anchor tags allows for client-side routing, which means that when a user clicks on a link, the page does not refresh entirely. Instead, it updates only the necessary components and loads the corresponding content based on the route specified by the link.

// To use `Link`, make sure to import it from `react-router-dom`:

// ```jsx
// import { Link } from 'react-router-dom';
// ```

// By using `as={Link}`, we ensure that the navigation within the app will be handled by the `Link` component, providing a smooth and optimized user experience in a single-page application.