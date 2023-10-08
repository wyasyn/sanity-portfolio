import { Hero, Projects, Services } from "@/components";

export default async function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Projects />
        </main>
    );
}
