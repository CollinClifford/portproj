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
      <Route path="/" element={<Navigate replace to="/about" />} />
      <Route path="/main" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Layout;
