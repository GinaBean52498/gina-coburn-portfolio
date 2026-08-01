/**
 * SITE CONFIG — edit everything about "you" here in one place.
 * Anything marked TODO is a placeholder you should replace before publishing.
 */

export const site = {
  name: 'Gina Coburn, Ph.D.',
  // Shown in the header and browser tab.
  shortName: 'Gina Coburn',
  // The role you're primarily targeting (used in metadata + hero). TODO: adjust emphasis.
  role: 'Product Designer · AI-Assisted UX Strategist · Accessibility-Focused Builder',
  location: 'Ventura County, CA',

  // Positioning — the one-liner a hiring manager should remember.
  tagline: 'I turn complex systems into clear, accessible experiences.',

  // Longer positioning statement (home + about).
  positioning:
    'Learning-experience and product-thinking leader with 15+ years translating complex, technical, and regulated systems into staged, user-centered experiences — now focused on product design, AI-assisted prototyping, and designing for technical audiences.',

  // Contact — TODO: confirm/replace.
  email: 'ginacoburn2@gmail.com',
  phone: '805-626-2077', // optional; remove if you'd rather not list it
  linkedin: 'https://www.linkedin.com/in/YOUR-LINKEDIN', // TODO: replace with your real LinkedIn URL
  // Path to your résumé PDF placed in /public/resume/. TODO: drop your PDF here.
  resumePath: '/resume/gina-coburn-resume.pdf',

  // Deployment URL (used for absolute SEO/OG links). TODO: set to your Vercel/custom domain.
  url: 'https://your-domain.com',

  // Navigation (order matters).
  nav: [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/process', label: 'Process' },
    { href: '/resume', label: 'Résumé' },
    { href: '/contact', label: 'Contact' },
  ],
} as const;

export type Site = typeof site;
