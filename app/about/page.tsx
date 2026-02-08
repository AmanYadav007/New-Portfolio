import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';

export default function About() {
    return (
        <>
            <Header />
            <main>
                <Section>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="mb-8">About Me</h1>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl mb-6">
                                Hi, I'm Aman — a problem-solving software engineer based in Mumbai.
                            </p>

                            <p className="mb-6">
                                Over the past 4+ years, I've worked across startups and global companies like
                                Spotter Labs, Accenture, BLIS, and Merkle. My experience spans enterprise systems,
                                SaaS platforms, AdTech pipelines, and AI-powered products.
                            </p>

                            <p className="mb-6">
                                I enjoy working on problems where things are unclear at first — understanding the
                                core challenge, simplifying the system, and building something clean, reliable,
                                and scalable.
                            </p>

                            <p>
                                Outside of work, I'm curious about space, enjoy photography, and sketch when
                                inspiration strikes.
                            </p>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
