import React, { useState, useEffect } from 'react';
import { greetings, socialLinks } from '../portfolio';
import Headroom from 'headroom.js';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { NavigationType } from '../types/sections';

const Navigation = ({
  serviceId,
  projectId,
  contactId,
  teamId,
  navigateToPage,
}: NavigationType) => {
  const [collapseClasses, setCollapseClasses] = useState('');
  const onExiting = () => setCollapseClasses('collapsing-out');

  const onExited = () => setCollapseClasses('');

  useEffect(() => {
    let headroom = new Headroom(document.getElementById('navbar-main')!);
    // initialise
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white">{greetings.name}</h2>
            </NavbarBrand>
            <button
              className="navbar-toggler"
              aria-label="navbar_toggle"
              id="navbar_global"
              style={{ display: 'none' }}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              style={{ justifyContent: 'center' }}
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              {/* <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black">{greetings.name}</h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div> */}
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {/* {socialLinks.facebook && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Facebook"
                      className="nav-link-icon"
                      href={socialLinks.facebook}
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.instagram && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Instagram"
                      className="nav-link-icon"
                      href={socialLinks.instagram}
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.github && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Github"
                      className="nav-link-icon"
                      href={socialLinks.github}
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.linkedin && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Linkedin"
                      className="nav-link-icon"
                      href={socialLinks.linkedin}
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Linkedin
                      </span>
                    </NavLink>
                  </NavItem>
                )} */}
                <button
                  onClick={() => navigateToPage(serviceId)}
                  style={{
                    backgroundColor: 'transparent',
                    borderWidth: '0px',
                    marginLeft: '50px',
                  }}
                >
                  <h5 className="text-white" style={{ marginBottom: '0px' }}>
                    Services
                  </h5>
                </button>
                <button
                  onClick={() => navigateToPage(projectId)}
                  style={{
                    backgroundColor: 'transparent',
                    borderWidth: '0px',
                    marginLeft: '30px',
                  }}
                >
                  <h5 className="text-white" style={{ marginBottom: '0px' }}>
                    Projects
                  </h5>
                </button>
                <button
                  onClick={() => navigateToPage(teamId)}
                  style={{
                    backgroundColor: 'transparent',
                    borderWidth: '0px',
                    marginLeft: '30px',
                  }}
                >
                  <h5 className="text-white" style={{ marginBottom: '0px' }}>
                    Team
                  </h5>
                </button>
                <button
                  onClick={() => navigateToPage(contactId)}
                  style={{
                    padding: '8px',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(255,255,255, 1)',
                    borderWidth: '0px',
                    marginLeft: '30px',
                  }}
                >
                  <h5 style={{ marginBottom: '0px', color: '#0071c5' }}>
                    Hire Us
                  </h5>
                </button>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
