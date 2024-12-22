import { useDrag, useDrop } from "react-dnd";
import { useTodo } from "../contexts/TodoContext";

/* eslint-disable react/prop-types */
function Todo({ item, index }) {
  const { state, dispatch } = useTodo();

  const [{ isDragging }, dragRef] = useDrag({
    type: "TODO",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "TODO",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        const updatedTodos = [...state.todo];
        const [draggedTodo] = updatedTodos.splice(draggedItem.index, 1);
        updatedTodos.splice(index, 0, draggedTodo);

        // Update indices to ensure consistent behavior
        draggedItem.index = index;

        // Dispatch the updated todo list
        dispatch({ type: "Drag", payload: updatedTodos });
      }
    },
  });

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleToggleStatus = (id) => {
    dispatch({ type: "CHECK", payload: id });
  };

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      className={`w-full py-6 px-7 md:px-14 items-center flex justify-between isolate border-b-[1px] dark:border-neutral-dark-darkGrayishBlue border-neutral-light-lightGrayishBlue cursor-move ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          className="appearance-none ring-2 dark:ring-neutral-dark-darkGrayishBlue flex items-center justify-center ring-neutral-light-lightGrayishBlue w-5 h-5 p-3 rounded-full cursor-pointer relative checked:bg-check-gradient checked:ring-0 checked:before:content-['\2713'] checked:before:text-white checked:before:absolute"
          checked={item.completed}
          onChange={() => handleToggleStatus(item.id)}
        />
        <p
          className={`dark:text-neutral-light-veryLightGray font-josefin max-w-64 text-neutral-light-veryDarkGrayishBlue ${
            item.completed
              ? "text-neutral-light-darkGrayishBlue dark:text-neutral-dark-darkGrayishBlue line-through"
              : ""
          }`}
        >
          {item.text}
        </p>
      </div>
      <img
        src="icon-cross.svg"
        className="cursor-pointer"
        alt="Delete"
        onClick={() => handleDeleteTodo(item.id)}
      />
    </div>
  );
}

export default Todo;
