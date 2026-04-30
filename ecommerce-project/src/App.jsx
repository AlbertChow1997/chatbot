import "./App.css";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<div>Test</div>} />
    </Routes>
  );
}

export default App;
