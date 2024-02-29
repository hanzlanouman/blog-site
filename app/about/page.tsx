import React from 'react'
import Image from 'next/image'
import About from '@/components/About'
const page = () => {
    return (
        <div>
            <Image src="/cover-2.jpg" alt="Hero" width={3840} height={2160} className="absolute top-0 -z-30 object-cover object-bottom h-screen" />
            <div>
                <About />
            </div>
        </div>
    )
}

export default page