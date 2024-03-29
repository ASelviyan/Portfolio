import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Navbar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="fixed top-0  w-full h-[3.5rem] shadow-xl z-[100] bg-[#4f0230] lg:h-20 ">

            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <h1 className="m-4">AS</h1>
                <div>
                    <ul className="hidden md:flex">
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href='/projects'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-white/70" : ""}>

                <div className={
                    nav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h1 className="text-[#4f0230]">AS</h1>
                            <div onClick={handleNav} className='rounded-full shadow-lg bg-[#4f0230] shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="text-black w-[85%] md:w-[90%] py-4">Let&apos;s build something legendary</p>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href='/'>
                                <li className="py-4 text-sm text-black">Home</li>
                            </Link>

                            <Link href='/'>
                                <li className="py-4 text-sm text-black">About</li>
                            </Link>

                            <Link href='/#about'>
                                <li className="py-4 text-sm text-black">Skills</li>
                            </Link>

                            <Link href='/projects'>
                                <li className="py-4 text-sm text-black">Projects</li>
                            </Link>

                            <Link href='/#contact'>
                                <li className="py-4 text-sm text-black">Contact</li>
                            </Link>
                        </ul>

                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#4f0230]">Lets Connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedin className="text-[#4f0230]" />
                                </div>
                                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub className="text-[#4f0230]" />
                                </div>
                                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail className="text-[#4f0230]" />
                                </div>
                                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <BsFillPersonLinesFill className="text-[#4f0230]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}