import { useTodo } from "../contexts/TodoContext";

function ToggleContainer() {
  const { state, dispatch } = useTodo();

  function handleToggleMode() {
    dispatch({ type: "TOGGLEDARKMODE" });
  }
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="font-josefin text-4xl text-white">TODO</h1>
      <img
        src={state.darkMode ? "icon-sun.svg" : "icon-moon.svg"}
        alt=""
        className="cursor-pointer"
        onClick={handleToggleMode}
      />
    </div>
  );
}

export default ToggleContainer;
