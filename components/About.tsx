import React from 'react'
import { SparklesCore } from './ui/sparkles'

const About = () => {
    return (
        <div className=' backdrop-blur-lg py-8  text-center h-[87.5vh]'>
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
                <h1 className='text-5xl font-extrabold text-white '>About
                    <span className='text-primary'> Blogify</span>
                </h1>

                <p className='text-white text-lg md:w-[800px]'>
                    Blogify is a platform where you can share your thoughts, ideas, and stories with the world. We believe in the power of sharing and the impact it can have on the world. We are here to help you share your story with the world.
                </p>
                <p className='text-white text-lg  md:w-[800px]'>
                    At Blogify, we believe that everyone has a story to tell, and we are here to help you tell your story. Whether you are a seasoned writer or just starting, Blogify is the perfect place to share your thoughts and ideas with the world. We are here to help you every step of the way.
                </p>
                <p className='text-white text-lg md:w-[800px]'>
                    So what are you waiting for? Sign up today and start sharing your story with the world.
                </p>
                <button className='bg-primary text-white px-20 py-2 rounded-md mt-4'>
                    Sign Up
                </button>

            </div>
        </div>
    )
}

export default About