import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Projects from "./Routes/Projects";
import About from "./Routes/About";
import Dashboard from "./Routes/Dashboard";
import Work from "./Routes/Work";
import Contact from "./Routes/Contact";
import NotFound from "./Routes/NotFound";

function Layout() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/main" />} />
      <Route path="/main" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      {/* <About />
        </Route> */}
      {/* <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Layout;
