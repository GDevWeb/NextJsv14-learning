"use client";
import { AuthContext } from "@/app/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import errorImageNotAuthorized from "../../../../public/image/errorPicture/notAuthorized.webp";

const NotAuthorized = () => {
  // ***1.State***
  const { isAuthenticated } = useContext(AuthContext);
  const [delay, setDelay] = useState(10);

  // ***2.Functions***
  const router = useRouter();

  // Redirection :
  useEffect(() => {
    const countDownInterval = setInterval(() => {
      setDelay((prevDelay) => {
        if (prevDelay > 0) {
          return prevDelay - 1;
        } else {
          clearInterval(countDownInterval);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(countDownInterval);
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      const redirectToHome = setTimeout(() => {
        router.push("/");
      }, delay * 1000);

      return () => clearTimeout(redirectToHome);
    }
  }, [isAuthenticated, delay, router]);

  return (
    <div className="w-full h-full m-auto p-4 flex flex-wrap items-center justify-center ">
      <Image
        src={errorImageNotAuthorized}
        alt="error 404 picture"
        className="rounded"
      />
      <div className="w-full p-2 flex items-center gap-2 justify-center">
        {!isAuthenticated ? (
          <p className="w-full text-2xl text-center text-orange-500">
            You'll be redirected in {delay} seconds...
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default NotAuthorized;
