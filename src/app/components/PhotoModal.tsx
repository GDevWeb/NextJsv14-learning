// app/components
"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

interface Photo {
  src: string;
  title: string;
}

interface PhotoModalProps {
  photo: Photo | null;
}

const PhotoModal: FC<PhotoModalProps> = ({ photo }) => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  if (!photo) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
        <Image src={photo.src} alt={photo.title} className="w-full h-auto" />
        <p>{photo.title}</p>
        <button type="button" onClick={closeModal} className="mt-4 btn-primary">
          Close
        </button>
      </div>
    </div>
  );
};

export default PhotoModal;
