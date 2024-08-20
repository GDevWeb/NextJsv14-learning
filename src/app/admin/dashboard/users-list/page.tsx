"use client";
import NotAuthorized from "@/app/components/errorPages/notAuthorized";
import { AuthContext } from "@/app/context/AuthContext";
import { useContext } from "react";
import UsersListComponent from "./UsersListComponent";

export const UsersList = async () => {
  const { isAdmin } = useContext(AuthContext);
  let data;
  try {
    const response = await fetch(
      "http://localhost:3000/api/users/usersTab.json"
    );

    if (!response.ok) {
      throw new Error("Error while fetching the user data");
    }

    data = await response.json();
    // console.log(data);
  } catch (error) {
    console.error(error);
    data = [];
  }
  // 1.***State***
  // 2.***Functions***

  if (!isAdmin) {
    return <NotAuthorized />;
  }
  // 3.***Render***
  return (
    <>
      <UsersListComponent userData={data} />
    </>
  );
};

export default UsersList;
