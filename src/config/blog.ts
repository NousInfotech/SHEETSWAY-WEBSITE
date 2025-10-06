// Blog Configuration - Customize this for your project
export const blogConfig = {
  // Blog metadata
  title: 'Sheetsway Blog',
  description: 'Insights, tips, and updates on audit requirements, compliance, and business growth.',
  author: 'Sheetsway Team',
  siteUrl: 'https://sheetsway.com',
  
  // Blog directory (relative to project root)
  blogDirectory: 'blogs-docs',
  
  // Default blog post settings
  defaultPost: {
    author: 'Sheetsway Team',
    readingTimeWordsPerMinute: 200,
    excerptLength: 160,
  },
  
  // Blog listing settings
  listing: {
    postsPerPage: 12,
    showSearch: true,
    showTags: true,
    showReadingTime: true,
    showAuthor: true,
    showDate: true,
  },
  
  // Blog post settings
  post: {
    showRelatedPosts: true,
    relatedPostsCount: 3,
    showShareButton: true,
    showTags: true,
    showReadingTime: true,
    showAuthor: true,
    showDate: true,
  },
  
  // Navigation
  navigation: {
    showBackToBlog: true,
    backToBlogText: 'Back to Blog',
  },
  
  // Call to action settings
  cta: {
    showAfterPost: true,
    title: 'Ready to Streamline Your Audit Process?',
    description: 'Join thousands of businesses using Sheetsway to simplify their audit requirements.',
    primaryButton: {
      text: 'Find an Auditor',
      href: '/marketplace-auditor',
      icon: 'BookOpen',
    },
    secondaryButton: {
      text: 'Contact Us',
      href: '/contact-us',
    },
  },
  
  // Newsletter signup
  newsletter: {
    showOnListing: true,
    title: 'Stay Updated',
    description: 'Get the latest insights on audit requirements and business compliance delivered to your inbox.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
  },
  
  // Styling
  styling: {
    primaryColor: '#E8840C', // orange
    secondaryColor: '#d97706', // orange-600
    accentColor: '#f59e0b', // amber-500
    textColor: '#111827', // gray-900
    textColorLight: '#6b7280', // gray-500
    backgroundColor: '#ffffff',
    backgroundColorLight: '#f9fafb', // gray-50
  },
  
  // SEO settings
  seo: {
    defaultTitle: 'Blog | Sheetsway - Audit Insights & Compliance Tips',
    defaultDescription: 'Explore our latest insights on audit requirements, compliance, and business growth. Expert tips and updates from the Sheetsway team.',
    titleTemplate: '%s | Sheetsway Blog',
    siteName: 'Sheetsway',
    twitterHandle: '@sheetsway',
  },
  
  // Social sharing
  social: {
    twitter: true,
    facebook: true,
    linkedin: true,
    email: true,
  },
  
  // Analytics (optional)
  analytics: {
    googleAnalyticsId: '', // Add your GA ID here
    googleTagManagerId: '', // Add your GTM ID here
  },
};

// Export types for TypeScript support
export type BlogConfig = typeof blogConfig; 