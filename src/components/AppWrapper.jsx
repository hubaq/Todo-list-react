import ToggleContainer from "./ToggleContainer";
import TodoContainer from "./TodoContainer";
import InputComp from "./InputComp";
import { useTodo } from "../contexts/TodoContext";

function AppWrapper() {
  const { filteredTask } = useTodo();
  return (
    <div
      className={`absolute w-[90%] sm:w-[70%] mx-auto top-[12%] bg-transparent flex flex-col gap-4`}
    >
      <ToggleContainer />
      <InputComp />
      <TodoContainer />
      {filteredTask.length > 1 && (
        <p className="font-josefin text-lg dark:text-neutral-dark-lightGrayishBlue text-neutral-light-darkGrayishBlue self-center mt-auto md:mt-4 ">
          Drag and drop to reorder list
        </p>
      )}
    </div>
  );
}

export default AppWrapper;
