'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'

const ModeToggle = () => {
    const { setTheme } = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='w-10 px-0' >
                    <Sun className='h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                    <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 transition-all rotate-90 dark:rotate-0 dark:scale-100' />
                    <span className='sr-only'>toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ModeToggle