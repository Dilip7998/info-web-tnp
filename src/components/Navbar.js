'use client'
import Image from "next/image";
import Link from "next/link";
import  { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/public/download.png"

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name:"Home",
      link: "/",
    },
    {
      id: 2,
      name:"about",
      link: "About",
    },
    {
      id: 3,
      name:"teams",
      link: "Teams",
    },
    {
      id: 4,
      name:"Projects",
      link: "Projects",
    },
    {
      id: 5,
      name:"Publications",
      link: "Publications",
    },
    {
      id: 6,
      name:"contact Us",
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
      <div>
       <h1 className="text-5xl font-signature ml-2">
          {/* <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            T&P
          </a> */}
          <Image src={logo} width={50} height={50} className="rounded"></Image>

          
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id,name, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-even md:hidden z-10 absolute top-20 left-0 w-full bg-gradient-to-b   from-black to-gray-800 text-gray-500 ">
          {links.map(({ id,name, link }) => (
            <li
              key={id}
              className="px-2 cursor-pointer capitalize py-4 text-2xl"
            >
              <Link onClick={() => setNav(!nav)} href={link} className="block  hover:bg-white  hover:text-black px-3 py-3 transition-all duration-500">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;