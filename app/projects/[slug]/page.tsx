import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.id,
    }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.id === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Header />
            <main>
                <Section>
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="mb-12">
                            <h1 className="mb-4">{project.title}</h1>
                            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

                            <div className="flex gap-4">
                                {project.link && (
                                    <Button href={project.link} variant="primary">
                                        <FaExternalLinkAlt className="inline mr-2" />
                                        View Live
                                    </Button>
                                )}
                                {project.github && (
                                    <Button href={project.github} variant="outline">
                                        <FaGithub className="inline mr-2" />
                                        View Code
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Problem */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-accent">Problem</h2>
                            <p className="text-lg text-muted-foreground">{project.problem}</p>
                        </div>

                        {/* Solution */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-accent">Solution</h2>
                            <p className="text-lg text-muted-foreground">{project.solution}</p>
                        </div>

                        {/* Architecture */}
                        {project.architecture && (
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-4 text-accent">Architecture</h2>
                                <p className="text-lg text-muted-foreground">{project.architecture}</p>
                            </div>
                        )}

                        {/* Features */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-accent">Key Features</h2>
                            <ul className="space-y-2">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-accent mr-3 mt-1">•</span>
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-accent">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-muted rounded-lg border border-border"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Learnings */}
                        {project.learnings && project.learnings.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-4 text-accent">Key Learnings</h2>
                                <ul className="space-y-2">
                                    {project.learnings.map((learning, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-accent mr-3 mt-1">•</span>
                                            <span className="text-muted-foreground">{learning}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Back Button */}
                        <div className="mt-12">
                            <Button href="/projects" variant="outline">
                                ← Back to Projects
                            </Button>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
