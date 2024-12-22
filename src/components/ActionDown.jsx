import Button from "./Button";
import { useTodo } from "../contexts/TodoContext";
function ActionDown() {
  const { dispatch } = useTodo();

  function handleShowAllTodo() {
    dispatch({ type: "ALL" });
  }
  function handleShowActiveTodo() {
    dispatch({ type: "ACTIVE" });
  }
  function handleShowCompletedTodo() {
    dispatch({ type: "COMPLETED" });
  }
  return (
    <div className="w-[80%]  absolute top-[7.5rem] left-10 dark:bg-neutral-dark-veryDarkDesaturatedBlue bg-neutral-light-veryLightGray py-3 px-7 md:px-14 rounded-lg flex items-center justify-center gap-5 shadow-lg md:shadow-none md:absolute md:w-[40%]  md:top-auto md:left-1/2 md:transform md:-translate-x-1/2  ">
      <Button onClick={handleShowAllTodo} type="all">
        All
      </Button>
      <Button onClick={handleShowActiveTodo}>Active</Button>
      <Button onClick={handleShowCompletedTodo}>Completed</Button>
    </div>
  );
}

export default ActionDown;
