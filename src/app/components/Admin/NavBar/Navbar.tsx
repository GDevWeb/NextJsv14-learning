// src/app/components/NavBar.tsx

"use client";
import { AuthContext } from "@/app/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";

const Navbar = () => {
  const { isAdmin } = useContext(AuthContext);

  return (
    <nav className="w-full p-2">
      <ul className="flex gap-2">
        {isAdmin && (
          <>
            <li className="text-lg font-semibold">
              <Link href="/admin/dashboard">Dashboard</Link>
            </li>
            <li className="text-lg font-semibold">
              <Link href="/admin/users-list">User-List</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
