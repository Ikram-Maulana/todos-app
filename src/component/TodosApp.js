import React, { memo, useState } from "react";
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
  const [charLimit, setCharLimit] = useState(12);
  const [charRemaining, setCharRemaining] = useState(12);

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
      setCharLimit(12);
      setCharRemaining(12);
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
    setCharLimit(12);
    setCharRemaining(12);
    setActivity("");
  };

  const onDeleteActivityHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
    setCharLimit(12);
    setCharRemaining(12);
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
    setCharLimit(12);
    setCharRemaining(12);
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

  const charLimiter = (value, max) => {
    if (value.length > max) {
      value = value.substr(0, max);
    }
    let remaining = max - value.length;

    return {
      value,
      remaining,
    };
  };

  const onActivityChangeHandler = (e) => {
    const { value, remaining } = charLimiter(e.target.value, charLimit);
    setActivity(value);
    setCharRemaining(remaining);
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
          message={message}
          edit={edit}
          charRemaining={charRemaining}
          onCancelEdit={onCancelEditHandler}
          onActivityChange={onActivityChangeHandler}
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

export default memo(TodosApp);
