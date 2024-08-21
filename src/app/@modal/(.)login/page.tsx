// @modal/(.)login/page.tsx
"use client";

import LoginFom from "@/app/components/forms/LoginFom";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
        <button
          type="button"
          onClick={closeModal}
          className="absolute w-[25px] h-[25px]  p-2 top-3 right-3 flex items-center justify-center text-white text-lg font-semibold hover:text-gray-800 bg-red-600 rounded"
        >
          &times;
        </button>
        <LoginFom />
      </div>
    </div>
  );
};

export default LoginModal;
