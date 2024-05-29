import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PaginaDeTarefas from "../pages/Tarefas";

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarefas" element={<PaginaDeTarefas />} />
        </Routes>
    </Router>
  );
}