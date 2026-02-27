import AboutUsHero from "@/components/AboutUsHero";
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

export const metadata = {
  metadataBase: new URL('https://gaurnishhealth.in'),
  title: 'Health Blog by Ajmer\'s Best Doctors | Dr. Manish Sharma & Dr. Gauri Mehra',
  description: 'Expert health articles and wellness tips from Dr. Manish Sharma (General Physician) and Dr. Gauri Mehra (Dietician) - Ajmer\'s leading healthcare specialists.',
  alternates: {
    canonical: 'https://gaurnishhealth.in/blog'
  },
  keywords: [
    'health blog ajmer',
    'medical articles by doctors',
    'wellness tips physician',
    'nutrition advice dietician',
    'Dr. Manish Sharma blog',
    'Dr. Gauri Mehra articles',
    'healthcare tips ajmer',
    'chronic disease management blog',
    'weight loss advice doctors',
    'diabetes care articles',
    'healthy lifestyle tips',
    'preventive healthcare blog',
    'doctor written health content'
  ],
  openGraph: {
    title: 'Health Blog by Ajmer\'s Best Doctors | Dr. Manish Sharma & Dr. Gauri Mehra',
    description: 'Trusted medical advice and wellness tips from Ajmer\'s leading healthcare specialists',
    url: 'https://gaurnishhealth.in/blog',
    siteName: 'GaurNish Health Blog',
    images: [
      {
        url: '/images/blog-og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Blog by Ajmer\'s Best Doctors | Dr. Manish Sharma & Dr. Gauri Mehra',
    description: 'Expert medical articles and wellness guidance from Ajmer\'s specialists',
    images: ['/images/blog-og-image.jpg'],
  }, robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    },
  },
   other: {
    "application-name": "Gaurnish HealthCare",
    author: "Gaurnish HealthCare",
    generator: "Next.js",
    "theme-color": "#ffffff",
    publisher: "Gaurnish HealthCare",
  },
};

function getBlogs() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileData);
  
  // Sort blogs by date (latest first)
  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function PaginationComponent({ currentPage, totalPages, baseUrl }) {
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;
    
    // Calculate start and end page numbers
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // Previous button
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      const href = prevPage === 1 ? baseUrl : `${baseUrl}?page=${prevPage}`;
      buttons.push(
        <Link
          key="prev"
          href={href}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          Previous
        </Link>
      );
    }
    
    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      const href = i === 1 ? baseUrl : `${baseUrl}?page=${i}`;
      buttons.push(
        <Link
          key={i}
          href={href}
          className={`px-3 py-2 text-sm font-medium border-t border-b ${
            i === currentPage
              ? 'bg-[#016630] text-white border-[#016630]'
              : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-50 hover:text-gray-700'
          } transition-colors ${i === startPage && currentPage === 1 ? 'border-l' : ''}`}
        >
          {i}
        </Link>
      );
    }
    
    // Next button
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      const href = `${baseUrl}?page=${nextPage}`;
      buttons.push(
        <Link
          key="next"
          href={href}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          Next
        </Link>
      );
    }
    
    return buttons;
  };
  
  return (
    <>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {renderPaginationButtons()}
          </nav>
        </div>
      )}
      
      {/* Page Info */}
      {totalPages > 1 && (
        <div className="mt-4 text-center text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </div>
      )}
    </>
  );
}

export default async function Blog({ searchParams }) {
  const allBlogs = getBlogs();
  const blogsPerPage = 6;
  
  // Get current page from URL params
  const params = await searchParams;
  const currentPage = parseInt(params?.page) || 1;
  
  // Calculate pagination
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = allBlogs.slice(startIndex, endIndex);
  
  // Ensure current page is valid
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
  
  return (
    <>
      <AboutUsHero
        title="Health & Wellness Blog"
        description="Stay informed with expert tips from Dr. Manish Sharma (General Physician) and Dr. Gauri Mehra (Dietician) on managing health, nutrition, lifestyle diseases, and wellness care."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
        ]}
      />

      <h1 className="hidden">Stay informed with expert tips from Dr. Manish Sharma (General Physician) and Dr. Gauri Mehra (Dietician) on managing health, nutrition, lifestyle diseases, and wellness care.</h1>
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Blog Count and Current Page Info */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, allBlogs.length)} of {allBlogs.length} articles
            </p>
          </div>
          
          {/* Blog Grid */}
          <Suspense fallback={<div className="text-center py-8">Loading blogs...</div>}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((blog) => (
                <article 
                  key={blog.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <div className="relative aspect-[3/2] w-full" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                    <Image 
                      src={blog.image || '/images/placeholder.jpg'} 
                      alt={blog.alt || blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-fit"
                      priority={blog.id <= 2}
                    />
                    <meta itemProp="url" content={blog.image} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <time 
                        dateTime={new Date(blog.date).toISOString()} 
                        itemProp="datePublished"
                        className="text-sm text-gray-500"
                      >
                        {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </time>
                      <span className="mx-2 text-gray-400">•</span>
                      <span itemProp="author" className="text-sm text-green-600">
                        {blog.author}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-700" itemProp="headline">
                      <Link href={`/blog/${blog.slug}`} itemProp="url">
                        {blog.heading}
                      </Link>
                    </h2>
                    <p className="text-gray-700 mb-4" itemProp="description">
                      {blog.excerpt || blog.content.substring(0, 120)}...
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags && blog.tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-block bg-[#016630] text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
                      aria-label={`Read more about ${blog.title}`}
                      itemProp="url"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Suspense>
          
          <PaginationComponent 
            currentPage={validCurrentPage} 
            totalPages={totalPages} 
            baseUrl="/blog" 
          />
        </div>
      </div>
    </>
  );
}