import ToggleContainer from "./ToggleContainer";
import TodoContainer from "./TodoContainer";
import InputComp from "./InputComp";

function AppWrapper() {
  return (
    <div
      className={`absolute w-[90%] sm:w-[70%] mx-auto top-[13%] bg-transparent flex flex-col gap-4`}
    >
      <ToggleContainer />
      <InputComp />
      <TodoContainer />
    </div>
  );
}

export default AppWrapper;
