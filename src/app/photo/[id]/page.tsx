const PhotoPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Photo {params.id}</h1>
      <p>Full details about the photo</p>
    </div>
  );
};

export default PhotoPage;
