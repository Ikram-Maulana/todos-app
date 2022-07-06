import React, { memo } from "react";
import TodosList from "./TodosList";

const TodosCategory = ({
  todos,
  type,
  edit,
  keyword,
  onDoneActivity,
  onEditActivity,
  onDeleteActivity,
}) => {
  if (type === "todo") {
    const todosFiltered = todos.filter((todo) => todo.done === false);
    return (
      <TodosList
        todos={todosFiltered}
        edit={edit}
        keyword={keyword}
        onDoneActivity={onDoneActivity}
        onEditActivity={onEditActivity}
        onDeleteActivity={onDeleteActivity}
      />
    );
  }
  const filteredTodos = todos.filter((todo) => todo.done === true);
  return (
    <TodosList
      todos={filteredTodos}
      edit={edit}
      keyword={keyword}
      onDoneActivity={onDoneActivity}
      onEditActivity={onEditActivity}
      onDeleteActivity={onDeleteActivity}
    />
  );
};

export default memo(TodosCategory);
