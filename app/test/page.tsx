'use client';

import { ObjectId } from 'mongodb';
import { useEffect, useState } from 'react';

interface Blog {
  _id: ObjectId;
  title: string;
}

export default function Users() {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchBlogPosts() {
      const res = await fetch('/api/blog');
      const data = await res.json();
      console.log(data);
      if (data.success) {
        setBlogPosts(data.data);
      }
    }
    fetchBlogPosts();
  }, []);

  return (
    <div>
      <ul>
        {blogPosts.map((blog) => (
          <li key={blog._id.toString()}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}
