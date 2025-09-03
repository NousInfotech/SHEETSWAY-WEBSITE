'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, Search, Filter, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/utils/blog';

interface BlogListingProps {
  blogs: BlogPost[];
}

const BlogListing: React.FC<BlogListingProps> = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get all unique tags
  const allTags = Array.from(
    new Set(blogs.flatMap(blog => blog.tags || []))
  ).sort();

  // Filter blogs based on search and tag
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || blog.tags?.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-white py-8 sm:py-12 lg:py-16 mt-16" style={{ background: '#E8840C' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Sheetsway Blog
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-orange-100 max-w-2xl mx-auto px-4">
            Insights, tips, and updates on audit requirements, compliance, and business growth.
          </p>
        </div>
      </header>

      {/* Search and Filter */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ '--tw-ring-color': '#E8840C' } as React.CSSProperties}
                />
              </div>

              {/* Tag Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full sm:w-auto pl-10 pr-8 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent appearance-none bg-white"
                  style={{ '--tw-ring-color': '#E8840C' } as React.CSSProperties}
                >
                  <option value="">All Topics</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(searchTerm || selectedTag) && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="text-xs sm:text-sm text-gray-600">Filtered by:</span>
                {searchTerm && (
                  <span className="px-2 sm:px-3 py-1 text-orange-800 text-xs sm:text-sm rounded-full" style={{ backgroundColor: '#fef3c7' }}>
                    &ldquo;{searchTerm}&rdquo;
                  </span>
                )}
                {selectedTag && (
                  <span className="px-2 sm:px-3 py-1 text-orange-800 text-xs sm:text-sm rounded-full" style={{ backgroundColor: '#fef3c7' }}>
                    {selectedTag}
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('');
                  }}
                  className="text-xs sm:text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-12 sm:py-16">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  No articles found
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">
                  Try adjusting your search terms or filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('');
                  }}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-white rounded-lg transition-colors text-sm sm:text-base"
                  style={{ backgroundColor: '#E8840C' }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {filteredBlogs.map((blog) => (
                    <article
                      key={blog.slug}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {blog.featuredImage && (
                        <img
                          src={blog.featuredImage}
                          alt={blog.title}
                          className="w-full h-40 sm:h-48 object-cover"
                        />
                      )}
                      
                      <div className="p-4 sm:p-6">
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{format(new Date(blog.date), 'MMM dd, yyyy')}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{blog.readingTime}</span>
                          </div>
                        </div>
                        
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                          {blog.title}
                        </h2>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        
                        {blog.tags && blog.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                            {blog.tags.slice(0, 3).map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                              >
                                {tag}
                              </span>
                            ))}
                            {blog.tags.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                +{blog.tags.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                        
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="inline-flex items-center gap-1 sm:gap-2 font-medium transition-colors text-sm sm:text-base"
                          style={{ color: '#E8840C' }}
                        >
                          Read More
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="text-center mt-8 sm:mt-12">
                  <p className="text-sm sm:text-base text-gray-600">
                    Showing {filteredBlogs.length} of {blogs.length} articles
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="text-white py-8 sm:py-12 lg:py-16" style={{ background: 'linear-gradient(to right, #E8840C, #d97706)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Stay Updated
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-orange-100 mb-6 sm:mb-8 px-4">
              Get the latest insights on audit requirements and business compliance delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-gray-900 focus:ring-2 focus:outline-none text-sm sm:text-base"
                style={{ '--tw-ring-color': '#E8840C' } as React.CSSProperties}
              />
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base" style={{ color: '#E8840C' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogListing; 