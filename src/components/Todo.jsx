import { useTodo } from "../contexts/TodoContext";

/* eslint-disable react/prop-types */
function Todo({ item }) {
  const { state, dispatch } = useTodo();

  function handleDeleteTodo(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function handleToggleStatus(id) {
    dispatch({ type: "CHECK", payload: id });
  }
  console.log(state.todo);

  return (
    <div className="w-full py-6 px-7 md:px-14 items-center flex justify-between isolate border-b-[1px] dark:border-neutral-dark-darkGrayishBlue border-neutral-light-lightGrayishBlue cursor-grab">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name=""
          id=""
          className="appearance-none ring-2 dark:ring-neutral-dark-darkGrayishBlue flex items-center justify-center ring-neutral-light-lightGrayishBlue w-5 h-5 p-3 rounded-full cursor-pointer relative checked:bg-check-gradient checked:ring-0 checked:before:content-['\2713'] checked:before:text-white checked:before:absolute"
          checked={item.completed}
          onChange={() => handleToggleStatus(item.id)}
        />
        <p
          className={`dark:text-neutral-light-veryLightGray font-josefin max-w-64 text-neutral-light-veryDarkGrayishBlue ${item.completed ? "text-neutral-light-darkGrayishBlue dark:text-neutral-dark-darkGrayishBlue line-through" : ""}`}
          id="todo-text"
        >
          {item.text}
        </p>
      </div>
      <img
        src="icon-cross.svg"
        className="cursor-pointer"
        alt=""
        onClick={() => handleDeleteTodo(item.id)}
      />
    </div>
  );
}

export default Todo;
