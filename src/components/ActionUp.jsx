import { useTodo } from "../contexts/TodoContext";
import ActionDown from "./ActionDown";
import Button from "./Button";
function ActionUp() {
  const { filteredTask, dispatch } = useTodo();

  function handleClearCompletedTodo() {
    dispatch({ type: "CLEAR" });
  }
  return (
    <div className="w-full  py-6  px-7 md:px-14 items-center flex justify-between relative">
      <p className="text-neutral-dark-darkGrayishBlue font-josefin relative">
        {filteredTask.length} items left
      </p>
      <Button onClick={handleClearCompletedTodo}>Clear Completed</Button>
      <ActionDown />
    </div>
  );
}

export default ActionUp;
