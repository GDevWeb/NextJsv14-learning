interface NavLinksTypes {
  href: string;
  linkName: string;
}

const navLinks: NavLinksTypes[] = [
  { href: "/", linkName: "Home" },
  { href: "/about", linkName: "About" },
  { href: "/articles", linkName: "Articles" },
  { href: "/services", linkName: "Services" },
  { href: "/contact", linkName: "Contact" },
  { href: "/login", linkName: "Login" },
  { href: "/feed", linkName: "Feed" },
];

export default navLinks;
