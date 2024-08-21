// app/feed/(..)photo/[id]/pages.tsx
import PhotoModal from "@/app/components/PhotoModal";

const PhotoPage = ({ params }) => {
  const { id } = params;
  const photo = {
    id,
    src: `/image/emotions/anxiety.jpg`,
    title: `Photo ${id}`,
  };

  return <PhotoModal photo={photo} />;
};

export default PhotoPage;
