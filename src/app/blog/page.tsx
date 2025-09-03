import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogListing from '@/components/BlogListing';
import { getAllBlogs } from '@/utils/blog';

export const metadata: Metadata = {
  title: 'Blog | Sheetsway - Audit Insights & Compliance Tips',
  description: 'Explore our latest insights on audit requirements, compliance, and business growth. Expert tips and updates from the Sheetsway team.',
  openGraph: {
    title: 'Blog | Sheetsway - Audit Insights & Compliance Tips',
    description: 'Explore our latest insights on audit requirements, compliance, and business growth.',
    type: 'website',
  },
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <BlogListing blogs={blogs} />
      <Footer />
    </div>
  );
} 