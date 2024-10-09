import { Dot, Dribbble, Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className="absolute bottom-0 left-0 right-0">
            <div className="bg-[#323232] py-5 px-16 flex items-center justify-between">
                <div className="flex items-center text-white gap-2">
                    <Dot />
                    <span className="font-inter font-bold">Follow Me</span>
                    <Dribbble />
                    <Instagram />
                    <Github />
                    <Linkedin />
                </div>
                <div className="text-white font-poppins">
                    &copy; Rafi Ardinata Riskiansyah
                </div>
            </div>
        </footer>
    )
}

export default Footer