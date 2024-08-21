export default function page({ params }: { params: { id: string } }) {
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div style={{ background: "white", margin: "auto", padding: "20px" }}>
        <h1>Photo {params.id}</h1>
        <p>Details about the photo.</p>
      </div>
    </div>
  );
}
