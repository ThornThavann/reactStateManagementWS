import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const TodoList = () => {
  const navigate = useNavigate();
//   const items = useSelector((state: RootState) => state.shopping.items);
  const userName = useSelector((state: RootState) => state.user.name);

  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState(""); // New input for creating a todo

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 10))) // Load only 10 todos
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  // Function to add a new todo
  const addNewTodo = () => {
    if (newTodo.trim() === "") return; // Prevent adding empty todos

    const newTodoItem: Todo = {
      id: todos.length + 1, // Assign a unique ID
      title: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]); // Add new todo to state
    setNewTodo(""); // Clear input
  };

  return (
    <div className="p-6 min-h-screen min-w-screen bg-gray-100 flex flex-col items-center text-black">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <p className="text-lg mb-4">Welcome, {userName || "Guest"}!</p>

      {/* Create New Todo Section */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Create a new todo..."
          className="p-2 border border-gray-300 rounded w-64"
        />
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={addNewTodo}
        >
          Create Todo
        </button>
      </div>

      {/* Display Todo List */}
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos yet!</p>
      ) : (
        <ul className="space-y-2 w-full max-w-md">
          {todos.map((todo) => (
            <li key={todo.id} className="p-2 bg-white rounded shadow">
              <span>{todo.title}</span>
            </li>
          ))}
        </ul>
      )}

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => navigate("/add-item")}
      >
        Add Item
      </button>
    </div>
  );
};
