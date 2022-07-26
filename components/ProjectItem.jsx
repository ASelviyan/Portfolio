import Link from "next/link"
import Image from "next/image"

export default function ProjectItem({ title, backgroundImg, language, projectLive, color, githubLink }) {
    return (
        <>
            <div className={
                color == 1
                    ? "relative flex items-center justify-center h-auto w-full shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
                    : "relative flex items-center justify-center h-auto w-full shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#d6909b] to-[#d6909b]"
            }>
                <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-[#f64d66] tracking-wider text-center' >{title}</h3>
                    <p className='pb-4 pt-4 text-[#f64d66] text-center'>{language}</p>
                    <Link href={projectLive}>
                        <p className='text-center py-3 rounded-lg bg-[#f64d66] font-bold text-lg cursor-pointer'>Live Link</p>
                    </Link>
                    <Link href={githubLink}>
                        <p className='text-center py-3 rounded-lg bg-[#f64d66] font-bold text-lg cursor-pointer'>GitHub Link</p>
                    </Link>
                </div>
            </div>
        </>
    )
}