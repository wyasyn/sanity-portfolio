import { FiMail } from "react-icons/fi";
import "./Hero.scss";
import { BsDownload } from "react-icons/bs";
import Image from "next/image";
import { Intro, bannerData, socials } from "@/constants/data";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="col-1">
                    <p className="hi">Hi, am</p>
                    <h1>Yasin Walum</h1>
                    <h2>Computer Scientist</h2>
                    <p className="intro-text">{Intro.describe}</p>
                    <div className="cta">
                        <a
                            href="/assets/resume.pdf"
                            download
                            className="btn primary"
                        >
                            Download CV <BsDownload />{" "}
                        </a>
                        <a href="/contact" className="btn">
                            Contact Me <FiMail />{" "}
                        </a>
                    </div>
                </div>
                <div className="col-2">
                    <Image
                        src="/assets/profile.png"
                        alt="profile pic"
                        width={450}
                        height={627}
                    />
                </div>
                <div className="banner">
                    {bannerData.map((data) => (
                        <div className="banner-card" key={data.name}>
                            <div className="icon center">{data.icon}</div>
                            <div className="content">
                                <h3>{data.describe}</h3>
                                <p>{data.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="socials">
                <ul>
                    {socials.map((data) => (
                        <li key={data.name}>
                            <Link href={data.url}>{data.icon}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
