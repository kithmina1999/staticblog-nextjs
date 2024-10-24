import { posts } from '#site/content';
import MDXComponent from '@/components/post/mdx';
import { notFound } from 'next/navigation';
import React from 'react'
import "@/styles/mdx.css"


 interface PostPageProps{
    params:{
        slug:string[];
    }
 }

async function getPostFromParams(params:PostPageProps['params']){
    const slug = params?.slug?.join('/')
    const post = posts.find(post => post.slugAsParams === slug)
    return post;
}

export async function generateStaticParams():Promise<PostPageProps["params"][]>{
    return posts.map(post => ({
        slug:post.slugAsParams.split("/")
    }))
}

const PostPage = async({params}:PostPageProps) => {
    const post = await getPostFromParams(params);
    if(!post || !post.published){
        notFound();
    }
  return (
    
    <article className='container py-6 prose dark:prose-invert max-w-3xl mx-auto scroll-smooth'>
        <h1 className='mb-2 text-2xl'>{post.title}</h1>
        {post.description ? (
            <p className='text-xl mt-0 text-muted-foreground'>{post.description}</p>
        ): null}
        <hr className='my-4'/>
        <MDXComponent code={post.body}/>
    </article>
  )
}


export default PostPage