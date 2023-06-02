import React from 'react'
import Image from 'next/image'
import About from '../components/About'
import Skills from '../components/Skills'
import Greeting from '../components/Greeting'
import ProjectBox from './ProjectSection'


export default function Main() {

    return (
        <>
             <div className=' bg-blend '>
                <img src='/assets/profile.jpg' alt='/' className=' relative
                h-[20rem] object-contain object-right-bottom flex w-full items-center justify-center mt-1 lg:h-[26.7rem] lg:object-center lg:h-[27rem] lg:object-cover lg:mt-14     ' />

                <div className='
                absolute top-0 left-[9.5rem] backdrop-blur-sm pb-4 pl-1 pt-20 mt-3  whitespace-pre-line
                lg:left-[29rem] lg:pt-[6rem] lg:p-6 lg:left-[32rem] lg:mr-1
                '>
                    <div className='text-2xl mb-[1rem] lg:mb-[3rem] lg:text-5xl'>
                        <Greeting />
                    </div>   
                    <About/>
                </div>
            </div>
                {/* <p className='text-black'>rito stsigj;ogkjrgokjgsjfghsfjghfdgjhfg;jsfhgsljghsflgjhdfglksjfhgldsfkjghdflkjghfdgiogjarog;ahro[ghrg[oi</p> */}

            <section className="se-container">
                <div className="se-slope">
                    <article className="se-content">
                        <Skills />
                    </article>
                </div >
                <div className="se-slope">
                    <article className="se-content">
                        <div className='grid grid-cols-2 '>
                                <ProjectBox />
                        </div>
                    </article>
                </div>

                <div className="se-slope">
                    <article className="se-content">
                      
                    </article>
                </div>

            </section >

        </>
    )
}