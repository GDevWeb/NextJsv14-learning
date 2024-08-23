// app/profile/api/route.tsx
import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  //using nextJs method
  cookies().set("resultPerPage", "20");
  //manually setCookie
  const theme = request.cookies.get("theme");

  const headersList = headers();

  console.log(requestHeaders.get("Authorization"));
  console.log(headersList.get("Authorization"));
  console.log(theme);
  console.log(cookies().get("resultPerPage"));

  return new Response("<h1>Profile API DATA</h1>", {
    headers: {
      "Content-Type": "text/HTML",
      "Set-Cookie": "theme=dark", //manually setCookie
    },
  });
}
