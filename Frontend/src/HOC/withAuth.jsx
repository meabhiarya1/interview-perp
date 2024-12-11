// Import the `useEffect` hook for side effects and `useNavigate` for navigation from `react-router-dom`.
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Define a Higher-Order Component (HOC) named `withAuth`.
// It takes a `WrappedComponent` as an argument and returns a new component with authentication logic.
const withAuth = (WrappedComponent) => {
  // Define the new component returned by the HOC.
  const withAuthComponent = (props) => {
    // Get the `navigate` function to programmatically navigate between routes.
    const navigate = useNavigate();

    // Define the authentication status (for now, it is hardcoded as `true`).
    // Replace this with your actual authentication logic.
    const isAuth = true;

    // Use `useEffect` to perform a side effect after the component mounts or when `isAuth` or `navigate` changes.
    useEffect(() => {
      // If the user is not authenticated, navigate to the home page ("/").
      if (!isAuth) {
        navigate("/");
      }
    }, [isAuth, navigate]); // Dependencies ensure this effect runs when `isAuth` or `navigate` changes.

    // If the user is authenticated, render the `WrappedComponent` with all its props.
    // Otherwise, render `null` (nothing is displayed).
    return isAuth ? <WrappedComponent {...props} /> : null;
  };

  // Return the newly created component with authentication logic.
  return withAuthComponent;
};

// Export the `withAuth` HOC as the default export so it can be used in other files.
export default withAuth;
