"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <Link
        className={` ${pathname === "/home" || pathname === "/" ? "text-green-500 border-b-2" : ""}`}
        href="/home"
      >
        Home
      </Link>
      <Link
        className={
          pathname === "/listedBook" ? "text-green-500  border-b-2" : ""
        }
        href="/listedBook"
      >
        Listed Books
      </Link>
      <Link
        className={
          pathname === "/pagesToRead" ? "text-green-500  border-b-2" : ""
        }
        href="/pagesToRead"
      >
        Pages to Read
      </Link>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex justify-center items-center"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-2xl font-extrabold">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 flex justify-center items-center text-[18px]">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <button className="btn bg-[#23BE0A] text-white">Sign In</button>
          <button className="btn bg-[#59C6D2] text-white ">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
