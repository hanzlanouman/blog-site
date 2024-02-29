import React from 'react';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Link from 'next/link';

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

const BlogCard = ({ blog }: Props) => {

    const renderStars = (reviews: Review[]) => {
        const stars = [];
        const averageStars = reviews.reduce((acc, review) => acc + review.attributes.stars, 0) / reviews.length;
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(averageStars)) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (i === Math.ceil(averageStars) && averageStars % 1 !== 0) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }
        return stars;
    };

    return (
        <Link href={`/blogs/${blog.title}`}>
            <div className='cursor-pointer'>
                <CardContainer className="backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-2xl h-[220px]">
                    <CardBody className={`relative xl:w-[420px] h-auto rounded-xl p-4 w-[400px]`}>
                        <CardItem
                            translateZ="50"
                            className="text-3xl font-bold text-white dark:text-white"
                        >
                            {blog.title}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-white text-sm max-w-sm mt-1 line-clamp-1"
                        >
                            {blog.subheading}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-white text-sm max-w-sm mt-3 line-clamp-1"
                        >
                            {blog.description}
                        </CardItem>

                        <div className="flex justify-between items-center mt-8">
                            <div className="flex">
                                {renderStars(blog.reviews.data)}
                            </div>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl text-base font-normal text-white"
                            >
                                Read Now →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        </Link>
    );
};

export default BlogCard;
