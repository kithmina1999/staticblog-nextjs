import ContactForm from '@/components/other/ContactForm'
import React from 'react'

const ContactPage = () => {
  return (
    <section className='max-w-6xl mx-auto pt-24'>
        <div className='flex flex-col gap-2 px-10 xl:px-0 text-center lg:text-start'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Contact me</h1>
            <p className='text-balance text-muted-foreground'>Let&apos;s Connect and Build Something Great Together</p>
        </div>
        <div className='px-10 xl:px-0 py-10'>
            <ContactForm />
        </div>
    </section>
  )
}

export default ContactPage