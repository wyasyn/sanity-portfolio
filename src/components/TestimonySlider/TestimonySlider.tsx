import Image from "next/image";
import { getTestimony } from "../../../sanity/sanity-utils";
import "./TestimonySlider.scss";
import { urlFor } from "../../../sanity/urlFor";
import { PortableText } from "@portabletext/react";

export default async function TestimonySlider() {
    const testimonials = await getTestimony();
    return (
        <>
            {testimonials.map((data) => (
                <article className="slide" key={data._id}>
                    <div className="image">
                        <Image
                            src={urlFor(data.image).url()}
                            alt={data.alt}
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="info">
                        <h4>{data.title}</h4>
                        <h3>{data.name}</h3>
                        <div className="port-text">
                            <PortableText value={data.testimony} />
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}
