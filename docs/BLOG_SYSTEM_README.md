# Reusable Blog System for Next.js

A comprehensive, plug-and-play blog system for Next.js applications that automatically converts markdown files to beautiful blog posts.

## Features

- ✅ **Automatic Markdown Processing** - Converts `.md` files to HTML with syntax highlighting
- ✅ **Dynamic Routing** - `/blog/[slug]` for individual posts
- ✅ **Blog Listing** - `/blog` with search and filtering
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- ✅ **Responsive Design** - Mobile-first, modern UI
- ✅ **Related Posts** - Automatic related post suggestions
- ✅ **Social Sharing** - Built-in share functionality
- ✅ **Configurable** - Easy customization for any project
- ✅ **TypeScript Support** - Full type safety
- ✅ **Performance Optimized** - Static generation, optimized images

## Quick Start

### 1. Installation

```bash
npm install gray-matter remark remark-html remark-gfm date-fns
```

### 2. File Structure

```
your-project/
├── blogs-docs/                    # Your markdown files go here
│   ├── my-first-blog-post.md
│   └── another-blog-post.md
├── src/
│   ├── app/
│   │   └── blog/
│   │       ├── page.tsx           # Blog listing page
│   │       └── [slug]/
│   │           └── page.tsx       # Individual blog post page
│   ├── components/
│   │   ├── BlogTemplate.tsx      # Blog post template
│   │   └── BlogListing.tsx       # Blog listing component
│   ├── utils/
│   │   └── blog.ts               # Blog utilities
│   ├── config/
│   │   └── blog.ts               # Blog configuration
│   └── types/
│       └── markdown.d.ts         # Type declarations
```

### 3. Configuration

Edit `src/config/blog.ts` to customize the blog for your project:

```typescript
export const blogConfig = {
  title: 'Your Blog Title',
  description: 'Your blog description',
  author: 'Your Name',
  siteUrl: 'https://yoursite.com',
  // ... customize other settings
};
```

### 4. Add Blog Posts

Create markdown files in the `blogs-docs/` directory:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-15"
author: "Your Name"
tags: ["tag1", "tag2"]
featuredImage: "/path/to/image.jpg"
---

# Your Blog Post Content

Write your content in markdown format...

## Subheadings

- Bullet points
- More content

```

### 5. Navigation

Add blog links to your navigation:

```typescript
// In your Navbar component
<Link href="/blog">Blog</Link>
```

## Markdown Features

The blog system supports:

- **Headers** (`# ## ###`)
- **Bold** (`**text**`) and *italic* (`*text*`)
- **Lists** (ordered and unordered)
- **Links** (`[text](url)`)
- **Images** (`![alt](src)`)
- **Code blocks** (```)
- **Tables**
- **Blockquotes** (`> text`)
- **Horizontal rules** (`---`)

## Customization

### Styling

The blog uses Tailwind CSS classes. You can customize the appearance by:

1. Modifying the CSS in `src/app/globals.css`
2. Updating the styling configuration in `src/config/blog.ts`
3. Customizing the components in `src/components/`

### Components

- **BlogTemplate.tsx** - Individual blog post layout
- **BlogListing.tsx** - Blog listing page with search/filter
- **blog.ts** - Utility functions for processing markdown

### Configuration Options

```typescript
// Available configuration options
blogConfig = {
  // Blog metadata
  title: string,
  description: string,
  author: string,
  siteUrl: string,
  
  // Features
  listing: {
    showSearch: boolean,
    showTags: boolean,
    showReadingTime: boolean,
    // ...
  },
  
  post: {
    showRelatedPosts: boolean,
    showShareButton: boolean,
    // ...
  },
  
  // Styling
  styling: {
    primaryColor: string,
    secondaryColor: string,
    // ...
  },
  
  // SEO
  seo: {
    defaultTitle: string,
    defaultDescription: string,
    // ...
  }
}
```

## Advanced Usage

### Custom Blog Post Layout

Create a custom blog template:

```typescript
// src/components/CustomBlogTemplate.tsx
import BlogTemplate from './BlogTemplate';

const CustomBlogTemplate = ({ blog, relatedBlogs }) => {
  return (
    <div className="custom-layout">
      <BlogTemplate blog={blog} relatedBlogs={relatedBlogs} />
    </div>
  );
};
```

### Adding Analytics

```typescript
// In your blog pages
import { useEffect } from 'react';

useEffect(() => {
  // Track page view
  gtag('config', 'GA_MEASUREMENT_ID', {
    page_title: blog.title,
    page_location: window.location.href,
  });
}, [blog.title]);
```

### Custom Markdown Processing

Extend the markdown processing in `src/utils/blog.ts`:

```typescript
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const processedContent = await remark()
  .use(html)
  .use(remarkGfm)
  .use(remarkMath)        // Add math support
  .use(rehypeKatex)      // Add math rendering
  .process(content);
```

## Migration Guide

### From Other Blog Systems

1. **Copy your markdown files** to `blogs-docs/`
2. **Update frontmatter** to match the expected format
3. **Adjust image paths** to work with your public directory
4. **Update internal links** to use the new URL structure

### From Static Blog Generators

1. **Export your content** as markdown files
2. **Update metadata** in frontmatter
3. **Adjust styling** to match your design system
4. **Test all links** and images

## Troubleshooting

### Common Issues

1. **Markdown not rendering**: Check that all dependencies are installed
2. **Images not showing**: Verify image paths are relative to `public/`
3. **Build errors**: Ensure all TypeScript types are properly declared
4. **Styling issues**: Check that Tailwind CSS is properly configured

### Performance Tips

1. **Optimize images** before adding to `public/`
2. **Use static generation** for better performance
3. **Implement caching** for frequently accessed posts
4. **Minimize bundle size** by code splitting

## Support

For issues and questions:

1. Check the configuration in `src/config/blog.ts`
2. Verify markdown syntax in your blog posts
3. Ensure all dependencies are installed
4. Check the browser console for errors

## License

This blog system is open source and available under the MIT License. 