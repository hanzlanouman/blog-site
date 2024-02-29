'use client'
import React from 'react'
import BlogCard from './BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
interface Review {
    attributes: {
        stars: number;
        // Add other properties of review if needed
    };
}

interface Props {
    blog: {
        title: string;
        description: string;
        subheading?: string;
        date: string;
        reviews: {
            data: Review[];
        };
    };
}

const FeaturedBlogList = ({
    blogs
}: {
    blogs: Props['blog'][]
}) => {



    return (
        <div className='backdrop-brightness-75 py-6'>
            <div className='mx-4'>
                <h1 className='text-3xl font-extrabold text-white container '>Featured Blogs</h1>
                <div className='pb-10 flex justify-between container'>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        breakpoints={{
                            1050: {
                                slidesPerView: 3,
                            },
                            720: {
                                slidesPerView: 2,
                            },
                            1380: {
                                slidesPerView: 3,
                            },

                            580: {
                                slidesPerView: 1,
                            },
                            380: {
                                slidesPerView: 1,
                            },
                            280: {
                                slidesPerView: 1,
                            },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {blogs.map((blog, index) => {
                            return (
                                <SwiperSlide key={index} className='py-6 xl:px-0 px-2'>
                                    <BlogCard blog={blog} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div></div></div>
    )
}

export default FeaturedBlogList