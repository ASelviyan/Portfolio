import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFileEarmarkTextFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { Tooltip, Button } from "@nextui-org/react";





export default function Footer() {
    return (
        <>
            <div className=" bottom-0 w-full h-20 shadow-xl z-[100] bg-[#4f0230] p-[4rem]" >
                <div className="flex flex-wrap items-center justify-evenly mt-16 w-full ">

                    <div className='flex flex-col items-center justify-center break-all w-24  sm:m-0 mt-6'>
                        <a href='https://www.linkedin.com/in/angelika-selviyan-46378b196/' target='_blank' rel="noopener noreferrer">
                            <div className="rounded-full shadow-lg bg-[#ffff] shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaLinkedin className="text-[#4f0230] " />
                            </div>
                        </a>
                        <p >LinkedIn</p>

                    </div>


                    <div className='flex flex-col items-center justify-center break-all w-24  sm:m-0 mt-6'>
                        <a href='https://github.com/ASelviyan' target='_blank' rel="noopener noreferrer">
                            <div className="rounded-full shadow-lg bg-[#ffff] shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaGithub className="text-[#4f0230]" />
                            </div>
                        </a>
                        <p >GitHub</p>
                    </div>


                    <div className='flex flex-col items-center justify-center break-all w-24 sm:m-0 mt-6'>
                        <Tooltip content={"AngelikaSelviyan1972@gmail.com"}>
                            <div data-tooltip-style="light" className="rounded-full shadow-lg bg-[#ffff] shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <HiMail className="text-[#4f0230]" />
                            </div>
                        </Tooltip>

                        <p >Email </p>

                    </div>


                    <div className='flex flex-col items-center justify-center break-all w-24 sm:m-0 mt-6'>
                        <a href='https://docs.google.com/document/d/17siVA0_XuaqhepP9zJN5FYkSgUqyW_8psMYMTEWEE1A/edit' target='_blank' rel="noopener noreferrer">
                            <div className="flex  items-center justify-center rounded-full shadow-lg bg-[#ffff] shadow-grey-400 p-3  cursor-pointer hover:scale-105 ease-in duration-300">
                                <BsFileEarmarkTextFill className="text-[#4f0230] " />
                            </div>
                        </a>
                        <p >Resume</p>
                    </div>

                </div>

            </div>
        </>
    )
}