import Image from 'next/image'


export default function Skills() {
    return (
        <>

            <h2>Skills</h2>
            <div className='flex flex-wrap items-center justify-center' id='skills'>
                <div className='m-5'>
                    <Image src='portfolio/css.png' alt='/' width='180' height='180' className='m-4' />
                </div>

                <div className='m-5'>
                    <Image src='portfolio/html.png' alt='/' width='160' height='160' className='m-4' />
                </div>

                <div className='m-5'>
                    <Image src='portfolio/js.png' alt='/' width='170' height='190' className='mx-4 mb-2' />
                </div>

                <div className='m-5'>
                    <Image src='portfolio/sql.png' alt='/' width='140' height='140' className='m-4' />
                </div>

                <div className='m-5'>
                    <Image src='portfolio/react.png' alt='/' width='140' height='140' className='m-4' />
                </div>

                <div className='m-5'>
                    <Image src='portfolio/next.png' alt='/' width='140' height='140' className='m-6' />
                </div>

                <div className='m-5'>
                    <Image src='portfolio/node.png' alt='/' width='170' height='90' className='m-4' />
                </div>

                <div className='m-5'>
                    <Image src='portfolio/mongo.png' alt='/' width='190' height='90' className='m-4' />
                </div>

                <div className='m-5'>
                    <Image src='portfolio/postgres.png' alt='/' width='230' height='50' className='m-4' />
                </div>

                <div className='m-5'>
                    <Image src='portfolio/bootstrap1.png' alt='/' width='260' height='100' className='m-4' />
                </div>

                <div className='m-5'>
                    <Image src='portfolio/python.png' alt='/' width='190' height='60' className='ml-16' />
                </div>

                <div className='m-5'>
                    <Image src='portfolio/tailwind.png' alt='/' width='230' height='40' className='m-4' />
                </div>
            </div>
        </>
    )
}