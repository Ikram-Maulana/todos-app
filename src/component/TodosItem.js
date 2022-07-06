import { Button, Label } from "flowbite-react";
import React from "react";

const TodosItem = ({
  todo,
  edit,
  onDoneActivity,
  onEditActivity,
  onDeleteActivity,
}) => {
  return (
    <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col mb-2">
      <div className="h-full justify-center p-4">
        <div className="grid items-center grid-cols-3 grid-rows-1 gap-2">
          <div className="row-start-1 col-start-1 col-span-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border border-gray-300 bg-gray-100 mr-2 md:mr-4 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              checked={todo.done}
              onChange={() => onDoneActivity(todo)}
              disabled={edit.id ? true : false}
            />
            <Label htmlFor="todos">{todo.activity}</Label>
          </div>
          <div className="col-start-3 flex gap-x-2 justify-end">
            <Button
              size="sm"
              color="warning"
              onClick={() => onEditActivity(todo)}
            >
              Edit
            </Button>
            <Button
              size="sm"
              color="failure"
              onClick={() => onDeleteActivity(todo.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosItem;
