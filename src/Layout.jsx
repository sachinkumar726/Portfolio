// src/Layout.jsx
import React from "react";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Bot from "./components/Bot";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Bot/>
      <Footer />
    </>
  );
}

export default Layout;
