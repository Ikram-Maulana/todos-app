import { TextInput } from "flowbite-react";
import React, { memo } from "react";
import HiSearch from "./icons/HiSearch";

const NavSearch = ({ onSearch }) => {
  return (
    <TextInput
      id="search"
      type="text"
      placeholder="Search..."
      icon={HiSearch}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default memo(NavSearch);
