import { Alert } from "flowbite-react";
import React, { memo } from "react";

const TodosNotFound = ({ children }) => {
  return (
    <Alert color="warning" rounded={true}>
      <span>
        <span className="font-bold">Informasi!</span> {children}.
      </span>
    </Alert>
  );
};

export default memo(TodosNotFound);
