import { User } from "@/app/types/users";
import Image from "next/image";
import Link from "next/link";
const UserDashBoard = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  let user: User | null = null;

  try {
    const response = await fetch(
      "http://localhost:3000/api/users/usersTab.json"
    );

    if (!response.ok) {
      throw new Error("Error while fetching the user data");
    }

    const data: User[] = await response.json();
    user = data.find((user) => user.id === params.id) || null;

    if (!user) {
      throw new Error(`User with id ${id} not found !`);
    }

    console.log(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return <p className="text-red-600">Error: {error.message}</p>;
    }
  }
  return (
    <>
      <section>
        <button type="button" className="button-primary">
          <Link href={"/"}>Back to home</Link>
        </button>
      </section>
      <div className="w-full min-h-[50vh] m-auto flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        <Image
          src={user?.avatar}
          alt={`Avatar of ${user?.name}`}
          width={150}
          height={150}
          className="rounded mb-4"
        />
        <div className="text-center">
          <p className="text-2xl font-semibold mb-2">Username: {user?.name}</p>
          <p className="font-semibold text-gray-600">
            Age: <span className="font-normal">{user?.age}</span> old{" "}
            {user?.age > 1 ? "years" : "year"}
          </p>
          <p className="font-semibold text-gray-600">
            Hobbies:{" "}
            <span className="font-normal">{user?.hobbies.join(", ")}</span>
          </p>
          <p className="font-semibold text-gray-600">
            Email: <span className="font-normal">{user?.email}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserDashBoard;
