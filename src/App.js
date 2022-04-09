import { useEffect } from "react";
import { Col, Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Layout from "./Layout";
import "./App.css";

function App() {
  let navTitleArray = window.location.href.split("/");
  let navTitle = "<sub>`(${navTitleArray[navTitleArray.length - 1]})`</sub>";

  let data = [
    {
      headerTypeText: `<span> Welcome to<br/> <span class='collin'>Collin Clifford's </span><span class='port'>portfolio</span><span class='web'> ~/website</span><span class='nav'>${navTitle}</span><br/><br/>Which directory would you like to access?<br/></span><span><ul><li><a href='/about'>About</a></li><li><a href='/projects'>Projects</a></li><li><a href=''>Work History</a></li><li><a href=''>Contact</a></li><li>Resume</li></ul></span>`,
    },
  ];
  let allElements = document.getElementsByClassName("type");
  useEffect(() => {
    for (let j = 0; j < allElements.length; j++) {
      let currentElementId = allElements[j].id;
      let currentElementIdContent = data[0][currentElementId];
      let element = document.getElementById(currentElementId);
      let devTypeText = currentElementIdContent;

      // type code
      let i = 0,
        isTag,
        text;
      (function type() {
        text = devTypeText.slice(0, ++i);
        if (text === devTypeText) return;
        element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
        var char = text.slice(-1);
        if (char === "<") isTag = true;
        if (char === ">") isTag = false;
        if (isTag) return type();
        setTimeout(type, 60);
      })();
    }
  }, []);

  return (
    <>
      <Container>
        <Row className="row">
          <Col>
            <div className="header">
              <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                  <Navbar.Brand href="#home">
                    <sub class="collin">Collin Clifford's </sub>
                    <sub class="port">portfolio</sub>
                    <sub class="web"> ~/website</sub>
                    <sub class="nav">{navTitle}</sub>
                    <br />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbar-dark-example" />
                  <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title=""
                        menuVariant="dark"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
            <div className="header">
              {/* <span id="headerTypeText" class="type"></span> */}
              <span>
                {" "}
                Welcome to
                <br /> <span class="collin">Collin Clifford's </span>
                <span class="port">portfolio</span>
                <span class="web"> ~/website</span>
                <span class="nav">{navTitle}</span>
                <br />
                {/* <br />
                Which directory would you like to access?
                <br /> */}
              </span>
              <span>
                <ul>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/projects">Projects</a>
                  </li>
                  <li>
                    <a href="">Work History</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>Resume</li>
                </ul>
              </span>
              {/* <span class="blinker">&#32;</span> */}
            </div>
          </Col>
          <Col>
            <Layout />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
