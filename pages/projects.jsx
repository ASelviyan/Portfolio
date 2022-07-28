
import ProjectItem from '../components/ProjectItem'

export default function Project() {
    return (
        <>
            <div className='w-full mt-24'>
                {/* <div className='max-w-[1240px] mx-auto px-2 '> */}
                <p className="text-xl tracking-widest uppercase">Projects</p>
                <h2 className="py-4">Things I&apos;ve Created </h2>
                {/* <div className="grid md:grid-cols-2 gap-8"> */}

                <section className="se-container ">

                    <div className="se-slope ">
                        <article className="se-content">


                            <ProjectItem
                                title='Tic Tac Toe Game'
                                backgroundImg='/assets/projects/tictactoe1.PNG'
                                width='700'
                                height='650'
                                technologies='HTML, CSS, and vanilla JavaScript'
                                projectLive='https://aselviyan.github.io/sei-tic-tac-toe/'
                                githubLink='https://github.com/ASelviyan/sei-tic-tac-toe'
                                color='1'
                            />
                        </article>
                    </div>

                    <div className="se-slope">
                        <article className="se-content">
                            <ProjectItem
                                title=' Matching Game'
                                backgroundImg='/assets/projects/matchingGame1.png'
                                width='700'
                                height='650'
                                technologies='HTML, CSS, and vanilla JavaScript'
                                projectLive='https://aselviyan.github.io/Matching_Game/'
                                githubLink='https://github.com/ASelviyan/Matching_Game'
                                color='0'
                            />
                        </article>
                    </div>


                    <div className="se-slope">
                        <article className="se-content">
                            <ProjectItem
                                title='Super Hero Application'
                                backgroundImg='/assets/projects/superHero1.png'
                                width='700'
                                height='650'
                                technologies='NodeJS, Express, Bootstrap and PostgreSQL'
                                projectLive='https://super-hero-website.herokuapp.com/'
                                githubLink='https://github.com/ASelviyan/Super-Hero'
                                color='1'
                            />
                        </article>
                    </div>

                    <div className="se-slope">
                        <article className="se-content">
                            <ProjectItem
                                title='BugOut Application'
                                backgroundImg='/assets/projects/bugOut1.PNG'
                                width='700'
                                height='650'
                                technologies='NodeJS, React, MongoDB, Mongoose, and Tailwind'
                                projectLive='http://bugout-p3.netlify.app'
                                githubLink='https://github.com/ASelviyan/BugOut-Client'
                                color='0'
                            />
                        </article>
                    </div>


                    <div className="se-slope">
                        <article className="se-content">
                            <ProjectItem
                                title='Ensemble Application'
                                backgroundImg='/assets/projects/Ensemble1.PNG'
                                width='700'
                                height='650'
                                technologies='React.js'
                                projectLive='https://62d72ddfb37fce2eea6ee563--ensemble-closet.netlify.app/login'
                                githubLink='https://github.com/ASelviyan/Ensemble-Client'
                                color='1'
                            />
                        </article>
                    </div>

                </section>
            </div>

            {/* </div> */}
            {/* </div > */}
        </>
    )
}