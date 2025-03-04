import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingList } from "./ShoppingList";
import { AddItem } from "./AddItem";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShoppingList />} />
        <Route path="/add-item" element={<AddItem />} />

      </Routes>
    </Router>
  );
};