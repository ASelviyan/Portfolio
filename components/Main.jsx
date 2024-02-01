import React from 'react'
import Image from 'next/image'
import About from '../components/About'
import Skills from '../components/Skills'
import Greeting from '../components/Greeting'
import ProjectBox from './ProjectSection'


export default function Main() {

    return (
        <>
                
                        <div className='relative h-full w-full'>
                            <img src='/assets/portfolio/profile.jpg' alt='portfolio picture' className=' w-full object-right-bottom border-solid border-4 border-[#4f0230] ' />
                            <div className=' absolute backdrop-blur-sm top-1/4 right-10 h-[12rem] w-[40rem] p-10'>
                            {/* pb-4 pl-1 pt-5 whitespace-pre-line lg:p-6 lg:mr-1'  */}
                                <Greeting />
                                <About/>
                            </div>
                        </div>
                  
            <section className="se-container">
                
                <div className="se-slope">
                    <article className="se-content">
                    <h2 className='text-5xl mx-10 mb-10'>My Abilities</h2>
                        <Skills />
                    </article>
                </div >
                <div className="se-slope">
                    <article className="se-content">
                        <h2 className='text-5xl mx-10 mb-10'>My Projects</h2>
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