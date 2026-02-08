import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { SkillCategory } from '@/components/skills/SkillCategory';

const skillCategories = [
    {
        title: 'How I Solve Problems',
        skills: [
            'Requirement breakdown and analysis',
            'Debugging production issues',
            'Designing scalable UI systems',
            'Balancing UX, performance & business needs',
            'Technical documentation and communication',
        ],
    },
    {
        title: 'How I Build',
        skills: [
            'React, JavaScript, TypeScript, HTML, CSS',
            'Next.js, Node.js',
            'REST & GraphQL APIs',
            'Firebase, Supabase',
            'AI integrations (OpenAI APIs)',
            'Stripe payment integration',
            'Real-time dashboards and data visualization',
        ],
    },
    {
        title: 'Enterprise & Platforms',
        skills: [
            'Adobe Experience Manager (AEM)',
            'Veeva Vault (MLR workflows, document management)',
            'Compliance-driven systems',
            'AdTech pipelines and campaign management',
            'Enterprise CMS and publishing workflows',
        ],
    },
];

export default function Skills() {
    return (
        <>
            <Header />
            <main>
                <Section>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="mb-4">Skills</h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            Problem-oriented approach to building products
                        </p>

                        <div className="grid md:grid-cols-1 gap-8">
                            {skillCategories.map((category, index) => (
                                <SkillCategory
                                    key={category.title}
                                    title={category.title}
                                    skills={category.skills}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
