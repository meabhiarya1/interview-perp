import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Comp/Dashboard.jsx";
import Profile from "./Comp/Profile.jsx";
import withAuth from "./HOC/withAuth.jsx";

function App() {
  const DashboardAuth = withAuth(Dashboard);
  const ProfileAuth = withAuth(Profile);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1 className="text-2xl">Home</h1>} />
          <Route path="/dashboard" element={<DashboardAuth />} />
          <Route path="/profile" element={<ProfileAuth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
