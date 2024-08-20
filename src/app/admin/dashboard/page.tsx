// admin/dashboard/page
"use client";

import NotAuthorized from "@/app/components/errorPages/notAuthorized";
import { AuthContext } from "@/app/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";

const DashBoard = () => {
  const { isAdmin } = useContext(AuthContext);

  if (!isAdmin) {
    return <NotAuthorized />;
  }

  return (
    <>
      <div
        id="DashBoard-container"
        className="w-full min-h-[50vh] m-auto flex flex-wrap items-start justify-between"
      >
        <h1>Welcome to the Admin Dashboard</h1>

        <section className="w-full m-auto flex items-center justify-between">
          <div className="grid m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold">Total Users</h2>
              <p className="text-4xl mt-4">150</p>
            </div>
            <div className="bg-green-500 p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold">Articles Published</h2>
              <p className="text-4xl mt-4">85</p>
            </div>
            <div className="bg-red-500 p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold">Comments</h2>
              <p className="text-4xl mt-4">120</p>
            </div>
          </div>
        </section>

        <section className="w-full m-auto flex items-center justify-between">
          <div className="w-full m-auto p-2 flex flex-wrap items-center justify-evenly">
            <h2 className="w-full text-xl text-center font-bold">
              Quick Actions
            </h2>
            <div className="flex space-x-4 mt-4">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Create New Article
              </button>
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                <Link href={"/admin/dashboard/users-list"}> Manage Users</Link>
              </button>
            </div>
          </div>
        </section>
        <section className="w-full m-auto flex items-center justify-between">
          <div className="w-full m-auto p-2 flex flex-wrap items-center justify-evenly">
            <h2 className="w-full text-xl text-center font-bold">
              Recent Activities
            </h2>
            <ul className="mt-4 space-y-2">
              <li>Article "Introduction to Next.js" was published by Admin.</li>
              <li>User "JohnDoe" joined the platform.</li>
              <li>Comment on "How to use Next.js" was added by Jane.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default DashBoard;
