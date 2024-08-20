// admin/dashboard/page
"use client";

import NotAuthorized from "@/app/components/errorPages/notAuthorized";
import { AuthContext } from "@/app/context/AuthContext";
import { useContext } from "react";

const DashBoard = () => {
  const { isAdmin } = useContext(AuthContext);

  if (!isAdmin) {
    return <NotAuthorized />;
  }

  return (
    <div id="DashBoard-container" className="w-full min-h-[50vh]">
      <h1>Welcome to the Admin Dashboard</h1>
      <p>Main dashboard content goes here.</p>
    </div>
  );
};

export default DashBoard;
