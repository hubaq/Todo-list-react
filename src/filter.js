const todo = [
  {
    id: 1,
    text: "Go to college",
    completed: false,
  },
  {
    id: 2,
    text: "Go to college 2",
    completed: true,
  },
];

let filteredTodo = todo.filter((item) => item.completed);
console.log(filteredTodo);
