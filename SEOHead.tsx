'use client';
import { useEffect } from 'react';

function SEOHead() {
  useEffect(() => {
    document.title = 'Mayank Raj (devempowerjs) | Building Software That Matters';
 
    const metaTags = [
      { name: 'description', content: 'Mayank Raj (devempowerjs) is a software developer passionate about building impactful software, open-source projects, and modern web applications while strengthening his foundations in Python and computer science.' },
      { name: 'keywords', content: 'Mayank Raj, devempowerjs, Software Developer, Python, JavaScript, TypeScript, Next.js, React, Node.js, Open Source, Portfolio, Software Development, Computer Science' },
      { name: 'author', content: 'Mayank Raj (devempowerjs)' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { property: 'og:title', content: 'Mayank Raj (@devempowerjs) | Building Software That Matters' },
      { property: 'og:description', content: 'Mayank Raj (devempowerjs) is a software developer passionate about building impactful software, open-source projects, and modern web applications while strengthening his foundations in Python and computer science.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Devempowerjs Portfolio' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Mayank Raj (@devempowerjs) | Building Software That Matters' },
      { name: 'twitter:description', content: 'Mayank Raj (devempowerjs) is a software developer passionate about building impactful software, open-source projects, and modern web applications while strengthening his foundations in Python and computer science.' },
      { name: 'twitter:creator', content: '@devempowerjs' },
      { name: 'theme-color', content: '#0b0f14' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'subject', content: 'Software Development, Computer Science, Web Development Portfolio' },
      { name: 'classification', content: 'Portfolio, Software Development, Programming' },
      { name: 'category', content: 'Technology, Software Development, Computer Science' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'distribution', content: 'Global' },
      { name: 'rating', content: 'General' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'topic', content: 'Software Development, Python, Web Development, Computer Science' },
      { name: 'summary', content: 'Portfolio of a software developer focusing on impactful software, real-world projects, and scalable solutions.' }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = property ? 'property' : 'name';
      const value = property || name;
      let meta = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) meta.setAttribute('property', property);
        else meta.setAttribute('name', name!);
        document.head.appendChild(meta);
      }
      (meta as HTMLMetaElement).setAttribute('content', content);
    });

  }, []);

  return null;
}

export default SEOHead;
export { SEOHead };