import {
    Hero,
    PostContainer,
    Projects,
    Services,
    Testimonials,
} from "@/components";

export default async function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Projects />
            <Testimonials />
            <PostContainer />
        </main>
    );
}
