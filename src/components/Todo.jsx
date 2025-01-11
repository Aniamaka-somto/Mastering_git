import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handelSubmitTodo = () => {
    setTodos([...todos, { text: input, id: Math.random() }]);
    setInput("");
  };
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const todoHead = todos.length > 1 ? "Todos" : "Todo";
  const noOfTodos = todos.length > 0 ? todos.length : "No";

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white flex-col gap-y-4">
      <h1>
        You have {noOfTodos} {todoHead}
      </h1>
      <div className="p-7 bg-slate-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="py-2 px-6 ring-1 ring-inset ring-zinc-700 rounded-xl"
        />
        <button
          onClick={handelSubmitTodo}
          className="py-2 px-6 ring-1 ring-inset ring-zinc-700 rounded-xl bg-zinc-950 text-white  hover:bg-zinc-800  transition-colors duration-300"
        >
          Submit
        </button>
      </div>

      <ul>
        {todos.map(({ text, id }) => {
          return (
            <div className="w-[500px] flex items-center " key={id}>
              <li
                key={id}
                className="p-3 w-full m-2 ring-zinc-900 ring-1 rounded-lg"
              >
                {text}
              </li>
              <button
                onClick={() => handleDeleteTodo(id)}
                className=" px-6 py-4 ring-1 ring-inset ring-zinc-700 rounded-xl hover:bg-zinc-300 transition-colors duration-300"
              >
                <IoMdTrash className="" />
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
