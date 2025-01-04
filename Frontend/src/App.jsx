import "./App.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Dashboard from "./Comp/Dashboard.jsx"; 
import Profile from "./Comp/Profile.jsx"; 
import withAuth from "./HOC/withAuth.jsx";  // Import the `withAuth` Higher-Order Component (HOC) to wrap components with authentication logic.
import Test from "./Comp/Test.jsx"; 
import PromiseConcept from "./Comp/PromiseConcept.jsx";

// Define the main App component that manages routing and page rendering.
function App() {
  
  const DashboardAuth = withAuth(Dashboard); // Wrap the `Dashboard` component with the `withAuth` HOC to add authentication logic.
  const ProfileAuth = withAuth(Profile);  // Wrap the `Profile` component with the `withAuth` HOC to add authentication logic.

  // Return the application's structure and routes.
  return (
    <>
      {/* Use the `Router` component to enable client-side routing. */}
      <Router>
        {/* Define all the routes for the application inside `Routes`. */}
        <Routes>
          {/* Define a route for the home page, rendering a simple heading. */}
          <Route path="/" element={<h1 className="text-2xl">Home</h1>} />

          {/* Define a route for the dashboard page, rendering the authenticated `Dashboard` component. */}
          <Route path="/dashboard" element={<DashboardAuth />} />

          {/* Define a route for the profile page, rendering the authenticated `Profile` component. */}
          <Route path="/profile" element={<ProfileAuth />} />

          {/* Define a route for the test page, rendering the `Test` component. */}
          <Route path="/test" element={<Test />} />

           {/* Define a route for the test page, rendering the `Test` component. */}
           <Route path="/promise" element={<PromiseConcept />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
