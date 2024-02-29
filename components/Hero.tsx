import React from 'react';
import { Fira_Mono } from 'next/font/google';
import { SparklesCore } from './ui/sparkles';
const fira = Fira_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

const Hero = () => {
    return (
        <div className={`backdrop-blur-sm py-8  text-center ${fira.className}`}>
            <div className="w-full absolute inset-0">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div className=' flex flex-col p-10 h-full items-center gap-4'>
                <div><h1 className='text-5xl font-extrabold text-white '>Welcome to Blogify</h1>
                    <h2 className='text-lg text-white pb-6 pt-2'>A place to share your thoughts</h2></div>
                <p className='text-white text-base md:w-[700px]'>
                    At Blogify, we believe in the power of sharing, and we believe that everyone has a story to tell. We are here to help you share your story with the world.
                </p>
                <button className='bg-primary text-white px-4 py-2 rounded-md mt-4'>
                    Check out all blogs
                </button>
            </div>
        </div>
    )
}

export default Hero