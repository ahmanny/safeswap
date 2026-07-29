import { redirect } from "next/navigation";

export default function Home() {
  const activePage = process.env.NEXT_PUBLIC_ACTIVE_PAGE;

  if (activePage === "sellers") {
    redirect("/sellers");
  }

  redirect("/buyers");
}
