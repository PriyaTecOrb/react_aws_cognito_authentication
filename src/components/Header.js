import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { AuthContext } from "./Auth";

const Header = () => {
  const [status, setStatus] = useState(false);
  const { getSession } = useContext(AuthContext);
  useEffect(() => {
    getSession().then((session) => {
      setStatus(true);
    });
  }, []);
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Nav.Link href="/">
          <img src="./download.jpeg" style={{ maxWidth: 40 }} alt="" />
        </Nav.Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!status ? (
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            ) : (
              <>
                <Nav.Link href="/products">User Products</Nav.Link>
                {/* Other links here after login */}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
