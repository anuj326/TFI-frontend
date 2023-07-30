import { Routes , Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Volunteer from './components/Volunteer';
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';


function App() {
  const isAuthenticated = true;
  return (
    <div className="App">
          <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/volunteer' element={<Volunteer />} />
                <Route path='/login' element={<AdminLogin />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
    
      
    </div>
  );
}

export default App;
