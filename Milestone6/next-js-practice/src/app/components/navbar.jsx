import Link from "next/link";
import React from "react";

const Navbar = () => {
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/skill">Skill</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
