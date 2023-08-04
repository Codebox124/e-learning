/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Navbar from '../navbar/Navbar'
import hero from "public/hero.png"
import Image from 'next/image';
import Link from 'next/link';
const HomeHeader = () => {
  return (
    <header className="w-full  flex flex-col md:flex-row justify-between items-center">
      <div className="flex-1">
        <h1 className="font-bold text-darkblue text-4xl md:text-5xl">
          Unleash Your <span className="text-yellow">Creativity</span> and Make
          Your Mark on the
          <span className="text-yellow">World</span>
        </h1>
        <p>
          "Embark on a journey of discovery with our platform's expert guidance
          and immersive hands-on projects that help you harness your creative
          energy.
        </p>
        <Link href="/courses">Explore Courses</Link>
      </div>

      <div className="flex-1"></div>
    </header>
  );
}

export default HomeHeader