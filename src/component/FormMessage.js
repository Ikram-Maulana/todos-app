import React, { memo } from "react";

const FormMessage = ({ children }) => {
  return (
    <p className="pt-1">
      <i className="text-red-700 text-sm">* {children}</i>
    </p>
  );
};

export default memo(FormMessage);
