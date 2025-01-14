import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to create your first component. This comprehensive guide will walk you through the fundamentals of React development...',
      date: '2024-01-14',
      readTime: '5 min read',
      category: 'Development',
      image: '/api/placeholder/400/200',
      slug: 'getting-started-with-react'
    },
    {
      title: 'Understanding Modern JavaScript',
      excerpt: 'Explore the modern features of JavaScript that every developer should know. From arrow functions to destructuring, learn how to write better code...',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'JavaScript',
      image: '/api/placeholder/400/200',
      slug: 'understanding-modern-javascript'
    },
    // Add more blog posts as needed
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600">Thoughts, tutorials and insights about technology</p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {['All', 'Development', 'JavaScript', 'React', 'Web Design'].map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-indigo-100 hover:text-indigo-800 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <article 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover h-48"
            />
            <div className="p-6">
              {/* Meta information */}
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
              
              {/* Title and Excerpt */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-indigo-600">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              
              {/* Category Tag */}
              <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                {post.category}
              </span>
              
              {/* Read More Link */}
              <div className="mt-4 flex justify-end">
                <a 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700">
            1
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Blog;