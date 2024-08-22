interface PhotosTabProps {
  id: number;
  src: string;
  title: string;
  alt: string;
}
const photos: PhotosTabProps[] = [
  {
    id: 1,
    src: "/image/emotions/anxiety.jpg",
    title: "Feeling 1",
    alt: "photo of émotion",
  },
  {
    id: 2,
    src: "/image/emotions/ennui.png",
    title: "Feeling 2",
    alt: "photo of émotion",
  },
  {
    id: 3,
    src: "/image/emotions/envy.jpg",
    title: "Feeling 3",
    alt: "photo of émotion",
  },
  {
    id: 4,
    src: "/image/emotions/joy.jpg",
    title: "Feeling 4",
    alt: "photo of émotion",
  },
];

export default photos;
