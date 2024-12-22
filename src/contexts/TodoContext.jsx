/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const initialState = {
  todo: [
    // {
    //   id: 1,
    //   text: "Go to mosque to pray",
    //   completed: false,
    // },
  ],
  darkMode: true,
  filter: "All",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };
    case "Drag":
      return {
        ...state,
        todo: action.payload,
      };
    case "CLEAR":
      return {
        ...state,
        todo: state.todo.filter((item) => !item.completed),
      };
    case "ALL":
      return {
        ...state,
        todo: state.todo,
        filter: "All",
      };
    case "ACTIVE":
      return {
        ...state,
        filter: "Active",
      };
    case "COMPLETED":
      return {
        ...state,
        filter: "Completed",
      };
    case "CHECK":
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
        isChecked: !state.isChecked,
      };
    case "TOGGLEDARKMODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}

const TodoContext = createContext();

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let filteredTask;

  if (state.filter === "Active") {
    filteredTask = state.todo.filter((item) => !item.completed);
  } else if (state.filter === "Completed") {
    filteredTask = state.todo.filter((item) => item.completed);
  } else if (state.filter === "All") {
    filteredTask = state.todo;
  }

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
        filteredTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
