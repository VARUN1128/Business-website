import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component - Dynamically updates meta tags, title, and structured data per page
 * Usage: <SEO title="Page Title" description="Page description" />
 */
export default function SEO({ 
  title = 'G Business Support | Digital Marketing & Web Development Services',
  description = 'G Business Support is a full-stack digital marketing and operations agency in Bangalore offering expert services in Google Ads, Social Media Marketing, Web Development, Backend Solutions, and Staffing Services.',
  keywords = 'digital marketing, web development, google ads, social media marketing, bangalore',
  image = 'https://gbusinesssupport.com/og-image.jpg',
  type = 'website',
  canonical = ''
}) {
  const location = useLocation();
  const baseUrl = 'https://gbusinesssupport.com';
  const currentUrl = canonical || `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('title', title);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);

    // Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

  }, [title, description, keywords, image, type, currentUrl]);

  return null;
}

