#!/usr/bin/env node

/**
 * Blog Management Script
 * 
 * Usage:
 *   node scripts/blog.js create "My Blog Post Title"
 *   node scripts/blog.js list
 *   node scripts/blog.js validate
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(process.cwd(), 'blogs-docs');

function createBlogPost(title) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  const date = new Date().toISOString().split('T')[0];
  
  const template = `---
title: "${title}"
date: "${date}"
author: "Sheetsway Team"
tags: ["Tag1", "Tag2"]
featuredImage: "/path/to/image.jpg"
excerpt: "Brief description of your blog post..."
---

# ${title}

Write your blog post content here...

## Introduction

Start with an engaging introduction...

## Main Content

Add your main content sections...

## Conclusion

Wrap up your post with a conclusion...

`;

  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  
  if (fs.existsSync(filePath)) {
    console.error(`❌ Blog post "${slug}.md" already exists!`);
    return;
  }

  fs.writeFileSync(filePath, template);
  console.log(`✅ Created blog post: ${slug}.md`);
  console.log(`📝 Edit the file at: ${filePath}`);
}

function listBlogPosts() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`❌ Blog directory not found: ${BLOG_DIR}`);
    return;
  }

  const files = fs.readdirSync(BLOG_DIR)
    .filter(file => file.endsWith('.md'))
    .sort();

  if (files.length === 0) {
    console.log('📝 No blog posts found.');
    return;
  }

  console.log(`📚 Found ${files.length} blog post(s):\n`);
  
  files.forEach((file, index) => {
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const titleMatch = content.match(/^title:\s*"([^"]+)"/m);
    const title = titleMatch ? titleMatch[1] : file.replace('.md', '');
    
    console.log(`${index + 1}. ${title}`);
    console.log(`   📄 ${file}`);
    console.log('');
  });
}

function validateBlogPosts() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`❌ Blog directory not found: ${BLOG_DIR}`);
    return;
  }

  const files = fs.readdirSync(BLOG_DIR)
    .filter(file => file.endsWith('.md'));

  console.log(`🔍 Validating ${files.length} blog post(s)...\n`);

  let validCount = 0;
  let invalidCount = 0;

  files.forEach(file => {
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    const hasFrontmatter = content.startsWith('---');
    const hasTitle = /^title:\s*"[^"]+"/m.test(content);
    const hasDate = /^date:\s*"\d{4}-\d{2}-\d{2}"/m.test(content);
    const hasAuthor = /^author:\s*"[^"]+"/m.test(content);
    const hasTags = /^tags:\s*\[.*\]/m.test(content);
    const hasContent = content.includes('\n\n# ');

    const isValid = hasFrontmatter && hasTitle && hasDate && hasAuthor && hasTags && hasContent;

    if (isValid) {
      console.log(`✅ ${file}`);
      validCount++;
    } else {
      console.log(`❌ ${file}`);
      console.log(`   Missing: ${[
        !hasFrontmatter && 'frontmatter',
        !hasTitle && 'title',
        !hasDate && 'date',
        !hasAuthor && 'author',
        !hasTags && 'tags',
        !hasContent && 'content'
      ].filter(Boolean).join(', ')}`);
      invalidCount++;
    }
  });

  console.log(`\n📊 Results: ${validCount} valid, ${invalidCount} invalid`);
}

function showHelp() {
  console.log(`
📝 Blog Management Script

Usage:
  node scripts/blog.js <command> [options]

Commands:
  create <title>    Create a new blog post with the given title
  list              List all existing blog posts
  validate          Validate all blog posts for required fields
  help              Show this help message

Examples:
  node scripts/blog.js create "My New Blog Post"
  node scripts/blog.js list
  node scripts/blog.js validate
`);
}

// Main execution
const command = process.argv[2];

switch (command) {
  case 'create':
    const title = process.argv[3];
    if (!title) {
      console.error('❌ Please provide a title for the blog post');
      process.exit(1);
    }
    createBlogPost(title);
    break;
    
  case 'list':
    listBlogPosts();
    break;
    
  case 'validate':
    validateBlogPosts();
    break;
    
  case 'help':
  default:
    showHelp();
    break;
} 