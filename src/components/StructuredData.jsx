import { useEffect } from 'react';

/**
 * StructuredData Component - Adds JSON-LD schema markup for SEO
 * Supports LocalBusiness, Organization, and WebSite schemas
 */
export default function StructuredData({ type = 'home' }) {
  useEffect(() => {
    // Remove existing structured data script
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'G Business Support',
      alternateName: 'G Business Support - Digital Marketing & Web Development',
      description: 'Full-stack digital marketing and operations agency in Bangalore offering expert services in Google Ads, Social Media Marketing, Web Development, Backend Solutions, and Staffing Services.',
      url: 'https://gbusinesssupport.com',
      logo: 'https://gbusinesssupport.com/logo.png',
      image: 'https://gbusinesssupport.com/og-image.jpg',
      telephone: '+919071861881',
      email: 'hrdlegacy@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Richmond Circle, 301, 3rd Floor, Andree Capitol Building Behind Axis Bank, Doule Road, Kengal Hanumanthaiah Rd, Shanti Nagar',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560027',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.960739',
        longitude: '77.594434'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:00',
        closes: '18:00'
      },
      priceRange: '$$',
      areaServed: {
        '@type': 'Country',
        name: 'India'
      },
      sameAs: [
        'https://www.facebook.com/gbusinesssupport',
        'https://www.linkedin.com/company/gbusinesssupport',
        'https://twitter.com/gbusinesssupport'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing & Web Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Google Ads Management',
              description: 'Expert Google Ads campaign management and optimization services'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Google My Business Optimization',
              description: 'Local SEO and Google My Business profile optimization'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Social Media Marketing',
              description: 'Strategic social media marketing campaigns across all platforms'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development',
              description: 'Custom web development and responsive website design services'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Backend Solutions',
              description: 'Backend development and automation solutions'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Outsourced Staffing',
              description: 'Professional staffing and recruitment services'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Banking and Insurance Services',
              description: 'Specialized digital solutions for banking and insurance sectors'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Telecom Services',
              description: 'Digital marketing and technology solutions for telecom industry'
            }
          }
        ]
      }
    };

    // Add Organization schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'G Business Support',
      url: 'https://gbusinesssupport.com',
      logo: 'https://gbusinesssupport.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+919071861881',
        contactType: 'Customer Service',
        email: 'hrdlegacy@gmail.com',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Kannada']
      },
      sameAs: [
        'https://www.facebook.com/gbusinesssupport',
        'https://www.linkedin.com/company/gbusinesssupport'
      ]
    };

    // Add WebSite schema with search action
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'G Business Support',
      url: 'https://gbusinesssupport.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://gbusinesssupport.com/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    };

    // Create script elements
    const schemas = [baseSchema, organizationSchema, websiteSchema];
    
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.id = `structured-data-${index}`;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) script.remove();
      });
    };
  }, [type]);

  return null;
}

