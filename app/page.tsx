import FeaturedBlogList from "@/components/FeaturedBlogList";
import Hero from "@/components/Hero";
import Image from "next/image";


const fetchFeaturedBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
    }
  })
  const rawData = await res.json()
  const data = rawData.data
  console.log('data')
  console.log(data)
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

export default async function Home() {

  const blogs = await fetchFeaturedBlogs();
  return (
    <div className="">

      <Image src="/cover-3.jpg" alt="Hero" width={3840} height={2160} className="absolute top-0 -z-30 object-cover object-bottom xl:h-[109.5vh] h-[122vh]" />
      <Hero />
      <FeaturedBlogList blogs={blogs} />
    </div>
  );
}

