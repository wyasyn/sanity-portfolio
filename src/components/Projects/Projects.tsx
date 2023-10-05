import { getProjects } from "../../../sanity/sanity-utils";
import "./Projects.scss";

export default async function Projects() {
    const projects = await getProjects();
    return (
        <section className="projects">
            {projects.map((project) => (
                <div className="project" key={project._id}>
                    {project.name}
                </div>
            ))}
        </section>
    );
}
