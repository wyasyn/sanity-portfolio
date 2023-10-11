import { Hero, Projects, Services, Testimonials } from "@/components";

export default async function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Projects />
            <Testimonials />
        </main>
    );
}
