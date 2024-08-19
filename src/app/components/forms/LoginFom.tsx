"use client";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/app/context/AuthContext";

// TypeScript
interface FormState {
  [key: string]: string;
}

const LoginFom = () => {
  // 1. ***State***
  const [formData, setFormData] = useState<FormState>({
    email: "",
    password: "",
  });
  const [inputErrorMessage, setInputErrorMessage] = useState<FormState>({
    email: "",
    password: "",
  });

  const {
    isAuthenticated,
    setIsAuthenticated,
    isAdmin,
    setIsAdmin,
    userName,
    setUserName,
  } = useContext(AuthContext);

  // 2. *** Functions ***
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: value,
    }));
  };

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`You inputted : ${formData.email} and ${formData.password}`);

    const { email, password } = formData;
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm;
    if (email.trim() === "" || !email.match(regexMail)) {
      setInputErrorMessage((previous) => ({
        ...previous,
        email: "Input a valid email",
      }));
    }

    // password
    const regexPassword =
      /^(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,64}$/;
    if (password.trim() === "" || !password.match(regexPassword)) {
      setInputErrorMessage((previous) => ({
        ...previous,
        password: "Input a valid password",
      }));
    }
    checkLogin();
  };
  /**
   * checkLogin function find if the inputted email exists and next check the inputted password matches with the user email. If true redirects the user to the dashboard page otherwise toggle an error message
   * @returns
   */
  const checkLogin = async () => {
    try {
      // fetch data :
      const response = await fetch("/api/users/usersTab.json");

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const users = await response.json();
      console.log(users);

      if (!users) {
        console.warn("No userData");
      } else {
        console.log("usersData from login form", users);
      }
      // find if an user matches with email inputted:
      const user = users.find(
        (user: { email: string }) => user.email == formData.email
      );

      if (!user) {
        setInputErrorMessage((previous) => ({
          ...previous,
          email: "User not found",
        }));
        return;
      }

      if (user.password !== formData.password) {
        setInputErrorMessage((previous) => ({
          ...previous,
          password: "Incorrect password",
        }));
        return;
      }

      setIsAuthenticated(true);
      setUserName(user.name);
      console.warn("user authenticated");

      // conditionally redirection :
      if (user.status === "admin") {
        setIsAdmin(true);
        router.push("/admin");
      } else if (user.status === "member") {
        router.push("/users/dashboard");
      }

      // clear formData
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
      setInputErrorMessage((previous) => ({
        ...previous,
        email: "An error occurred while logging in. Please try again.",
      }));
    }
  };

  // 3. *** Render ***
  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="formGroup">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {inputErrorMessage.email && (
            <p className="mt-2 text-sm text-red-600">
              {inputErrorMessage.email}
            </p>
          )}
        </div>
        <div className="formGroup">
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            value={formData.password}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {inputErrorMessage.password && (
            <p className="mt-2 text-sm text-red-600">
              {inputErrorMessage.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginFom;
