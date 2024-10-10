// import Link from "next/link"
import Image from 'next/image'
// import logo from '../app/public/images/Profil.jpg'
import { CircleFadingPlus, Dot, Dribbble, FileDown, Github, Instagram, Linkedin, PanelsTopLeft } from "lucide-react";
import fotoku from './public/images/PolosNew.png';
import laravel from '../app/public/icon/laravel.png';
import next from '../app/public/icon/nextjs.png';
import tailwind from '../app/public/icon/tailwind.png';
import flutter from '../app/public/icon/flutter.png';
import photoshop from '../app/public/icon/Photoshop.png';
import figma from '../app/public/icon/Figma.png';
import telu from '../app/public/images/telu.png';
import logoreact from '../app/public/images/logoreact.png';
import vecteezy from '../app/public/images/vecteezy.png';
// import HyperText from '@/components/ui/hyper-text';
import NumberTicker from '@/components/ui/number-ticker';


export default function Page() {

  return (
    <>
      <div className="flex flex-col size-full">
        {/* Main Content */}
        <main className="bg-[#E9E9E9] min-h-screen pt-[80px] flex">
          <div className="relative w-[70%] pl-24 pr-14">
            <div className="flex justify-between items-end">
              <div className="font-bold">
                <div className="flex flex-col mt-16 gap-0">
                  <a className="text-[150px] text-[#FC9326] animate-slidein leading-none font-poppins">
                    Hi, I&apos;m Rafi
                  </a>
                  <a className='text-[50px] font-bold font-poppins'>
                    Front End Developer
                  </a>
                  {/* <HyperText
                    phrases={["Front End Developer", "UI/UX Designer", "Graphic Designer"]}
                    duration={3500} 
                    className='text-[50px] font-bold font-poppins'
                  /> */}
                </div>

                <div className="mt-8">
                  <p className="text-[35px] text-[#323232]">Lets Work Together</p>
                  <p className="text-[#707070] font-inter font-medium">Creating user experience and visual appealing design</p>
                  <div className="flex flex-row mt-5 gap-4">
                    <button className="bg-[#323232] flex gap-2 p-2 rounded-lg transform hover:-translate-y-1 transition duration-400">
                      <CircleFadingPlus className="w-5 text-white" />
                      <a className="text-white ">
                        Hire Me
                      </a>
                    </button>
                    <button className="border-2 border-[#707070] flex gap-2 p-2 rounded-lg transform hover:-translate-y-1 transition duration-400">
                      <FileDown className="w-5 text-[#707070]" />
                      <a className="text-[#323232]">
                        Download CV
                      </a>
                    </button>
                    <button className="border-2 border-[#707070] flex gap-2 p-2 rounded-lg transform hover:-translate-y-1 transition duration-400">
                      <PanelsTopLeft className="w-5 text-[#707070]" />
                      <a className="text-[#323232]">
                        Projects
                      </a>
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex flex-row text-center">
                    <span className="w-28">
                      <NumberTicker value={5} className='font-poppins text-[40px]' />
                      <span className='font-poppins text-[40px]'>+</span>
                      <p className="text-[#707070] font-poppins">My Projects Done</p>
                    </span>
                    <span className="w-64">
                      <NumberTicker value={6} className='font-poppins text-[40px]' />
                      <span className='font-poppins text-[40px]'>+</span>
                      <p className="text-[#707070] font-poppins">Completed Licenses & Certifications</p>
                    </span>
                    <span className="w-28">
                      <NumberTicker value={4} className='font-poppins text-[40px]' />
                      <span className='font-poppins text-[40px]'>+</span>
                      <p className="text-[#707070] font-poppins">Years Experience</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5 items-center justify-center animate-slidein">
                <Image
                  src={laravel.src}
                  alt="Laravel"
                  width={48}
                  height={48}
                />
                <Image
                  src={next.src}
                  alt="Nextjs"
                  width={48}
                  height={48}
                />
                <Image
                  src={logoreact.src}
                  alt="React"
                  width={48}
                  height={48}
                />
                <Image
                  src={tailwind.src}
                  alt="Tailwind"
                  width={48}
                  height={40}
                />
                <Image
                  src={flutter.src}
                  alt="Flutter"
                  width={48}
                  height={48}
                />
                <Image
                  src={photoshop.src}
                  alt="Photoshop"
                  width={48}
                  height={48}
                />
                <Image
                  src={figma.src}
                  alt="Figma"
                  width={48}
                  height={48}
                />
              </div>
            </div>

            <div className="pt-11 flex items-center gap-16 animate-slidein">
              {/* Telkom University*/}
              <div className="flex items-center gap-4">
                <Image
                  src={telu}
                  // width={10}
                  height={40}
                  quality={100}
                  alt="Picture of the author"
                  className=""
                />
                <div>
                  <p className="font-medium">Currently studying in</p>
                  <p className="text-red-600 font-bold">Telkom University Surabaya</p>
                  <p className="text-gray-500 font-medium">Feb 2021 - Present | Grade: 3.85</p>
                </div>
              </div>

              {/* Vecteezy */}
              <div className="flex items-center gap-4">
                <Image
                  src={vecteezy}
                  // width={10}
                  height={40}
                  quality={100}
                  alt="Picture of the author"
                  className=""
                />
                <div>
                  <p className="font-medium">Currently freelance in Jul 2024 - Present</p>
                  <p className="text-[#FF7900] font-bold">Vecteezy Contributor - Graphic Designer</p>
                  <p className="text-gray-500 font-medium">Jul 2024 - Present</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src={telu}
                  // width={10}
                  height={40}
                  quality={100}
                  alt="Picture of the author"
                  className=""
                />
                <div>
                  <p className="font-medium">Currently internship in</p>
                  <p className="text-red-600 font-bold">Laboratory Active Talent - Design Graphic</p>
                  <p className="text-gray-500 font-medium">Position in Front End Web Developer</p>
                </div>
              </div>
            </div>

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
          </div>
          <div className="w-[30%]">
            <div className="bg-[#FC9326] animate-slidein bg-center w-full h-full bg-cover bottom-auto" style={{
              backgroundImage: `url(${fotoku.src})`,
            }}>
            </div>
          </div>
        </main>

      </div >
    </>
  );
}
