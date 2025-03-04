import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";

  
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  export const ShoppingList = () => {
    const navigate = useNavigate();
    const items = useSelector((state: RootState) => state.shopping.items);
    const userName = useSelector((state: RootState) => state.user.name);
    
    const [todos, setTodos] = useState<Todo[]>([]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => setTodos(data.slice())) // Limit to 10 items
        .catch((error) => console.error("Error fetching todos:", error));
    }, []);


  return (
    <div className="p-6 min-h-screen min-w-screen bg-gray-100 flex flex-col items-center text-black">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <p className="text-lg mb-4">Welcome, {userName || "Guest"}!</p> {/* Display user name */}
      {items.length === 0 ? (
        <p className="text-gray-500">Nothing to buy yet!</p>
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