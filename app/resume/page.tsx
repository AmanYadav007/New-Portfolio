import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function Resume() {
    return (
        <>
            <Header />
            <main>
                <Section>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="mb-4">Resume</h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Download my resume or view a summary below
                        </p>

                        <div className="mb-8">
                            <Button href="https://drive.google.com/uc?export=download&id=1TR1KA1m70waAu6Bb4yBqWAphHXyhRApJ" variant="primary">
                                Download Resume (PDF)
                            </Button>
                        </div>

                        {/* Resume Summary */}
                        <div className="bg-muted rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-6">Summary</h2>
                            <p className="text-muted-foreground mb-8">
                                Problem-solving software engineer with 4+ years of experience building scalable
                                web products across enterprise systems, SaaS platforms, and AI-powered tools.
                                Proven track record of delivering reliable, user-focused solutions at companies
                                like Spotter Labs, Accenture, and BLIS.
                            </p>

                            <h3 className="text-xl font-bold mb-4">Core Competencies</h3>
                            <ul className="grid md:grid-cols-2 gap-3 mb-8">
                                {[
                                    'Full-stack web development',
                                    'React & Next.js applications',
                                    'Enterprise CMS (AEM, Veeva Vault)',
                                    'AI integration & product development',
                                    'GraphQL & REST APIs',
                                    'Payment systems (Stripe)',
                                    'Real-time dashboards',
                                    'AdTech solutions',
                                ].map((skill) => (
                                    <li key={skill} className="flex items-start">
                                        <span className="text-accent mr-2">•</span>
                                        <span className="text-muted-foreground">{skill}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-sm text-muted-foreground">
                                Note: Please upload your resume PDF to the <code className="bg-background px-2 py-1 rounded">/public</code> folder
                                as <code className="bg-background px-2 py-1 rounded">resume.pdf</code> to enable the download functionality.
                            </p>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
