import './App.css';
import react from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import SignupPage from './scene/SignupPage/SignupPage';
import LogInPage from './scene/Loginpage/Loginpage';
import DashboardPage from './scene/dashboard/dashboardpage';

function App() {
  return (
    <Router>
      <WrappedApp />
    </Router>
  );
}

function WrappedApp() {
  const navigation = useNavigate();
  react.useEffect(() => {
    navigation('/login');
    const accesstoken = localStorage.getItem('accesstoken');
    if (accesstoken) {
      navigation('/dashboard');
    }
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
