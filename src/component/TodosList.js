import React from "react";
import TodosItem from "./TodosItem";
import TodosNotFound from "./TodosNotFound";

const TodosList = ({
  todos,
  edit,
  keyword,
  onDoneActivity,
  onEditActivity,
  onDeleteActivity,
}) => {
  if (todos.length > 0) {
    todos = todos.filter((todo) => {
      if (keyword === "") return todo;
      return todo.activity.toLowerCase().includes(keyword.toLowerCase());
    });
  }

  if (todos.length === 0) {
    return <TodosNotFound>Tidak ada data aktifitas</TodosNotFound>;
  }

  return (
    <>
      {todos.map((todo) => {
        return (
          <TodosItem
            key={todo.id}
            todo={todo}
            edit={edit}
            onDoneActivity={onDoneActivity}
            onEditActivity={onEditActivity}
            onDeleteActivity={onDeleteActivity}
          />
        );
      })}
    </>
  );
};

export default TodosList;
