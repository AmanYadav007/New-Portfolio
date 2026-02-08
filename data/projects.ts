export interface Project {
    id: string;
    title: string;
    description: string;
    problem: string;
    solution: string;
    architecture?: string;
    technologies: string[];
    features: string[];
    learnings?: string[];
    link?: string;
    github?: string;
    image?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 'bonuslyf',
        title: 'BonusLyf',
        description: 'AI-powered emotional support platform with privacy-first approach',
        problem: 'Emotional support is expensive, inaccessible, or intimidating for many people. Traditional therapy can cost $100-300 per session, and many people feel uncomfortable opening up to strangers.',
        solution: 'Built an AI-powered emotional support platform that provides empathetic, judgment-free conversations 24/7. The platform uses advanced AI to understand emotional context and provide supportive responses while maintaining complete user privacy.',
        architecture: 'Built with Next.js for the frontend, Firebase for authentication and data storage, and OpenAI API for conversational AI. Implemented real-time chat with streaming responses, user session management, and privacy-focused data handling.',
        technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Firebase', 'Tailwind CSS', 'Vercel'],
        features: [
            'Real-time AI conversations with empathetic responses',
            'Privacy-first architecture - no data sharing',
            'Multiple AI companion personalities',
            'Session history and context awareness',
            'Mobile-responsive design',
            'Secure authentication',
        ],
        learnings: [
            'Designing empathetic AI interactions requires careful prompt engineering',
            'Privacy and security are paramount in mental health applications',
            'User trust is built through transparency and consistent experience',
            'Real-time streaming improves perceived responsiveness',
        ],
        featured: true,
    },
    {
        id: 'spotter-platform',
        title: 'Spotter Platform',
        description: 'Fleet management and logistics dashboard for enterprise clients',
        problem: 'Logistics companies needed a unified platform to manage fleet data, track vehicles in real-time, process payments, and generate actionable insights from complex data.',
        solution: 'Developed a comprehensive React-based platform with real-time dashboards, interactive maps, GraphQL data integration, and Stripe payment processing. The platform handles thousands of vehicles and transactions daily.',
        technologies: ['React', 'TypeScript', 'GraphQL', 'Stripe', 'Google Maps API', 'Chart.js'],
        features: [
            'Real-time fleet tracking with interactive maps',
            'Payment processing and invoice management',
            'Custom analytics dashboards',
            'Vehicle and driver management',
            'Route optimization tools',
            'Mobile-responsive interface',
        ],
        featured: true,
    },
    {
        id: 'quick-side-tool',
        title: 'Quick Side Tool',
        description: 'PDF processing tool handling 500+ page documents efficiently',
        problem: 'Users needed to process and manipulate large PDF files (500+ pages) quickly without performance degradation or complicated interfaces.',
        solution: 'Built a lightweight, performant PDF tool focused on speed and usability. Optimized for handling large files with minimal memory footprint.',
        technologies: ['JavaScript', 'PDF.js', 'Web Workers', 'HTML5', 'CSS3'],
        features: [
            'Fast processing of 500+ page PDFs',
            'Split, merge, and reorganize pages',
            'Client-side processing for privacy',
            'Minimal, intuitive interface',
            'No file size limits',
        ],
        featured: false,
    },
    {
        id: 'image-resizer',
        title: 'Image Resizer',
        description: 'Simple, fast image resizing tool used by 300+ users',
        problem: 'Users needed a quick, reliable way to resize images without complicated software or uploading files to servers.',
        solution: 'Created a client-side image resizing tool that processes images entirely in the browser, ensuring privacy and speed.',
        technologies: ['JavaScript', 'Canvas API', 'HTML5', 'CSS3'],
        features: [
            'Instant client-side processing',
            'Multiple output formats',
            'Batch processing support',
            'Quality presets',
            'No server uploads - complete privacy',
        ],
        featured: false,
    },
];
