import React from 'react'
import Image from 'next/image'
import BlogList from '@/components/BlogList'


type blog = {
    title: string,
    description: string,
    subheading?: string,

    date: string,
    reviews: number
}

const fetchAllBlogs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
        }
    })
    const rawData = await res.json()
    const data = rawData.data
    const blogs = data.map((blog: any) => {
        return {
            title: blog.attributes.title,
            description: blog.attributes.description,
            subheading: blog.attributes.subheading,
            date: blog.attributes.date,
            reviews: blog.attributes.reviews
        }
    })
    return blogs
}

const page = async () => {


    const blogs = await fetchAllBlogs()
    return (
        <div>
            <Image src="/cover-4.jpg" alt="Hero" width={3840} height={2160} className="absolute top-0 -z-30 object-cover object-bottom xl:h-[120vh] h-[122vh] " />
            <div className='container  mx-auto py-4'>
                <BlogList blogs={blogs} />
            </div>
        </div>
    )
}

export default page