import Link from 'next/link';
import data from '../public/blog.json';

const Blog = async () => {
  // Simulate fetching the JSON file
  const data = await import('../public/blog.json').then((module) => module.default);
    return (
      <div>
        <h1>Blog Posts</h1>
        <ul>
          {data.map((post) => (
            <li key={post.slug}>
              <h2>{post.title}</h2>
              <p>Author: {post.author}</p>
              <Link href={`/blog/${post.slug}`}>
                <button>View Post</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Blog;