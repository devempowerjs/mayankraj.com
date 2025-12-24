'use client';
import { useEffect } from 'react';

function SEOHead() {
  useEffect(() => {
    document.title = 'Mayank Raj (Devempowerjs) Full-Stack Web Developer • Community Builder Award 2024 • Eureka! Junior Asia-Level Innovation Finalist (AISA) – 2025 • Full-Stack Engineering Excellence Award – 2025 • Student Innovator & Open-Source Creator';
 
    const metaTags = [
      { name: 'description', content: 'I\'m Mayank Raj (known online as @devempowerjs), a young innovator and full-stack web developer. Creator of DigitalGuard, PassX, and SafePost Checker. Community Builder Award 2024, Eureka! Junior Asia-Level Innovation Finalist (AISA) – 2025, Full-Stack Engineering Excellence Award – 2025. Student innovator passionate about open-source development and building production-grade web applications.' },
      { name: 'keywords', content: 'Mayank Raj, devempowerjs, Devempowerjs, DEVEMPOWERJS, Full Stack Developer, Full-Stack Web Developer, Web Developer, React Developer, TypeScript Developer, Next.js Developer,  Community Builder Award 2024, Eureka! Junior Asia-Level Innovation Finalist (AISA) – 2025, Full-Stack Engineering Excellence Award – 2025, Student Innovator, Open-Source Creator, DigitalGuard, PassX, SafePost Checker, Train Station Indicator, Jarvis Assistant, Games Terminal, Portfolio, Cyberpunk Portfolio, Young Developer, School Student Developer, Production-Grade Projects' },
      { name: 'author', content: 'Mayank Raj (Devempowerjs)' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { property: 'og:title', content: 'Mayank Raj (Devempowerjs) Full-Stack Web Developer • Community Builder Award -2024 • Eureka! Junior Asia-Level Innovation Finalist (AISA) – 2025 • Full-Stack Engineering Excellence Award – 2025' },
      { property: 'og:description', content: 'I\'m Mayank Raj (known online as @devempowerjs), a young innovator and full-stack web developer.  Community Builder Award 2024, Eureka! Junior Asia-Level Innovation Finalist (AISA) – 2025, Full-Stack Engineering Excellence Award – 2025' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Devempowerjs Portfolio' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Mayank Raj (Devempowerjs) Full-Stack Web Developer •  Community Builder Award -2024 • Eureka! Junior Asia-Level Innovation Finalist (AISA) – 2025 • Full-Stack Engineering Excellence Award – 2025' },
      { name: 'twitter:description', content: 'I\'m Mayank Raj (known online as @devempowerjs), a young innovator and full-stack web developer.' },
      { name: 'twitter:creator', content: '@devempowerjs' },
      { name: 'theme-color', content: '#0b0f14' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },
      { property: 'og:locale', content: 'en_US' },

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
