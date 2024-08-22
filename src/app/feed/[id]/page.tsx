// feed/[id]/page.tsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import photos from "/public/data/photosEmotionsTab";

const ImageOverlay = ({ params }: { params: { src: string } }) => {
  const [currentId, setCurrentId] = useState<number | undefined>(undefined);
  const router = useRouter();
  const imageId = parseInt(params.id, 10);

  useEffect(() => {
    if (imageId && !isNaN(imageId)) {
      setCurrentId(imageId);
    } else {
      router.push("/feed");
    }
  }, [imageId, router]);

  const closeOverlay = () => {
    router.back();
  };

  const image = photos.find((img) => img.id === currentId);

  const handlePrevious = () => {
    setCurrentId((prev) => (prev && prev > 1 ? prev - 1 : photos.length));
  };

  const handleNext = () => {
    setCurrentId((prev) => (prev && prev < photos.length ? prev + 1 : 1));
  };

  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <button
        type="button"
        id="previous1"
        onClick={handlePrevious}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-400 focus:outline-none"
        aria-label="Previous Image"
      >
        &#8249; Previous
      </button>

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
          className="absolute top-3 right-3 p-2 text-white text-3xl hover:text-gray-400 focus:outline-none bg-red-600 rounded"
          aria-label="Close"
        >
          &times;
        </button>
      </div>

      <button
        type="button"
        id="Next"
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-400 focus:outline-none"
        aria-label="Next Image"
      >
        Next &#8250;
      </button>
    </div>
  );
};

export default ImageOverlay;
