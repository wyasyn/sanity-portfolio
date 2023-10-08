import Image from "next/image";
import { getProjects } from "../../../sanity/sanity-utils";
import "./Projects.scss";
import Link from "next/link";
import { urlFor } from "../../../sanity/urlFor";
import { ProjectCard } from "..";

export default async function Projects() {
    const projects = await getProjects();
    return (
        <section className="projects">
            {projects.map((project) => (
                <ProjectCard
                    key={project._id}
                    image={urlFor(project.image).url()}
                    title={project.name}
                    content={project.content}
                    link={project.url}
                />
            ))}
        </section>
    );
}
