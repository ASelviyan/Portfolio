import React from 'react'
import Image from 'next/image'
import About from '../components/About'
import Skills from '../components/Skills'


export default function Main() {

    return (
        <>
            <section className="se-container">
                <div className="se-slope">
                    <article className="se-content">
                        <div className='w-full text-center '>
                            <div>
                                <Image src='/../public/assets/profilePic3.PNG' alt='/' width='260' height='240' className='rounded-full' />
                                <h2 className='mb-4'>Angelika Selviyan</h2>
                                <p className='mt-6 font-medium BigFirstLetter'>I&apos;m a Software Developer with a creative mindset who believes that art and programming are intertwined. Both allow you to express your unique vision. The values I bring are collaboration through a friendly personal demeanor, an optimistic mindset, and a solution-focused mentality which comes from a strong drive to learn more about a problem and never give up on it. </p>
                            </div>

                        </div>
                    </article>
                </div >
                <div className="se-slope">
                    <article className="se-content">
                        <About />
                    </article>
                </div>

                <div className="se-slope">
                    <article className="se-content">
                        <Skills />
                    </article>
                </div>

            </section >

        </>
    )
}