import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Overview from './pages/dashboards/Overview';
import AIIntelligence from './pages/dashboards/AIIntelligence';
import Operations from './pages/dashboards/Operations';
import AdminDashboard from './pages/role/AdminDashboard';
import AnalystDashboard from './pages/role/AnalystDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/ai-intelligence" element={<AIIntelligence />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/analyst" element={<AnalystDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
