import React from "react";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Stack
      spacing={4}
      direction="column"
      sx={{
        background: "black",
        color: "white",
        fontSize: "1.2rem",
        height: "100vh",
        width: "20vw",
        padding: "15px",
      }}
    >
      <Stack spacing={2} direction="row">
        JANITRY CRM + INVENTORY{" "}
      </Stack>
      <Stack spacing={2} direction="column">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#fff" : "#333",
            backgroundColor: isActive ? "#1976d2" : "transparent",
            textDecoration: "none",
            transition: "all 0.2s ease-in-out",
            boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
          })}
          className="menu-link"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/instraining"
          style={({ isActive }) => ({
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#fff" : "#333",
            backgroundColor: isActive ? "#1976d2" : "transparent",
            textDecoration: "none",
            transition: "all 0.2s ease-in-out",
            boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
          })}
          className="menu-link"
        >
          Installation and trainig{" "}
        </NavLink>
        <NavLink
          to="/service"
          style={({ isActive }) => ({
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#fff" : "#333",
            backgroundColor: isActive ? "#1976d2" : "transparent",
            textDecoration: "none",
            transition: "all 0.2s ease-in-out",
            boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
          })}
          className="menu-link"
        >
          Service visit logs
        </NavLink>
        <NavLink
          to="/amc"
          style={({ isActive }) => ({
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#fff" : "#333",
            backgroundColor: isActive ? "#1976d2" : "transparent",
            textDecoration: "none",
            transition: "all 0.2s ease-in-out",
            boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
          })}
          className="menu-link"
        >
          AMC/CMC tracker
        </NavLink>
        <NavLink
          to="/photo"
          style={({ isActive }) => ({
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#fff" : "#333",
            backgroundColor: isActive ? "#1976d2" : "transparent",
            textDecoration: "none",
            transition: "all 0.2s ease-in-out",
            boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
          })}
          className="menu-link"
        >
          Alerts and photo logs
        </NavLink>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
