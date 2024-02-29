import Link from 'next/link'
import React from 'react'

const Header = () => {
    const navLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        },
        {
            title: 'About',
            path: '/about'
        },
    ]

    return (
        <header className=' py-4  backdrop-blur-lg bg-opacity-10 backdrop-filter 
         shadow-none z-0 
        '>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <Link href='/'>
                        <h1 className='text-3xl tracking-wider font-extrabold 
                            text-primary cursor-pointer
                        '>
                            Blogify
                        </h1>
                    </Link>
                </div>
                <nav className='flex gap-x-8'>
                    {
                        navLinks.map((link, index) => {
                            return (
                                <Link className='text-primary text-lg font-semibold ' href={link.path} key={index}>
                                    {link.title}
                                </Link>
                            )
                        })
                    }
                </nav>
            </div>
        </header>
    )
}

export default Header