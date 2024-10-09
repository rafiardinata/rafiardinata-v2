import { CircleFadingPlus, MoonStar } from 'lucide-react'
import React from 'react'
import logo from '../app/public/images/Profil.jpg'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white py-4 px-24 shadow-md">
            <div className="font-poppins flex items-center justify-between">
                <a href="/" className="flex items-center gap-2">
                    <Image
                        src={logo}
                        height={40}
                        quality={100}
                        alt="Picture of the author"
                        className="border-2 border-[#FC9326] rounded-full"
                    />
                    <span className="font-bold hover:text-[#FC9326]">Rafi Ardinata Riskiansyah</span>
                </a>
                <ul className="flex gap-10 items-center">
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
                        <div className="bg-[#323232] flex gap-2 p-3 rounded-lg">
                            <CircleFadingPlus className="w-5 text-white" />
                            <a className="text-white">
                                Hire Me
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar