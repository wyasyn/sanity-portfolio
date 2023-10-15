import { BsDownload } from "react-icons/bs";
import "./about.scss";
import Image from "next/image";

export default function About() {
    return (
        <>
            <section className="about-head-img">
                <Image
                    src="/assets/aboutImg.jpg"
                    alt="about img"
                    width={1920}
                    height={1080}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <article className="about-info center">
                    <div className="abt-info">
                        <small>Who am I</small>
                        <h1>About Me</h1>
                        <p>
                            Welcome to my portfolio website! I am thrilled to
                            have you here and share my passion for web
                            development. Through this platform, I aim to
                            showcase my skills, experience, and creative
                            projects in the digital realm.
                        </p>
                        <div className="center">
                            <a
                                href="/assets/resume.pdf"
                                download
                                className="btn"
                            >
                                Download CV <BsDownload />{" "}
                            </a>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
}
