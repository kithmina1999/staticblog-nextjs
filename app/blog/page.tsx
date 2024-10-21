import React from 'react'
import { posts } from '#site/content'
import PostItem from '@/components/post/post-item';
import { sortPosts } from '@/lib/utils';
import QueryPagination from '@/components/post/query-pagination';

const POST_PER_PAGE = 5;

interface BlogPageProps{
    searchParams:{
        page?:string
    }
}

const BlogPage = async ({searchParams}:BlogPageProps) => {
    const currentPage = Number(searchParams?.page) || 1;
    const sortedPosts = sortPosts(posts.filter((post)=> post.published));
    const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);
    const displayPosts = sortedPosts.slice(
        POST_PER_PAGE * (currentPage-1),
        POST_PER_PAGE * currentPage
    );
    return (
        <div className='container max-w-5xl py-6 lg:py-10 mx-auto'>
            <div className='flex flex-col md:flex-row items-center gap-4 md:justify-between md:gap-8'>
                <div className='flex-1 space-y-4'>
                    <h1 className='inline-block font-black text-4xl lg:text-5xl'>Blog</h1>
                    <p className='text-xl text-muted-foreground '>
                        My thoughts on current tech stacks.
                    </p>
                </div>
            </div>
            <hr className='mt-8' />
            {displayPosts?.length > 0 ? (
                <ul className=''>
                    {displayPosts.map(post => {
                        const { slug, date,  title, description } = post;
                        return (
                            <li key={slug}>
                                <PostItem 
                                    slug={slug}
                                    title={title}
                                    description={description}
                                    date={date}
                                />
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p>
                    Nothing to see here yet
                </p>
            )}
            <QueryPagination totalPages={totalPages} className='py-4 '/>
        </div>
    )
}

export default BlogPage