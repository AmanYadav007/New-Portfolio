'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTimes, FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const powers = [
    {
        name: 'REACT',
        mode: 'CORE',
        type: 'Frontend',
        desc: 'Constructs complex UI systems. Special ability: "Component Reusability". Used for SaaS platforms & Dashboards.',
        details: ['HTML · CSS · JavaScript', 'React · Next.js · TypeScript', 'Tailwind · GSAP · Framer Motion', 'Performance Optimization', 'Accessibility (WCAG)']
    },
    {
        name: 'APIs',
        mode: 'ADVANCED',
        type: 'Integration',
        desc: 'Connects disjointed systems. Special ability: "GraphQL Federation". Integrates AdTech, SaaS, and AI endpoints.',
        details: ['Node.js · Express', 'GraphQL · Apollo', 'RESTful Design', 'Stripe Integration', 'Third-party Webhooks']
    },
    {
        name: 'AI / LLMs',
        mode: 'BATTLE-TESTED',
        type: 'Intelligence',
        desc: 'Infuses apps with reasoning. Special ability: "Context Awareness". Builds empathetic conversational agents.',
        details: ['OpenAI API', 'LangChain', 'Prompt Engineering', 'Vector Databases', 'RAG Architectures']
    },
    {
        name: 'ENTERPRISE',
        mode: 'BATTLE-TESTED',
        type: 'Environment',
        desc: 'Thrives in high-stakes zones. Special ability: "Compliance Shield". Reliability focus for regulated workflows.',
        details: ['CI/CD Pipelines', 'Docker · Kubernetes', 'AWS · Vercel', 'Agile/Scrum', 'Code Reviews & Mentorship']
    },
    {
        name: 'UX / UI',
        mode: 'CORE',
        type: 'Design',
        desc: 'Crafts intuitive flows. Special ability: "User Empathy". Bridges the gap between complex logic and human needs.',
        details: ['Figma · Sketch', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    }
];

const skillCategories = [
    {
        category: "🧠 CORE IDENTITY",
        items: [
            "Problem-solving Software Engineer",
            "Full-Stack Developer",
            "Frontend-heavy Product Engineer",
            "HTML5 Banner / AdTech Developer",
            "Founder & Independent Product Builder"
        ]
    },
    {
        category: "💻 PROGRAMMING LANGUAGES",
        items: [
            "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SCSS",
            "Python (Data scripting, automation)", "SQL", "Basic PHP (AdTech / integrations)"
        ]
    },
    {
        category: "🧩 FRONTEND DEVELOPMENT",
        items: [
            "React.js (hooks, context, component architecture)",
            "Next.js (App Router, SSR, SEO)",
            "Responsive Web Design (mobile-first)",
            "Component-driven UI systems",
            "State management (Context API)",
            "DOM manipulation",
            "Accessibility (a11y) best practices",
            "Performance optimization"
        ]
    },
    {
        category: "🎨 STYLING & UI",
        items: [
            "Tailwind CSS", "CSS Modules", "Styled Components", "SCSS / SASS",
            "CSS animations & transitions", "GSAP (advanced motion & scroll animation)",
            "Framer Motion", "Comic-style & experimental UI design"
        ]
    },
    {
        category: "🧠 FULL-STACK & BACKEND",
        items: [
            "Node.js", "Firebase (Auth, Firestore, Hosting)", "REST API design & integration",
            "GraphQL (Apollo Client)", "Authentication flows", "Role-based access logic",
            "Payment integrations (Stripe)", "Serverless architecture concepts"
        ]
    },
    {
        category: "🤖 AI & LLM INTEGRATION",
        items: [
            "OpenAI API", "Conversational AI systems", "Context-aware chat flows",
            "Emotion-driven UX for AI", "Prompt engineering basics", "AI-powered product design (BonusLyf)"
        ]
    },
    {
        category: "📊 DATA, MAPS & VISUALIZATION",
        items: [
            "D3.js", "Google Maps API", "Interactive charts & dashboards",
            "Real-time data visualization", "Analytics-driven UI decisions"
        ]
    },
    {
        category: "🏢 ENTERPRISE & PLATFORMS",
        items: [
            "Adobe Experience Manager (AEM)", "Veeva Vault (MLR document workflows)",
            "CMS publishing & content workflows", "Compliance-driven development",
            "High-stakes production environments"
        ]
    },
    {
        category: "📢 ADTECH & HTML5 BANNER DEVELOPMENT",
        items: [
            "HTML5 rich media banners", "Google Ads & DV360 compliance",
            "GSAP-based ad animations", "Dynamic Creative Optimization (DCO)",
            "JSON-based feed integrations", "Cross-platform ad testing",
            "Performance & file-size optimization", "Polite loading techniques"
        ]
    },
    {
        category: "🧪 ADTECH SYSTEMS & INFRA",
        items: [
            "RTB ecosystem understanding", "Meta Ads Manager", "Amazon Ads",
            "DSP/SSP integration concepts", "Campaign debugging & QA",
            "JIRA-based issue tracking", "Third-party ad platform certification"
        ]
    },
    {
        category: "🗄️ DATABASES & STORAGE",
        items: [
            "PostgreSQL", "MySQL", "Firebase Firestore", "Supabase",
            "Data validation & reconciliation"
        ]
    },
    {
        category: "⚙️ DEV TOOLS & WORKFLOWS",
        items: [
            "Git / GitHub / GitLab", "Webpack", "Vite", "Babel",
            "ESLint & Prettier", "Chrome DevTools", "Postman",
            "CI/CD basics", "Agile / Scrum workflows"
        ]
    },
    {
        category: "🎨 DESIGN & CREATIVE TOOLS",
        items: [
            "Figma (UI/UX design & prototyping)", "Adobe Photoshop", "Adobe Illustrator",
            "Adobe After Effects", "Adobe XD", "Google Web Designer",
            "Design-to-code workflows"
        ]
    },
    {
        category: "🧠 UX, PRODUCT & PROBLEM SOLVING",
        items: [
            "Requirement analysis", "User-centric design thinking", "Empathy-driven UX",
            "Rapid prototyping", "Iterative product improvement", "Founder-level ownership",
            "Cross-functional collaboration"
        ]
    },
    {
        category: "🧑🚀 PERSONAL & CREATIVE SKILLS",
        items: [
            "Photography", "Video creation", "Visual storytelling",
            "Sketching & ideation", "Psychology-inspired UX thinking",
            "Strong written & visual communication"
        ]
    },
    {
        category: "🚀 BUILT & SHIPPED PRODUCTS",
        items: [
            "BonusLyf (AI emotional support platform)", "Quick Side Tool (PDF & image utilities)",
            "Image Resizer (300+ users)", "SaaS logistics & analytics platforms",
            "Chrome extensions", "HTML5 ad frameworks"
        ]
    }
];

const questions = [
    { q: "What is the capital of France?", a: ["paris"] },
    { q: "What does HTML stand for?", a: ["hypertext markup language"] },
    { q: "What is 2 + 2?", a: ["4", "four"] },
    { q: "Which planet is known as the Red Planet?", a: ["mars"] },
    { q: "What is the main language for Web Development?", a: ["javascript", "js", "typescript", "ts"] },
    { q: "Who created Linux?", a: ["linus torvalds", "linus"] },
];

export const Powers: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedPower, setSelectedPower] = useState<typeof powers[0] | null>(null);
    const [showQuiz, setShowQuiz] = useState(false);
    const [answer, setAnswer] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState(false);
    const [openCategories, setOpenCategories] = useState<number[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const toggleCategory = (index: number) => {
        setOpenCategories(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered entry
            gsap.from('.power-card', {
                y: 100,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%'
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleOpenQuiz = () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestionIndex(randomIndex);
        setShowQuiz(true);
    };

    const handleQuizSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const currentQ = questions[currentQuestionIndex];
        const userAnswer = answer.toLowerCase().trim();

        if (currentQ.a.includes(userAnswer)) {
            setIsUnlocked(true);
            setError(false);
        } else {
            setError(true);
        }
    };

    const closeQuiz = () => {
        setShowQuiz(false);
        setAnswer('');
        setError(false);
        setIsUnlocked(false);
    };

    return (
        <section ref={containerRef} className="py-[clamp(96px,12vh,160px)] bg-white border-t-4 border-b-4 border-black relative">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
                    backgroundSize: '10px 10px'
                }}
            ></div>

            <div className="container relative z-10">
                <div className="mb-16 flex flex-col items-center">
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 text-center">
                        Special <span className="text-transparent text-outline-black" style={{ WebkitTextStroke: '2px black' }}>Abilities</span>
                    </h2>
                    <div className="bg-black text-white px-6 py-2 font-bold uppercase tracking-widest text-sm transform rotate-1 shadow-[4px_4px_0px_0px_#7C3AED]">
                        Choose Your Loadout
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {powers.map((power, i) => (
                        <div
                            key={power.name}
                            onClick={() => setSelectedPower(power)}
                            className="power-card comic-panel bg-[#F8F7F4] hover:bg-white transition-colors group cursor-pointer comic-shadow-hover relative overflow-hidden"
                        >
                            {/* Card Header */}
                            <div className="flex justify-between items-start mb-4 border-b-2 border-dashed border-black pb-4">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1">
                                        {power.type}
                                    </span>
                                    <h3 className="text-3xl font-bold mt-2">{power.name}</h3>
                                </div>
                                <div className="text-xs font-mono font-bold uppercase border-2 border-black bg-accent text-white px-2 py-1 flex items-center group-hover:bg-black transition-colors">
                                    MODE: {power.mode}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="min-h-[100px]">
                                <p className="font-comic text-lg leading-relaxed">
                                    {power.desc}
                                </p>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 bg-black clip-path-polygon-[100%_0,0_100%,100%_100%]"></div>
                        </div>
                    ))}

                    {/* Filler / "More" Card */}
                    <div
                        onClick={handleOpenQuiz}
                        className="power-card comic-panel bg-black text-white flex items-center justify-center comic-shadow-hover group cursor-pointer"
                    >
                        <div className="text-center group-hover:scale-110 transition-transform">
                            <p className="font-bold text-2xl uppercase mb-2">Unlock More</p>
                            <p className="font-comic text-sm opacity-70">Take the challenge -{'>'}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detail Drawer / Modal */}
            {selectedPower && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedPower(null)}>
                    <div
                        className="bg-white border-4 border-black w-full max-w-2xl p-12 md:p-16 relative shadow-[16px_16px_0px_0px_#7C3AED] animate-in fade-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={() => setSelectedPower(null)} className="absolute top-4 right-4 text-2xl hover:scale-110 transition-transform p-2">
                            <FaTimes />
                        </button>

                        <div className="mb-8">
                            <span className="bg-black text-white px-3 py-1 text-sm font-bold uppercase tracking-widest">
                                {selectedPower.type} // MODE: {selectedPower.mode}
                            </span>
                            <h2 className="text-6xl font-bold uppercase mt-4">{selectedPower.name}</h2>
                            <p className="font-comic text-xl mt-4 max-w-lg">{selectedPower.desc}</p>
                        </div>

                        <div className="border-t-4 border-black pt-8">
                            <h4 className="font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                                <FaArrowRight className="text-accent" /> Skill Tree
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {selectedPower.details.map((detail, i) => (
                                    <span key={i} className="px-4 py-2 border-2 border-black font-bold hover:bg-black hover:text-white transition-colors cursor-default">
                                        {detail}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 text-right">
                            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                                Click outside to close
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Quiz Modal */}
            {showQuiz && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={closeQuiz}>
                    <div
                        className={`bg-white border-4 border-black w-full relative shadow-[16px_16px_0px_0px_#fff] p-6 md:p-10 animate-in fade-in zoom-in-95 duration-300 ${!isUnlocked ? 'max-w-lg' : 'max-w-4xl h-[80vh]'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={closeQuiz} className="absolute top-4 right-4 text-2xl p-2 hover:rotate-90 transition-transform"><FaTimes /></button>

                        {!isUnlocked ? (
                            <div className="text-center">
                                <h3 className="text-3xl font-bold uppercase mb-2">Gatekeeper Protocol</h3>
                                <p className="font-comic text-gray-600 mb-8">Answer correctly to access the full archives.</p>

                                <div className="bg-gray-100 p-6 border-2 border-black mb-6 transform -rotate-1">
                                    <p className="font-bold text-lg">Question: {questions[currentQuestionIndex].q}</p>
                                </div>

                                <form onSubmit={handleQuizSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                        placeholder="Type answer..."
                                        className="w-full border-4 border-black p-4 font-mono text-lg focus:outline-none focus:border-accent"
                                        autoFocus
                                    />
                                    {error && <p className="text-red-600 font-bold animate-pulse">Access Denied. Try again.</p>}

                                    <button type="submit" className="w-full bg-black text-white font-bold uppercase py-4 hover:bg-accent transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-none">
                                        Unlock Archives
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="flex flex-col h-full overflow-hidden">
                                <div className="flex-shrink-0 mb-4">
                                    <h3 className="text-4xl font-bold uppercase mb-2 text-accent">Access Granted</h3>
                                    <p className="font-mono text-xs uppercase tracking-widest border-b-2 border-black pb-4">Full Skill Inventory Unlocked</p>
                                </div>

                                <div className="overflow-y-auto custom-scrollbar pr-2 flex-grow">
                                    {skillCategories.map((cat, index) => (
                                        <div key={index} className="mb-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                                            <button
                                                onClick={() => toggleCategory(index)}
                                                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-accent hover:text-white transition-colors font-bold uppercase text-left group"
                                            >
                                                <span className="text-sm md:text-base">{cat.category}</span>
                                                {openCategories.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
                                            </button>

                                            {openCategories.includes(index) && (
                                                <div className="p-4 bg-white border-t-2 border-black animate-in slide-in-from-top-2 duration-200">
                                                    <div className="grid grid-cols-1 gap-2">
                                                        {cat.items.map((item, idx) => (
                                                            <div key={idx} className="flex items-start gap-3">
                                                                <div className="w-1.5 h-1.5 bg-accent mt-2 rounded-full flex-shrink-0"></div>
                                                                <span className="font-comic text-sm md:text-base leading-snug">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <button onClick={closeQuiz} className="w-full mt-4 border-2 border-black font-bold uppercase py-3 hover:bg-gray-100 flex-shrink-0">
                                    Close Archives
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};
