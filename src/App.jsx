import Header from "./components/Header";
import AppWrapper from "./components/AppWrapper";
import { useEffect } from "react";
import { useTodo } from "./contexts/TodoContext";
function App() {
  const { state } = useTodo();
  useEffect(() => {
    state.darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [state.darkMode]);

  return (
    <div className="w-full h-[100vh]  dark:bg-neutral-dark-veryDarkBlue bg-neutral-light-veryLightGray relative flex justify-center">
      <Header />
      <AppWrapper />
    </div>
  );
}

export default App;
