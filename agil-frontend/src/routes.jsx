
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import GestaoClientes from './pages/GestaoClientes.jsx';
import GestaoColaboradores from './pages/GestaoColaboradores.jsx';
import Modal from './components/Modal.jsx';
import DashColaborades from './pages/Coletas/DashColetas.jsx';
import DashEntregas from './pages/Entregas/DashEntregas.jsx';
function Router() {
  return (
    <Routes>
      
      <Route path={"/"} element={<Home />} />
        <Route path={"/colaboradores"} element={<GestaoColaboradores />} />
        <Route path={"/clientes-parceiros"} element={<GestaoClientes />} />
        <Route path={"/modal"} element={<Modal />} />
        <Route path={"/dashboard-coletas"} element={<DashColaborades />} />
        <Route path={"/dashboard-entregas"} element={<DashEntregas />} />
    </Routes>
  );
}

export default Router;