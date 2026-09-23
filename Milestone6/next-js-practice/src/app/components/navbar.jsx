"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className=" h-20 z-50 bg-amber-50 flex justify-around items-center">
      <div>
        <Link className="text-4xl" href="/">
          {" "}
          Piyas Ahmed
        </Link>
      </div>
      <nav>
        <ul className="flex justify-between items-center gap-5">
          <li>
            <Link
              className={`${pathName === "/" ? "text-blue-500" : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName === "/about" ? "text-blue-500" : ""}`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName === "/blogs" ? "text-blue-500" : ""}`}
              href="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName === "/skill" ? "text-blue-500" : ""}`}
              href="/skill"
            >
              Skill
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName === "/todos" ? "text-blue-500" : ""}`}
              href="/todos"
            >
              Todos
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName === "/contact" ? "text-blue-500" : ""}`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
