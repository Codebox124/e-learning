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

const Navbar = () => {
  return (
    <nav className='py-8'>
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div>logo</div>

        <div className="flex items-center gap-8 text-lightslateblue ">
          {links.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className='flex gap-6'>
          <GoSearch size={25} />
          <BsCart3 size={25} />
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar