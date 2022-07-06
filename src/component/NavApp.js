import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import React, { memo } from "react";
import NavSearch from "./NavSearch";

const NavApp = ({ onSearch }) => {
  return (
    <Navbar fluid={true} border={true}>
      <Navbar.Brand>
        <img
          src="/reminders192.png"
          className="mr-3 h-6 sm:h-9"
          alt="Todos Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          I-Todos
        </span>
      </Navbar.Brand>
      <div className="md:hidden">
        <div className="flex">
          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>
          <Navbar.Toggle />
        </div>
      </div>
      <Navbar.Collapse>
        <div className="hidden md:block">
          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>
        </div>
        <NavSearch onSearch={onSearch} />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default memo(NavApp);
