"use client";
import Link from "next/link";
import React from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about/" },
  { title: "Projects", path: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <main>
      <ul className="flex item-center gap-x-10">
        {pages.map(({ title, path }, i) => {
          return (
            <li
              className={clsx(
                "lowercase  underline-offset-2 hover:underline ",
                pathname === title && "underline"
              )}
              key={i}
            >
              <Link href={path}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Navbar;
