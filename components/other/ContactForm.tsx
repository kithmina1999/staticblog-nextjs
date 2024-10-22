'use client'
import React, { useState } from 'react'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'


const formSchema = z.object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    content: z.string().min(1, "Content is required")
})

const ContactForm = () => {
    const [result, setResult] = useState<string|null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            content: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        setResult("Sending....");
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("content", values.content);
        formData.append("access_key", "bad8d80a-6494-424b-a614-3e9d31e9eb5d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        if (result.success) {
            setResult("Message sent successfully!");
            console.log(result);
            
        } else {
            setResult("Failed to send message.")
            console.log(result)
        }
    }


    return (
        <Form {...form}>
            <span className={cn('border-2 bg-green-200 p-4 text-center mb-10 rounded-lg font-semibold',!result ? 'hidden opacity-0 scale-75':'block opacity-100 scale-100 transition-all duration-500 ease-in-out')}>{result}</span>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='space-y-5'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter your name' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='Enter your email' type='email' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='content'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <Textarea placeholder='Content' {...field} rows={10} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button className='w-full' type='submit' >Submit</Button>
                </div>

            </form>
        </Form>
    )
}

export default ContactForm