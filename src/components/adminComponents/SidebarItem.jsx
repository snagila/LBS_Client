import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SidebarItem = ({ icon, label, path, activeItem, setActiveItem }) => {
  return (
    <Link className="text-decoration-none p-1 me-auto" to={path}>
      <Button
        variant={activeItem === label ? "info" : "outline-infos"}
        className="fw-bold text-dark w-100 text-start"
      >
        {icon}
        {label}
      </Button>
    </Link>
  );
};

export default SidebarItem;
