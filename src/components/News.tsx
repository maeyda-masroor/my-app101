"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import blogsData from "../public/news.json"; // Import JSON data
import Image from "next/image";
// Define the Blog type
interface Blog {
  id: number;
  title: string;
  image:string;
  author:string,
  date: string; // Date as a string in ISO format
}

const BlogLayout: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // Initialize blogs state

  useEffect(() => {
    // Sort blogs by date (most recent first)
    const sortedBlogs = blogsData.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Set the sorted blogs to the state
    setBlogs(sortedBlogs);
  }, []);
    return (
      <div className="container grid grid-cols-1 lg:grid-cols-[60%,40%] gap-4 max-w-9xl mx-auto p-4">
        {/* 60% Section */}
        {blogs.length > 0 && (
        <div className=" bg-white p-6 rounded-lg shadow-md">
         <Image src={blogs[0].image} alt="x" width={500} height={500} className="object-fill"/>
          <h2 className="text-2xl font-bold mb-2">{blogs[0].title}</h2>
          <p className="text-gray-700 mb-4">
            {blogs[0].date}
          </p>
          <Link
            href={`/news/${blogs[0].id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm md:text-base"
          >
            Read More
          </Link>
        </div>
        )}
        {/* 40% Section */}
        <div className=" bg-white p-6 rounded-lg shadow-md overflow-y-auto max-h-80">
          {/* Repeated Items */}
          {blogs.slice(1).map((blog) => (
            <div key={blog.id} className="mb-4">
              <Link href={`/news/${blogs[0].id}`} ><h3 className="text-lg font-semibold">{blog.title}</h3></Link>
              <p className="text-gray-600">{blog.author}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default BlogLayout;
  