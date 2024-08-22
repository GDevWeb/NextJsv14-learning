// src/app/feed/page
import Image from "next/image";
import Link from "next/link";
import photos from "/public/data/photosEmotionsTab";

const FeedPage = () => {
  const renderPhoto = photos.map((photo) => (
    <Link href={`/feed/${photo.id}`} key={photo.id}>
      <Image
        src={photo.src}
        width={200}
        height={200}
        alt={`${photo.title}`}
        className="w-auto h-auto rounded object-cover"
      />
    </Link>
  ));

  return (
    <>
      <section>
        <h1 className="mb-4">Gallery</h1>
      </section>
      <div
        id="gallery"
        className="w-full p-4 grid place-items-center content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
      >
        {renderPhoto}
      </div>
    </>
  );
};

export default FeedPage;
