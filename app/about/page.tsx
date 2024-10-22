import AboutMeAvatar from '@/components/other/Aboutme-avatar'
import React from 'react'

const AboutPage = () => {
  return (
    <section className='space-y-6 pb-8 pt-12 md:pb-12 md:mt-10 lg:py-44'>
        <div className='flex flex-col'>
            <div className='flex justify-center items-center lg:gap-32 gap-10 lg:flex-row flex-col'>
                <div>
                    <AboutMeAvatar />
                </div>
                <div className=' flex flex-col space-y-5 px-10 text-center lg:text-start'>
                    <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>About me</h1>
                    <hr />
                    <p className='text-balance text-muted-foreground lg:w-[600px] lg:text-base text-sm'>
                        I am a passionate developer with a focus on building scalable and efficient web applications. With experience in modern JavaScript frameworks like Next.js, I enjoy creating dynamic and performant user experiences. I’m constantly exploring new technologies to stay updated in the fast-evolving world of web development. Through my projects, I aim to combine functionality with elegant design, and I thrive on solving complex challenges that push my skills to the next level.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutPage