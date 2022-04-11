import React from "react";
import { Table, Nav, NavDropdown, Container } from "react-bootstrap";
import "./work.css"

function Work() {
  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Residency</th>
            <th>Supervisor</th>
            <th>Responsibilities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Revolution Hall</td>
            <td>Kitchen Manager</td>
            <td>05/2016-05/2021</td>
            <td>
              {" "}
              {/* <Nav>
                <NavDropdown title="Ray Mullin">
                  <NavDropdown.Item href="mailto: ray@mississippistudios.com">
                    Email
                  </NavDropdown.Item>
                  <NavDropdown.Item href="tel:352-278-8876">
                    Phone Number
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Erin Gaughan">
                  <NavDropdown.Item href="mailto: erin.gaughan81@gmail.com">
                    Email
                  </NavDropdown.Item>
                  <NavDropdown.Item href="tel:503-381-3981">
                    Phone Number
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav> */}
              <ul>
                <li>Ray Mullin</li>
                <li>Erin Gaughan</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  Displayed excellent management qualities by leading a large
                  team in three locations
                </li>
                <li>
                  Saved the company money by setting up an inventory system
                  through spreadsheets, implementing strict portion control, and
                  delegating team member responsibilities
                </li>
                <li>
                  Maintained a clean and organized work environment and executed
                  standardized food practices.
                </li>
                <li>
                  Exemplified grace under pressure as both a leader and team
                  member when faced with high volume fast-paced environments
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Aviv</td>
            <td>Kitchen Staff</td>
            <td>05/2013-02/2021</td>
            <td>
              {/* {" "}
              <Nav>
                <NavDropdown title="Tal Caspi">
                  <NavDropdown.Item href="mailto: ray@mississippistudios.com">
                    Email
                  </NavDropdown.Item>
                  <NavDropdown.Item href="tel:352-278-8876">
                    Phone Number
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav> */}
              <ul>
                <li>Tal Caspi</li>
                <li>Sanjay Chanddran</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  Demonstrated leadership by opening three locations throughout
                  Portland with the owner by training new team members,
                  contributing to menus, and helping set up kitchens.
                </li>
                <li>
                  Showcased my ability to adapt by jumping into a team
                  environment whenever called upon.
                </li>
              </ul>
            </td>
          </tr>
          {/* <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    </Container>
  );
}

export default Work;
