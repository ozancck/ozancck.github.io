import React from 'react';
import { ExternalLink, Github, Linkedin, Twitter, Youtube, BookOpen } from 'lucide-react';

const Links = () => {
  const linkCategories = [
    {
      title: 'Social Media',
      links: [
        {
          title: 'GitHub',
          url: 'https://github.com/ozancck',
          icon: Github,
          description: 'Check out my open source projects and contributions'
        },
        {
          title: 'LinkedIn',
          url: 'https://linkedin.com/in/yourusername',
          icon: Linkedin,
          description: 'Connect with me professionally'
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/yourusername',
          icon: Twitter,
          description: 'Follow me for tech updates and insights'
        }
      ]
    },
    {
      title: 'Learning Resources',
      links: [
        {
          title: 'Tech Documentation',
          url: 'https://docs.example.com',
          icon: BookOpen,
          description: 'Useful technical documentation and guides'
        },
        {
          title: 'YouTube Channel',
          url: 'https://youtube.com/@yourchannel',
          icon: Youtube,
          description: 'Video tutorials and tech discussions'
        }
      ]
    }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Important Links</h1>
        <p className="text-xl text-gray-600">A collection of useful resources and social media profiles</p>
      </div>

      <div className="space-y-8">
        {linkCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  <div className="flex items-center mb-2">
                    <link.icon className="h-6 w-6 text-indigo-600 mr-2" />
                    <span className="text-lg font-medium text-gray-900">{link.title}</span>
                    <ExternalLink className="h-4 w-4 text-gray-400 ml-2" />
                  </div>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Copy Section */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Copy Links</h2>
        <div className="space-y-4">
          {linkCategories.flatMap(category => category.links).map((link, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center">
                <link.icon className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-gray-900">{link.title}</span>
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(link.url)}
                className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 bg-indigo-50 rounded-md"
              >
                Copy URL
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;