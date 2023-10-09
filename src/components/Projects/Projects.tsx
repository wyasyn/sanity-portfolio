import Image from "next/image";
import { getProjects } from "../../../sanity/sanity-utils";
import "./Projects.scss";
import Link from "next/link";
import { urlFor } from "../../../sanity/urlFor";
import { ProjectCard, SectionTitle } from "..";

export default async function Projects() {
    const projects = await getProjects();
    return (
        <section className="projects">
            <div className="container">
                <SectionTitle name="Portfolio" title="Selected Projects" />
                <div className="projects-container">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project._id}
                            image={urlFor(project.image).url()}
                            title={project.name}
                            content={project.content}
                            link={project.url}
                            badge={project.badge}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
