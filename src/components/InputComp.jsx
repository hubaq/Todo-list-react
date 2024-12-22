import { useEffect, useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function InputComp() {
  const [todoText, setTodoText] = useState("");
  const { dispatch } = useTodo();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        if (todoText.trim() !== "") {
          const newTask = {
            id: Math.random().toString(36).substr(2, 8),
            text: todoText,
            completed: false,
          };
          dispatch({ type: "ADD", payload: newTask });
          setTodoText("");
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [todoText, dispatch]);
  return (
    <div className="w-full dark:bg-neutral-dark-veryDarkDesaturatedBlue bg-neutral-light-veryLightGray py-3 px-7 md:px-14 rounded-lg flex items-center gap-1 md:gap-5 isolate">
      <input
        type="checkbox"
        name=""
        id=""
        className="appearance-none ring-2 dark:ring-neutral-dark-darkGrayishBlue ring-neutral-light-lightGrayishBlue w-5 h-5 p-3 rounded-full cursor-pointer"
      />
      <input
        type="text"
        name=""
        id=""
        className="w-full p-3 bg-transparent font-josefin dark:text-neutral-dark-lightGrayishBlue text-neutral-dark-veryDarkBlue outline-none overflow-hidden"
        placeholder="Create a new todo..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
    </div>
  );
}

export default InputComp;
