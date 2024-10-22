import { CircleFadingPlus, MoonStar } from 'lucide-react'
import React from 'react'
import logo from '../app/public/images/Profil.jpg'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white py-4 px-6 md:px-12 lg:px-24 shadow-md animate-slidein z-50">
            <div className="font-poppins flex flex-wrap items-center justify-between">
                <a href="/" className="flex items-center gap-2">
                    <Image
                        src={logo}
                        height={40}
                        quality={100}
                        alt="Picture of the author"
                        className="border-2 border-[#FC9326] rounded-full"
                    />
                    <span className="font-bold hover:text-[#FC9326] text-base md:text-lg">Rafi Ardinata Riskiansyah</span>
                </a>
                <button className="block md:hidden ml-auto">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <ul className="hidden md:flex gap-4 md:gap-6 lg:gap-10 items-center mt-4 md:mt-0">
                    <li className="hover:text-[#FF7900]">
                        <a href='/'>Home</a>
                    </li>
                    <li className="hover:text-[#FF7900]">
                        <a href='/projects'>Projects</a>
                    </li>
                    <li className="hover:text-[#FF7900]">
                        <a href='/about'>About</a>
                    </li>
                    <li className="hover:text-[#FF7900]">
                        <a href='/'>Coming Soon</a>
                    </li>
                    <li className="hover:text-[#FF7900]">
                        <MoonStar className="w-5 cursor-pointer" />
                    </li>
                    <li>
                        <button className="bg-[#323232] flex gap-2 p-3 rounded-lg transform hover:-translate-y-1 transition duration-400">
                            <CircleFadingPlus className="w-5 text-white" />
                            <a className="text-white">
                                Hire Me
                            </a>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar