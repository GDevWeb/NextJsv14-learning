"use client";
import Dashboard from "./dashboard/page";

import { useContext } from "react";
import NotAuthorized from "../components/errorPages/notAuthorized";
import { AuthContext } from "../context/AuthContext";

const AdminPage = () => {
  const { isAdmin } = useContext(AuthContext);

  if (!isAdmin) {
    return <NotAuthorized />;
  }

  return (
    <>
      <Dashboard />
    </>
  );
};

export default AdminPage;
