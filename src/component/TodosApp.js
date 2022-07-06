import React, { useState } from "react";
import FooterApp from "./FooterApp";
import FormInput from "./FormInput";
import NavApp from "./NavApp";
import getInitialData from "../utils";
import TodosCategory from "./TodosCategory";

const TodosApp = () => {
  const [activity, setActivity] = useState("");
  const [edit, setEdit] = useState({});
  const [todos, setTodos] = useState(getInitialData());
  const [message, setMessage] = useState("");
  const [keyword, setKeyword] = useState("");

  const generateId = () => {
    return Date.now();
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    if (!activity) return setMessage("Kolom aktivitas jangan kosong!");

    if (edit.id) {
      // Menampung data yang akan diupdate
      const updatedTodo = {
        ...edit,
        activity,
      };

      // Mencari index todo yang akan diupdate
      const todoEditIndex = todos.findIndex((todo) => todo.id === edit.id);
      const updatedTodos = [...todos];

      // Mengganti todo yang akan diupdate
      updatedTodos[todoEditIndex] = updatedTodo;

      // Menyimpan todo yang baru
      setTodos(updatedTodos);
      message && setMessage("");
      return onCancelEditHandler();
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity,
        done: false,
      },
    ]);
    message && setMessage("");
    setActivity("");
  };

  const onDeleteActivityHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
    edit.id && onCancelEditHandler();
  };

  const onEditActivityHandler = (todo) => {
    setActivity(todo.activity);
    setEdit(todo);
  };

  const onCancelEditHandler = () => {
    console.log("cancel edit");
    setEdit([]);
    setActivity("");
  };

  const onDoneActivityHandler = (todo) => {
    // Menampung data yang akan diupdate
    const updatedTodo = {
      ...todo,
      done: !todo.done,
    };

    // Mencari index todo yang akan diupdate
    const todoEditIndex = todos.findIndex(
      (currentTodo) => currentTodo.id === todo.id
    );
    const updatedTodos = [...todos];

    // Mengganti todo yang akan diupdate
    updatedTodos[todoEditIndex] = updatedTodo;

    // Menyimpan todo yang baru
    setTodos(updatedTodos);
  };

  const onSearchEventHandler = (keyword) => {
    setKeyword(keyword);
  };

  return (
    <div className="font-serif text-slate-700 dark:text-slate-200 dark:bg-[#1F2937]">
      <header>
        <NavApp onSearch={onSearchEventHandler} />
      </header>

      <section className="mb-8">
        <h1 className="text-center text-2xl my-8 md:my-12 font-bold md:text-4xl underline decoration-wavy decoration-2 decoration-slate-700 underline-offset-4 md:underline-offset-8 dark:decoration-slate-200">
          TODO LIST
        </h1>

        <FormInput
          onSubmitForm={onSubmitFormHandler}
          activity={activity}
          setActivity={setActivity}
          message={message}
          edit={edit}
          onCancelEdit={onCancelEditHandler}
        />

        <div className="w-[300px] mx-auto md:w-[1000px]">
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg font-bold mb-2 md:text-xl">Todos</h2>
            <TodosCategory
              todos={todos}
              type="todo"
              edit={edit}
              keyword={keyword}
              onDoneActivity={onDoneActivityHandler}
              onEditActivity={onEditActivityHandler}
              onDeleteActivity={onDeleteActivityHandler}
            />
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2 md:text-xl">Selesai</h2>
            <TodosCategory
              todos={todos}
              type="done"
              edit={edit}
              onDoneActivity={onDoneActivityHandler}
              onEditActivity={onEditActivityHandler}
              onDeleteActivity={onDeleteActivityHandler}
            />
          </div>
        </div>
      </section>

      <footer>
        <FooterApp />
      </footer>
    </div>
  );
};

export default TodosApp;
