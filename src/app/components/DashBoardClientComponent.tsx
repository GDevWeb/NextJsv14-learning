import Image from "next/image";
import Link from "next/link";
import { User } from "../types/users";

interface DashBoardClientComponentProps {
  userData: User[];
}

export const DashBoardClientComponent: React.FC<
  DashBoardClientComponentProps
> = ({ userData }) => {
  if (!userData) {
    return <h1 className="text-red-600">No user data found!</h1>;
  }

  const renderUsers = userData.map((user) => (
    <Link href={`dashboard/${user.id}`} key={user.id}>
      <div
        id="card"
        className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
      >
        <Image
          src={user.avatar}
          alt={`avatar of ${user.name}`}
          width={100}
          height={100}
          className="rounded mb-4"
        />
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">Username: {user.name}</p>
          <p className="font-semibold text-gray-600">
            Age: <span className="font-normal">{user.age}</span> old {""}
            {user.age > 1 ? "years" : "year"}
          </p>
          <p className="font-semibold text-gray-600">
            Hobbies:{" "}
            <span className="font-normal">{user.hobbies.join(", ")}</span>
          </p>
          <p className="font-semibold text-gray-600">
            Email: <span className="font-normal">{user.email}</span>
          </p>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderUsers}
      </section>
    </>
  );
};

export default DashBoardClientComponent;
