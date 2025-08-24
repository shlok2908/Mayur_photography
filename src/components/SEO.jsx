import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    // Remove any existing meta tags
    const existingMetaTags = document.querySelectorAll('meta[name="robots"]');
    existingMetaTags.forEach(tag => tag.remove());

    // Add appropriate meta tags based on the current route
    if (location.pathname === '/') {
      // Main page - allow indexing
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
      document.head.appendChild(meta);
    } else {
      // All other pages - block indexing
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow, noarchive, nosnippet, noimageindex';
      document.head.appendChild(meta);
    }

    // Update page title for non-main pages
    if (location.pathname !== '/') {
      const titles = {
        '/photography': 'Photography Gallery - Mayur Photography',
        '/films': 'Films - Mayur Photography',
        '/blog': 'Blog - Mayur Photography',
        '/editorials': 'Editorials - Mayur Photography',
        '/contact-us': 'Contact Us - Mayur Photography',
        '/faq': 'FAQ - Mayur Photography'
      };
      
      const title = titles[location.pathname] || 'Mayur Photography';
      document.title = title;
    } else {
      // Main page title
      document.title = 'Mayur Photography - Professional Wedding & Portrait Photography Services';
    }

    // Update canonical URL
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.href = `https://mayurphotography.com${location.pathname}`;
    }

  }, [location.pathname]);

  return null; // This component doesn't render anything
}
