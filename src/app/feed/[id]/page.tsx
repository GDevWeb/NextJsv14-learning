// feed/[id]/page.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface PhotosTabProps {
  id: number;
  src: string;
  title: string;
}
const photos: PhotosTabProps[] = [
  { id: 1, src: "/image/emotions/anxiety.jpg", title: "Feeling 1" },
  { id: 2, src: "/image/emotions/ennui.png", title: "Feeling 2" },
  { id: 3, src: "/image/emotions/envy.jpg", title: "Feeling 3" },
  { id: 4, src: "/image/emotions/joy.jpg", title: "Feeling 4" },
];

const ImageOverlay = ({ params }: { params: { src: string } }) => {
  const router = useRouter();
  const imageId = parseInt(params.id, 10);
  const image = photos.find((img) => img.id === imageId);

  useEffect(() => {
    if (!image) {
      router.push("/feed");
    }
  }, [image, router]);

  const closeOverlay = () => {
    router.back();
  };

  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={500}
          height={500}
          className="max-w-full max-h-full"
        />
        <button
          type="button"
          onClick={closeOverlay}
          className="absolute top-3 right-3 text-white text-3xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageOverlay;
