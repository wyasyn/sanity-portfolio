import Image from "next/image";
import "./Project.scss";
import Link from "next/link";
import { ProjectCardType } from "../../../type";

export default function ProjectCard({
    image,
    title,
    content,
    badge,
    link,
}: ProjectCardType) {
    return (
        <article className="project-card center">
            <button className="badge">{badge}</button>
            <Image
                className="project-image"
                src={image}
                alt="project image"
                width={250}
                height={200}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="card-info">
                <h3>{title}</h3>
                <p>{content}</p>
                <div className="card-btn center">
                    <Link href={link} target="_blank" className="btn">
                        View Project
                    </Link>
                </div>
            </div>
        </article>
    );
}
