import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { caseStudies } from '@/content/caseStudies';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, '');
  const routes = ['', '/work', '/about', '/process', '/resume', '/contact'].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));
  const studies = caseStudies.map((c) => ({
    url: `${base}/work/${c.slug}`,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));
  return [...routes, ...studies];
}
