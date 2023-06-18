import React from 'react'
import Image from 'next/image'
import About from '../components/About'
import Skills from '../components/Skills'
import Greeting from '../components/Greeting'
import ProjectBox from './ProjectSection'


export default function Main() {

    return (
        <>
             <div >
                <img src='/assets/profile.jpg' alt='/' className='flex items-center justify-center relative  w-full object-center object-cover object-contain object-right-bottom h-[28rem] mt-20 lg:h-[37rem] lg:mt-30' />

                <div className='blurEffectSize backdrop-blur-sm pb-4 pl-1 pt-5 whitespace-pre-line lg:p-6 lg:mr-1'>
                    <div className='text-2xl mb-[1rem] lg:mb-[3rem] lg:text-5xl'>
                        <Greeting />
                    </div>   
                    <About/>
                </div>
            </div>
                
            <section className="se-container">
                <div className="se-slope">
                    <article className="se-content">
                        <Skills />
                    </article>
                </div >
                <div className="se-slope">
                    <article className="se-content">
                        <h2 className='text-[#4f0230] text-5xl m-5'>My Projects</h2>
                        <div className='grid grid-cols-1  lg:grid-cols-2 items-center justify-items-center'>
                            
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