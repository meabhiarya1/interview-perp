import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const isAuth = true; // Replace this with your authentication logic

    useEffect(() => {
      if (!isAuth) {
        navigate("/");
      }
    }, [isAuth, navigate]);
    return isAuth ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
