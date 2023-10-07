import Link from "next/link";
import "./Service.scss";
import { FaArrowCircleRight } from "react-icons/fa";
import { servicesData } from "@/constants/data";

export default function Services() {
    return (
        <section className="services">
            <div className="container">
                {servicesData.map((data, index) => (
                    <article key={data.name}>
                        <small>0{index + 1}</small>
                        <h3>{data.name}</h3>
                        <p>{data.describe}</p>
                        <Link href="/projects">
                            <i className="center">
                                <FaArrowCircleRight />
                            </i>
                            <p>{data.about}</p>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
