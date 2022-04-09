import React from "react";
import { Table, Nav, NavDropdown } from "react-bootstrap";

function Work() {
  return (
    <>
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
              <Nav>
                <NavDropdown title="Ray Mullin">
                  <NavDropdown.Item href="mailto: ray@mississippistudios.com">
                    Email
                  </NavDropdown.Item>
                  <NavDropdown.Item href="tel:352-278-8876">
                    Phone Number
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
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
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Work;
