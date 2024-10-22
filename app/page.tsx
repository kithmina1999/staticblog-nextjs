import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";
import {posts} from '#site/content'
import PostItem from "@/components/post/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0,5);

  return (

    <>
      <section className="space-y-6 pb-8 pt-12 md:pb-12 md:mt-10 lg:py-44">
        <div className="container flex text-center gap-4 flex-col mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Hello, I&apos;m Kithmina
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            Welcome to my static blog site. Built using Nextjs 14, tailwind, shadcn and velite
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row px-10 sm:px-0">
            <Link href='/blog' className={cn(buttonVariants({ size: 'lg' }), "w-full sm:w-fit")}>
              View my blog
            </Link>
            <Link href={siteConfig.links.github} target="_blank"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), "w-full sm:w-fit")}>
              Github
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60 mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-black">
            Latest Posts
          </h2>
          <ul className="flex flex-col">
            {latestPosts.map(post => <li key={post.slug} className="first:border-t first:border-border">
              <PostItem 
                slug={post.slug}
                title={post.title}
                date={post.date}
                description={post.description}
              />
            </li>)}
          </ul>
      </section>
    </>
  );
}
