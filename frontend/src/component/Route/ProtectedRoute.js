import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../layout/Loader/Loader";

const ProtectedRoute = ({ children }) => {
 
  // const [loading , setLoading ] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState(null);
  const { loading, isAuthenticated } = useSelector((state) => state.user);


  useEffect(() => {
    console.log(loading);
    // setLoading(loading);
    // setIsAuthenticated(isAuthenticated);
    // setUser(user);
  })
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
        
              {isAuthenticated ? children : <Navigate to="/login" /> }
              
            
        </Fragment>
      )}
      {/* {loading === false && 
        isAuthenticated ? children : <Navigate to="/login" />
      } */}
    </Fragment>
  );
};

export default ProtectedRoute;
