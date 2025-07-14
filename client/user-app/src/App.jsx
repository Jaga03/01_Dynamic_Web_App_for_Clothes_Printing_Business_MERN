import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import useAuth from './hooks/useAuth';

const Home = () => {
  const { user, logout } = useAuth();
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Welcome, {user?.name || 'User'} 👋</h1>
      <button onClick={logout} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
    </Routes>
  </BrowserRouter>
);

export default App;
