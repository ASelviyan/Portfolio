import Link from "next/link"
import Image from "next/image"

export default function ProjectItem({ title, backgroundImg, technologies, projectLive, color, githubLink, width, height }) {
    return (
        <>
            <div className="flex justify-center flex-col  items-center">
                <h3 className='text-lg tracking-wider text-center' >{title}</h3>
                <div className={
                    color == 1
                        ? "relative flex items-center justify-center w-[34%] h-auto mx-auto shadow-gray-400 rounded-xl  group hover:bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
                        : "relative flex items-center justify-center h-auto w-[35%] mx-auto shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#FF8FAB] to-[#FF8FAB]"
                }>
                    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} width={width} height={height} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h4 className={
                            color == 1
                                ? 'text-center text-[#f64d66] underline decoration-solid '
                                : 'text-center text-white underline decoration-solid'} id='regularH3' >
                            Technologies Used
                        </h4>
                        <p className={color == 1
                            ? 'pb-4 text-[#f64d66] text-center'
                            : 'pb-4  text-white text-center'} id='regularP'>
                            {technologies}
                        </p>

                        <div className="my-3 ">
                            <Link href={projectLive}  >
                                <p className='text-center text-white py-3 rounded-lg bg-[#f64d66] font-bold text-lg cursor-pointer'>Live Link</p>
                            </Link>
                        </div>


                        <Link href={githubLink} >
                            <p className='text-center text-white py-3 rounded-lg bg-[#f64d66] font-bold text-lg cursor-pointer'>GitHub Link</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}