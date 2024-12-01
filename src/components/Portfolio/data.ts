import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'fintech-dashboard',
    title: 'Tristance Bance',
    category: 'UI/UX Design',
    tags: ['Dashboard', 'Fintech', 'Web App'],
    image: 'https://creatiwise.com/wp-content/uploads/2021/12/Screenshot-8-768x474.png',
    description: 'A complete overhaul of the dashboard interface for a leading fintech company.',
    challenge: 'The client needed a modern, intuitive dashboard that could handle complex financial data while maintaining simplicity for users.',
    solution: 'We created a clean, data-driven interface with customizable widgets and real-time analytics.',
    results: [
      'Reduced user learning curve by 60%',
      'Increased user engagement by 45%',
      'Improved task completion rate by 75%'
    ],
    technologies: ['React', 'D3.js', 'Tailwind CSS'],
    liveSiteUrl: 'https://example.com',
    caseStudyUrl: 'https://example.com/case-study'
  },
  {
    id: 'eco-brand',
    title: 'Alpha Blossom',
    category: 'UI Design',
    tags: ['Branding', 'Logo Design', 'Sustainability'],
    image: 'https://creatiwise.com/wp-content/uploads/2021/12/Screenshot-3-768x391.png',
    description: 'A premium shopping experience for a luxury fashion brand.',
    challenge: 'Create a brand identity that reflects environmental values while maintaining a premium feel.',
    solution: 'Developed a nature-inspired design system with sustainable materials and eco-friendly guidelines.',
    results: [
      'Brand recognition increased by 85%',
      'Social media engagement up by 120%',
      'Successfully launched in 3 new markets'
    ],
    technologies: ['Adobe Creative Suite', 'Sustainable Materials', 'Digital Assets'],
    liveSiteUrl: 'https://example.com',
    caseStudyUrl: 'https://example.com/case-study'
  },
  {
    id: 'ecommerce-app',
    title: 'Alpha Blossom',
    category: 'UI Design',
    tags: ['Mobile App', 'E-commerce', 'iOS'],
    image: 'https://creatiwise.com/wp-content/uploads/2021/12/Screenshot-6-768x390.png',
    description: 'A premium shopping experience for a luxury fashion brand.',
    challenge: 'Design an app that maintains the premium feel of the brand while providing seamless shopping.',
    solution: 'Created an immersive, gesture-based interface with stunning product visualization.',
    results: [
      'Conversion rate increased by 35%',
      'Average order value up by 50%',
      'Customer satisfaction score of 4.8/5'
    ],
    technologies: ['React Native', 'Shopify', 'Stripe'],
    liveSiteUrl: 'https://example.com',
    caseStudyUrl: 'https://example.com/case-study'
  },
  {
    id: 'employee-link',
    title: 'Employee Link',
    category: 'UI/UX Design',
    tags: ['Web App', 'HR', 'Dashboard'],
    image: 'https://creatiwise.com/wp-content/uploads/2021/12/Screenshot-7-768x390.png',
    description: 'A complete overhaul of the dashboard interface for a leading fintech company.',
    challenge: 'Create an intuitive HR management system that simplifies employee tracking and management.',
    solution: 'Developed a user-friendly dashboard with powerful analytics and reporting features.',
    results: [
      'HR productivity increased by 40%',
      'Employee satisfaction up by 65%',
      'Reduced administrative time by 30%'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    liveSiteUrl: 'https://example.com',
    caseStudyUrl: 'https://example.com/case-study'
  },
  {
    id: 'tristance-bance',
    title: 'Tristance Bance',
    category: 'Branding',
    tags: ['Branding', 'Digital Marketing', 'Web Design'],
    image: 'https://creatiwise.com/wp-content/uploads/2021/12/Screenshot-8-768x474.png',
    description: 'A comprehensive brand identity for an eco-conscious startup.',
    challenge: 'Develop a distinctive brand identity that stands out in the digital marketing space.',
    solution: 'Created a modern, dynamic brand system with versatile applications.',
    results: [
      'Market recognition increased by 75%',
      'Client acquisition up by 90%',
      'Brand value increased by 120%'
    ],
    technologies: ['Adobe Creative Suite', 'Figma', 'Webflow'],
    liveSiteUrl: 'https://example.com',
    caseStudyUrl: 'https://example.com/case-study'
  },
  {
    id: 'carlos-spencer',
    title: 'Carlos v Spencer',
    category: 'UI Design',
    tags: ['Web Design', 'E-commerce', 'Fashion'],
    image: 'https://creatiwise.com/wp-content/uploads/2021/12/Screenshot-5-768x368.png',
    description: 'A premium shopping experience for a luxury fashion brand.',
    challenge: 'Create a high-end online shopping experience that reflects the brand\'s luxury positioning.',
    solution: 'Designed an elegant, minimalist interface with focus on product presentation.',
    results: [
      'Online sales increased by 85%',
      'Average session duration up by 60%',
      'Cart abandonment reduced by 40%'
    ],
    technologies: ['Next.js', 'Shopify Plus', 'Framer Motion'],
    liveSiteUrl: 'https://example.com',
    caseStudyUrl: 'https://example.com/case-study'
  }
];