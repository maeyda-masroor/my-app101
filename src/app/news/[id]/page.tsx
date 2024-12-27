import { notFound } from 'next/navigation';
import data from '../../../public/blog.json';
import Comment from '../../../components/Comment';
import Blogcontent from '@/components/BlogContent';

export async function generateStaticParams() {
  // Generate paths for each blog post based on the slugs
  return data.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Generate metadata dynamically for the page based on the slug
  
  const { slug } = await params;

  const post = data.find((post) => post.slug === slug);

  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: `Read the full blog post: ${post.title}`,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Access the blog post data
  const { slug } = await params;  // Await the params here
  const post = data.find((post) => post.slug === slug);

  if (!post) {
    notFound();  // Trigger 404 if the post is not found
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author}</p>
      <Blogcontent content={post.content} />
      <Comment />
    </div>
  );
}