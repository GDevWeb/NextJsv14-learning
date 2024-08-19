import UsersListComponent from "./UsersListComponent";

export const UsersList = async () => {
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
  // 3.***Render***
  return (
    <>
      <UsersListComponent userData={data} />
    </>
  );
};

export default UsersList;
