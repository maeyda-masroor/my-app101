"use client"
import React, { useState, useEffect } from "react";
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
    <div className="grid grid-cols-1 lg:grid-cols-[60%,40%] gap-4 lg:pr-36 lg:pl-36 p-10">
      {/* First Blog (60% Width) */}
      {blogs.length > 0 && (
        <div className=" bg-blue-500 text-white h-auto w-[500px] p-4">
          <Image src={blogs[0].image} alt="c" width={500} height={250}/>
          <h2 className="font-bold text-xl">{blogs[0].title}</h2>
          <p className="mt-2">{blogs[0].author}</p>
          <p className="mt-4 text-sm opacity-75">Date: {blogs[0].date}</p>
        </div>
      )}

      {/* Remaining Blogs (40% Width with Vertical Scroll) */}
      <div className=" bg-gray-100 overflow-y-auto h-[300px] p-4">
        {blogs.slice(1).map((blog) => (
          <div
            key={blog.id}
            className="bg-white mb-4 shadow-md rounded-md"
          >
            <h2 className="font-bold text-lg">{blog.title}</h2>
            <p className="mt-2 text-sm text-gray-700">{blog.author}</p>
            <p className="mt-4 text-xs opacity-75">Date: {blog.date}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default BlogLayout;
