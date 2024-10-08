"use client";
import { AuthContext } from "@/app/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import navLinks from "./navLinks";

export default function Nav() {
  const { isAuthenticated, userName } = useContext(AuthContext);
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
      <ul className="flex items-center gap-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:underline"
              key={index}
            >
              {link.linkName}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {isAuthenticated ? (
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Welcome {userName}
          </p>
        ) : (
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            welcome visitor
          </p>
        )}
      </div>
    </nav>
  );
}
