import Image from "next/image";
import { getProjects } from "../../../sanity/sanity-utils";
import "./Projects.scss";
import Link from "next/link";

export default async function Projects() {
    const projects = await getProjects();
    return (
        <section className="projects">
            {projects.map((project) => (
                <div className="project" key={project._id}>
                    {project.name}
                    {/* <Image
                        src={project.image}
                        alt={project.name}
                        width={650}
                        height={350}
                    /> */}
                    <p>{project.slug}</p>
                    <p>{project.content}</p>
                    <Link href={project.url}>view</Link>
                </div>
            ))}
        </section>
    );
}
