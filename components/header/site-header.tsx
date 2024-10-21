
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Icons } from "../icon";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

export const SiteHeader = () => {
    return (
        <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mx-auto">
            <div className="container flex h-14 max-w-screen-2xl items-center mx-auto">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="flex items-center">
                        <Link href={siteConfig.links.github}
                            target="_blank">
                            <div className={cn(
                                buttonVariants({ variant: 'ghost' }),
                                "w-10 px-0"
                            )}>
                                <Icons.gitHub className="h-4 w-4 hidden sm:inline-flex" />
                                <span className="sr-only">Github</span>
                            </div>
                        </Link>
                        <MobileNav />
                    </nav>
                </div>
            </div>
        </header>
    )
}