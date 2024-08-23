import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Create a response object that we can modify
  const response = NextResponse.next();

  // Attempt to retrieve the user's theme preference from the cookies
  const themePreference = request.cookies.get("theme");

  // If no theme preference is found, set a default theme
  if (!themePreference) {
    response.cookies.set("theme", "dark", { path: "/" }); // Ensure the path is root to make the cookie available throughout the site
  }

  response.headers.set("custom-header", "custom-value");

  // Return the response, which may include the updated cookies
  return response;

  // Example of conditional redirection based on the request path
  // Uncomment and adjust as needed:
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // Example of programmatic redirection using rewrite (preserves the URL in the browser)
  // Uncomment and adjust as needed:
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.rewrite(new URL("/login", request.url));
  // }
}

// Uncomment and adjust the matcher if you want to apply this middleware to specific routes
// export const config = {
//   matcher: "/profile",
// };
