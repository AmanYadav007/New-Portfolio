import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { ExperienceCard } from '@/components/experience/ExperienceCard';

const experiences = [
    {
        company: 'Spotter Labs',
        role: 'Full Stack Engineer',
        problem: 'Complex logistics and fleet data needed to be usable and actionable.',
        solution: 'Built scalable React applications, real-time dashboards, GraphQL integrations, payment flows, and interactive maps.',
        technologies: ['React', 'GraphQL', 'TypeScript', 'Stripe', 'Maps API'],
    },
    {
        company: 'Accenture',
        role: 'Web Developer',
        problem: 'Enterprise teams needed reliable, compliant, and fast workflows across content and creative systems.',
        solution: 'Worked on CMS publishing, HTML5 creatives, and supported regulated workflows including Veeva Vault (MLR document management, approvals, lifecycle support).',
        technologies: ['AEM', 'Veeva Vault', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
        company: 'BonusLyf',
        role: 'Founder',
        problem: 'Emotional support is expensive, inaccessible, or intimidating for many people.',
        solution: 'Built an AI-powered emotional support platform with a privacy-first approach, empathetic UX, and real-time conversational AI.',
        technologies: ['Next.js', 'OpenAI API', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    },
    {
        company: 'BLIS',
        role: 'JavaScript Support Engineer II',
        problem: 'AdTech campaigns needed efficient data pipelines and reliable creative delivery.',
        solution: 'Developed AdTech solutions, data processing pipelines, and campaign management tools for T-Mobile and other clients.',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'Ad Serving Platforms'],
    },
];

export default function Experience() {
    return (
        <>
            <Header />
            <main>
                <Section>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="mb-4">Experience</h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            My journey building products across startups and enterprises
                        </p>

                        <div>
                            {experiences.map((exp, index) => (
                                <ExperienceCard key={exp.company} {...exp} index={index} />
                            ))}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
