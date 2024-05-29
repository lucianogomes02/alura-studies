import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PaginaDeTarefas from "../pages/Tarefas";
import Menu from "../components/Menu";

export default function App() {
  return (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarefas" element={<PaginaDeTarefas />} />
        </Routes>
    </BrowserRouter>
  );
}