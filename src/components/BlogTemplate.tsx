'use client';

import React from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/utils/blog';
import MarkdownRenderer from './MarkdownRenderer';

interface BlogTemplateProps {
  blog: BlogPost;
  relatedBlogs?: BlogPost[];
}


const BlogTemplate: React.FC<BlogTemplateProps> = ({ blog, relatedBlogs = [] }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="text-white" style={{ background: '#E8840C' }}>
        <div className="container mx-auto px-4 sm:px-6 pt-8 pb-8 sm:py-8">
                     <Link 
             href="/blog" 
             className="inline-flex items-center text-orange-100 hover:text-white transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
           >
             <ArrowLeft className="w-4 h-4 mr-2" />
             Back to Blog
           </Link>
           
           <div className="max-w-4xl mx-auto">
             <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-orange-100 mb-6 sm:mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{format(new Date(blog.date), 'MMMM dd, yyyy')}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{blog.readingTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{blog.author}</span>
              </div>
            </div>
            
                         <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8">
              {blog.title}
            </h1>
            
            {/* <p className="text-lg sm:text-xl text-orange-100 leading-relaxed mb-6">
              {blog.excerpt}
            </p> */}
            
            {blog.tags && blog.tags.length > 0 && (
                             <div className="flex flex-wrap gap-2 mb-8 sm:mb-8">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 text-white text-xs sm:text-sm rounded-full backdrop-blur-sm bg-white/20 border border-white/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
                         <button
               onClick={handleShare}
               className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 text-white rounded-lg transition-all backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 cursor-pointer text-xs sm:text-base mb-6"
            >
              <Share2 className="w-4 h-4" />
              Share Article
            </button>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {blog.featuredImage && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none">
            <MarkdownRenderer content={blog.content} />
          </article>
        </div>
      </main>

      {/* Suggested Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="bg-gray-50 py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Suggested Blogs
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                  Explore more insights on audit requirements, compliance, and business growth
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {relatedBlogs.slice(0, 3).map((relatedBlog) => (
                  <article
                    key={relatedBlog.slug}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {relatedBlog.featuredImage && (
                      <img
                        src={relatedBlog.featuredImage}
                        alt={relatedBlog.title}
                        className="w-full h-40 sm:h-48 object-cover"
                      />
                    )}
                    
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{format(new Date(relatedBlog.date), 'MMM dd, yyyy')}</span>
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{relatedBlog.readingTime}</span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                        {relatedBlog.excerpt}
                      </p>
                      
                      {relatedBlog.tags && relatedBlog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                          {relatedBlog.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs rounded-full"
                              style={{ backgroundColor: '#fef3c7', color: '#E8840C' }}
                            >
                              {tag}
                            </span>
                          ))}
                          {relatedBlog.tags.length > 2 && (
                            <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                              +{relatedBlog.tags.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                      
                      <Link
                        href={`/blog/${relatedBlog.slug}`}
                        className="inline-flex items-center gap-2 font-medium transition-colors text-sm sm:text-base"
                        style={{ color: '#E8840C' }}
                      >
                        Read More
                        <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 rotate-180" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              <div className="text-center mt-8 sm:mt-12">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-white rounded-lg transition-colors text-sm sm:text-base"
                  style={{ backgroundColor: '#E8840C' }}
                >
                  View All Blogs
                  <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogTemplate; 