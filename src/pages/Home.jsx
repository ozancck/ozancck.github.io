import React from 'react';
import { Menu, Library, BookOpen, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const sections = [
    {
      title: 'Portfolio',
      description: 'My projects and work experiences',
      icon: Menu,
      href: '/portfolio',
      color: 'indigo',
    },
    {
      title: 'Blog',
      description: 'My thoughts and articles',
      icon: BookOpen,
      href: '/blog',
      color: 'indigo',
    },
    {
      title: 'Important Links',
      description: 'Useful resources and references',
      icon: LinkIcon,
      href: '/links',
      color: 'indigo',
    },
    {
      title: 'Digital Library',
      description: 'My collection of resources and knowledge',
      icon: Library,
      href: '/library',
      color: 'indigo',
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My Digital Space</h1>
        <p className="text-xl text-gray-600">Explore my portfolio, blog, and resource collection</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Link
            key={section.title}
            to={section.href}
            className="block hover:transform hover:scale-105 transition-transform duration-200"
          >
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <section.icon className="h-8 w-8 text-indigo-600" />
                  <h2 className="ml-3 text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                <p className="mt-4 text-gray-600">{section.description}</p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600">
                  Learn more →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;