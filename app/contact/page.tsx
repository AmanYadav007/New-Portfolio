import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
    return (
        <>
            <Header />
            <main>
                <Section>
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="mb-4">Get in Touch</h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            I'm always open to discussing new projects, opportunities, or collaborations.
                        </p>

                        <div className="grid gap-6 max-w-md mx-auto">
                            {/* Email */}
                            <a
                                href="mailto:your.email@example.com"
                                className="flex items-center gap-4 p-6 bg-muted rounded-xl hover:bg-border transition-colors"
                            >
                                <FaEnvelope className="w-6 h-6 text-accent" />
                                <div className="text-left">
                                    <p className="font-semibold">Email</p>
                                    <p className="text-sm text-muted-foreground">your.email@example.com</p>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-6 bg-muted rounded-xl hover:bg-border transition-colors"
                            >
                                <FaLinkedin className="w-6 h-6 text-accent" />
                                <div className="text-left">
                                    <p className="font-semibold">LinkedIn</p>
                                    <p className="text-sm text-muted-foreground">Connect with me</p>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-6 bg-muted rounded-xl hover:bg-border transition-colors"
                            >
                                <FaGithub className="w-6 h-6 text-accent" />
                                <div className="text-left">
                                    <p className="font-semibold">GitHub</p>
                                    <p className="text-sm text-muted-foreground">Check out my code</p>
                                </div>
                            </a>
                        </div>

                        <p className="text-sm text-muted-foreground mt-12">
                            Note: Update the contact links in <code className="bg-muted px-2 py-1 rounded">app/contact/page.tsx</code> and{' '}
                            <code className="bg-muted px-2 py-1 rounded">components/layout/Footer.tsx</code> with your actual contact information.
                        </p>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
