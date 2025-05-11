import React from 'react'
import Link from "next/link";
import { ModeToggle } from './ModeToggle'
import { ChevronsLeftRightEllipsis } from 'lucide-react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import DashboardButton from './DashboardButton'

function Navbar() {
    return (
        <nav className='border-b'>
            <div className='flex h-16 items-center px-4 container mx-auto'>
                {/*left side*/}
                <Link
                    href="/"
                    className="flex items-center gap-1 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
                >
                    <ChevronsLeftRightEllipsis className="size-10 text-green-500" />
                    <span className="bg-green-500 bg-clip-text text-transparent">
                        DevTalk
                    </span>
                </Link>

                {/*right side*/}
                <SignedIn>
                    <div className="flex items-center space-x-4 ml-auto">
                        <DashboardButton />
                        <ModeToggle />
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar