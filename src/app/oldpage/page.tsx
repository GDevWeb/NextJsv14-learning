import { redirect } from "next/navigation";

const OldPage = () => {
  redirect("/newpage");
};

export default OldPage;
