// app/time/route.tsx

// caching in route handlers

export const dynamic = "force-dynamic"; // forcing the caching for CSR

export async function GET() {
  const time = new Date().toLocaleDateString();
  const hours = new Date().toLocaleTimeString();

  return Response.json({
    time,
    hours,
  });
}
