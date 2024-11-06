"use client";

import Link from "next/link";
// import './style.scss'

export default function Navbar() {
  return (
    <div className="Header">
      <div className="navbar w-5/6 mx-auto flex justify-between items-center">
        <div className="flex flex-col p-4">
          <p className="text-2xl font-bold">Surya Kanta Ghosh</p>
          <p className="text-xl">App and web developer</p>
        </div>
        <div className="flex flex-row h-full Links">
          <Link href={"/"} className="p-6 text-lg">
            Home
          </Link>
          <Link href={"/profile"} className="p-6 text-lg">
            Profile
          </Link>
          <Link href={"/experience"} className="p-6 text-lg">
            Experience
          </Link>
          <Link href={"/portfolio"} className="p-6 text-lg">
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
