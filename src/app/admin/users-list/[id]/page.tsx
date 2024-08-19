"use client";
import { User } from "@/app/types/users";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UserDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const router = useRouter();

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
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return <p className="text-red-600">Error: {error.message}</p>;
    }
  }

  return (
    <>
      <section className="mb-6">
        <button
          type="button"
          className="button-primary"
          onClick={() => router.back()}
        >
          Back to users list
        </button>
      </section>
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
        <Image
          src={user?.avatar}
          alt={`Avatar of ${user?.name}`}
          width={150}
          height={150}
          className="rounded mb-6"
        />
        <div className="text-center space-y-4">
          <p className="text-2xl font-semibold">Username: {user?.name}</p>
          <p className="text-gray-600">
            <span className="font-semibold">Age:</span>{" "}
            <span className="font-normal">{user?.age}</span> years old
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Hobbies:</span>{" "}
            <span className="font-normal">{user?.hobbies.join(", ")}</span>
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span>{" "}
            <span className="font-normal">{user?.email}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
