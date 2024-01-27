
import Link from "next/link";
import React from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about/" },
  { title: "Projects", path: "/about" },
];

const page = () => {
  
  return <main>this is the main page</main>;
};

export default page;
