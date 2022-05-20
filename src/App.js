import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import Layout from "./Layout";
import Footer from "./Footer";
import "./App.css";

function App() {
  let navTitleArray = window.location.href.split("/");
  let navTitle = `${navTitleArray[navTitleArray.length - 1]}`;
  const [menu, setMenu] = useState(false);

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

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      {menu && (
        <div className="header" role="banner">
          <Col>
            <Navbar variant="dark" bg="dark" expand="lg">
              <Container fluid>
                <Navbar.Brand>
                  ./CollinClifford/portfolio/{navTitle}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title=""
                      menuVariant="dark"
                    >
                      <NavDropdown.Item href="/about">about</NavDropdown.Item>
                      <NavDropdown.Item href="/projects">
                        projects
                      </NavDropdown.Item>

                      <NavDropdown.Item href="/work">
                        workHistory
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/contact">
                        contact
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="https://docs.google.com/document/d/1_dFo-uDbzWD4ojcVsdZT8uP5K9USbaddmg3mY9OTxiw/edit?usp=sharing"
                        download
                      >
                        resume
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                <div className="icons">
                  <a href="https://www.linkedin.com/in/collinclifford/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a href="https://github.com/CollinClifford">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a href="https://collinscastle.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-wordpress"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218.02 0 .039.002.058.003l.031.003A6.838 6.838 0 0 0 8 1.137 6.855 6.855 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.864 6.864 0 0 0 3.868 6.176L1.73 5.206A6.837 6.837 0 0 0 1.137 8z" />
                      <path d="M6.061 14.583 8.121 8.6l2.109 5.78c.014.033.03.064.049.094a6.854 6.854 0 0 1-4.218.109zm7.96-9.876c.03.219.047.453.047.706 0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8c0-4.411 3.589-8 8-8 4.41 0 8 3.589 8 8s-3.59 8-8 8c-4.411 0-8-3.589-8-8zm.367 0c0 4.209 3.424 7.633 7.633 7.633 4.208 0 7.632-3.424 7.632-7.633C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8z"
                      />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/drat.dratsky.9/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </div>
              </Container>
            </Navbar>
          </Col>
        </div>
      )}
      <Button class="btn btn-dark" onClick={() => showMenu()}>Menu</Button>
      <Layout />
      <Footer />
    </>
  );
}

export default App;
