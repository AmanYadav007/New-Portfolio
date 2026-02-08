import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
    return (
        <>
            <Header />
            <main>
                <Section>
                    <div className="max-w-6xl mx-auto">
                        <h1 className="mb-4">Projects</h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            Products I've built from concept to deployment
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
