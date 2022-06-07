import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../layout/Loader/Loader";

const AdminRoute = ({ isAdmin, children }) => {
  const { loading, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {isAdmin && user.role !== "admin" ? (
            <Navigate to="/login" />
          ) : (
            children
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default AdminRoute;
