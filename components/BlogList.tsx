import React from 'react';
import BlogCard from './BlogCard';
import { SparklesCore } from './ui/sparkles';

interface Review {
    attributes: {
        stars: number;
    };
}

interface Props {
    blogs: {
        title: string;
        description: string;
        subheading?: string;
        date: string;
        reviews: {
            data: Review[];
        };
    }[];
}

const BlogList = ({ blogs }: Props) => {
    return (
        <div className='relative'>
            <h1 className='text-3xl font-extrabold text-primary'>
                Blog List
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4'>
                {blogs.map((blog, index) => (

                    <BlogCard blog={blog} key={index} />

                ))}
            </div>
        </div >
    );
};

export default BlogList;
