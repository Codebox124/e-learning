import Link from 'next/link';
import React from 'react'
import { BsCart3 } from "react-icons/bs"
import { GoSearch } from "react-icons/go"

const links = [
  {
    id: 1,
    title: "Courses",
    url: "/courses",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    title: "Template",
    url: "/template",
  },

  {
    id: 4,
    title: "Become a tutor",
    url: "/contact",
  },
];
import  logo from "public/Logo.png"
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className="py-8">
      <div className="container">
        <div>
          <Image src={logo} alt="logo" />
        </div>

        <div className="flex items-center gap-10 text-lightslateblue ">
          {links.map((link) => (
            <Link key={link.id} href={link.url} className='font-semibold text-lightslateblue'>
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex gap-8 items-center">
          <Link href="/search">
            <GoSearch size={25} />
          </Link>
          <Link href="/cart">
            <BsCart3 size={25} />
          </Link>

          <Link
            href="/auth/login"
            className="border p-2 border-[#B1B5BB] rounded-xl px-6  text-darkblue font-semibold"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="p-2 rounded-xl px-6 bg-blue text-white border-none font-semibold "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar