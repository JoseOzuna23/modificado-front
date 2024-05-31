import { Route, Routes, Outlet } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { GuestRoute } from './components/GuestRoute';   //
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PersonasPage from './pages/PersonasPage';
import { AddPersona } from './pages/PersonasPage/AddPersona';
import { EditPersona } from './pages/PersonasPage/EditPersona';

import PaisesPage from './pages/PaisesPage';
import { AddPais } from './pages/PaisesPage/AddPais';

import DepatamentosPage from './pages/DepatamentosPage';
import { AddDepartamento } from './pages/DepatamentosPage/AddDepartamento';

import DistritosPage from './pages/DistritosPage';
import { AddDistrito } from './pages/DistritosPage/AddDistrito';

import CiudadesPage from './pages/CiudadesPage';
import { AddCiudad } from './pages/CiudadesPage/AddCiudad';

import DireccionesPage from './pages/DireccionesPage';
import { AddDireccion } from './pages/DireccionesPage/AddDireccion';

import BarriosPage from './pages/BarriosPage';
import { AddBarrio } from './pages/BarriosPage/AddBarrio';

import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import BranchesPage from './pages/BranchesPage';
import LayoutUser from './layout/LayoutUser';
import axios from 'axios';

axios.defaults.baseURL =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:8081';

function App() {
  return (
    <main>
      <Routes>
        {/* Guest Routes */}
        <Route path='/' element={<GuestRoute component={<Outlet />} />}>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Route>

        {/* Protected Routes */}
        <Route path='/' element={<ProtectedRoute component={<LayoutUser />} />}>
          <Route path='/branches' element={<BranchesPage />} />

          {/* Rutas relacionadas con personas */}
          <Route path='/personas' element={<PersonasPage />} />
          <Route path='/addpersona' element={<AddPersona />} />
          <Route path='/personas/edit/:id' element={<EditPersona />} />

          // Rutas relacionadas con países
          <Route path='/paises' element={<PaisesPage />} /> 
          <Route path='/addpais' element={<AddPais />} /> 

          {/* Rutas relacionadas con departamentos */}
          <Route path='/departamentos' element={<DepatamentosPage />} />
          <Route path='/AddDepartamento' element={<AddDepartamento />} />

          {/* Rutas relacionadas con distritos */}
          <Route path='/distritos' element={<DistritosPage />} />
          <Route path='/AddDistrito' element={<AddDistrito />} />

          {/* Rutas relacionadas con ciudades */}
          <Route path='/ciudades' element={<CiudadesPage />} />
          <Route path='/AddCiudad' element={<AddCiudad />} />

          {/* Rutas relacionadas con direcciones */}
          <Route path='/direcciones' element={<DireccionesPage />} />
          <Route path='/AddDireccion' element={<AddDireccion />} />

            {/* Rutas relacionadas con barrios */}
            <Route path='/barrios' element={<BarriosPage />} />
          <Route path='/AddBarrio' element={<AddBarrio />} />

          <Route path='/profile' element={<UserProfilePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
