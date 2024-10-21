'use client';
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
import { Icons } from '../icon';
import { siteConfig } from '@/config/site';

const MobileNav = () => {
    const [open,setOpen]=useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <Button variant='outline' className='w-10 px-0 sm:hidden me-6'>
                <Menu className='h-5 w-5'/>
                <span className='sr-only'>Toggle Theme</span>
            </Button>
        </SheetTrigger>
        <SheetContent side='right'>
            <MobileLink href="/" className='flex items-center'>
                <Icons.logo className='me-2 h-4 w-4' />
                <span className='font-bold'>{siteConfig.name}</span>
            </MobileLink>
            <div className='flex flex-col gap-3 mt-3'>
                <MobileLink onOpenChange={setOpen} href='/blog'>
                    Blog
                </MobileLink>
                <MobileLink onOpenChange={setOpen} href='/about'>
                    About
                </MobileLink>
                <MobileLink onOpenChange={setOpen} href='/contact'>
                    Contact
                </MobileLink>
                <Link target='_blank' href={siteConfig.links.github}>
                    Github
                </Link>
            </div>
        </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps{
    children: React.ReactNode
    className?:string;
    onOpenChange?:(open:boolean)=>void
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}:MobileLinkProps){
    const router = useRouter()
    return <Link href={href} onClick={()=>{
        router.push(href.toString())
        onOpenChange?.(false)
    }}
    className={className}
    {...props}
    >
        {children}
    </Link>
}

export default MobileNav