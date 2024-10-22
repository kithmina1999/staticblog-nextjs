import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { siteConfig } from '@/config/site'

const AboutMeAvatar = () => {
    return (
        <Avatar className='h-48 w-48 z-0'>
            <AvatarImage src="https://github.com/shadcn.png" alt={siteConfig.author}/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export default AboutMeAvatar