import { useTodo } from "../contexts/TodoContext";
import ActionUp from "./ActionUp";
import Todo from "./Todo";

function TodoContainer() {
  const { filteredTask } = useTodo();
  return (
    <div
      className={`flex w-full flex-col dark:shadow-none shadow-xl dark:bg-neutral-dark-veryDarkDesaturatedBlue bg-neutral-light-veryLightGray rounded-lg `}
    >
      {filteredTask.map((item, id) => (
        <Todo key={id} item={item} />
      ))}
      <ActionUp />
    </div>
  );
}

export default TodoContainer;
