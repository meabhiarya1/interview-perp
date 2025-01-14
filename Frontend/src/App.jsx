import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Comp/Dashboard.jsx";
import Profile from "./Comp/Profile.jsx";
import withAuth from "./HOC/withAuth.jsx"; // Import the `withAuth` Higher-Order Component (HOC) to wrap components with authentication logic.
import Test from "./Comp/Test.jsx";
import PromiseConcept from "./Comp/PromiseConcept.jsx";
import Debouncing from "./Comp/Debouncing.jsx";
import Throttling from "./Comp/Throttling.jsx";
import Currying from "./Comp/Currying.jsx";
import Memoization from "./Comp/Memoization.jsx";
import Polyfills from "./Comp/Polyfills.jsx";
import CallApplyBind from "./Comp/CallApplyBind.jsx";
import EventBubbling__EventCapturing from "./Comp/EventBubbling__EventCapturing.jsx";
import Event_deligation from "./Comp/Event_deligation.jsx";
import DeepAndShallow from "./Comp/DeepAndShallow.jsx";
// Define the main App component that manages routing and page rendering.
function App() {
  const DashboardAuth = withAuth(Dashboard); // Wrap the `Dashboard` component with the `withAuth` HOC to add authentication logic.
  const ProfileAuth = withAuth(Profile); // Wrap the `Profile` component with the `withAuth` HOC to add authentication logic.

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

          {/* Define a route for the promise, rendering the `Promise` component. */}
          <Route path="/promise" element={<PromiseConcept />} />

          {/* Define a route for the debounce, rendering the `Debounce` component. */}
          <Route path="/debounce" element={<Debouncing />} />

          {/* Define a route for the throttling, rendering the `Throttling` component. */}
          <Route path="/throttling" element={<Throttling />} />

          {/* Define a route for the currying, rendering the `Currying` component. */}
          <Route path="/currying" element={<Currying />} />

          {/* Define a route for the Memoization, rendering the `Memoization` component. */}
          <Route path="/memoization" element={<Memoization />} />

          {/* Define a route for the Polyfills, rendering the `Polyfills` component. */}
          <Route path="/polyfills" element={<Polyfills />} />

          {/* Define a route for the callApplyBind, rendering the `Call,Apply,Bind` component. */}
          <Route path="/callApplyBind" element={<CallApplyBind />} />

          {/* Define a route for the EventBubbling__EventCapturing, rendering the `EventBubbling__EventCapturing` component. */}
          <Route
            path="/EventBubbling__EventCapturing"
            element={<EventBubbling__EventCapturing />}
          />

          {/* Define a route for the Event_deligation, rendering the ` Event_deligation` component. */}
          <Route path="/Event_deligation" element={<Event_deligation />} />

          {/* Define a route for the DeepAndShallow, rendering the `DeepAndShallow` component. */}
          <Route path="/DeepAndShallow" element={<DeepAndShallow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
