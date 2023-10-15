import { PortableText } from "@portabletext/react";
import { getPost } from "../../../../../sanity/sanity-utils";
import "./style.scss";
import Image from "next/image";
import { urlFor } from "../../../../../sanity/urlFor";

type Props = {
    params: { post: string };
};

export default async function page({ params }: Props) {
    const slug = params.post;
    const post = await getPost(slug);
    return (
        <div className="blog-page">
            <header className="container">
                <h1>{post.title}</h1>
                <h3>{post.description}</h3>
            </header>
            <div className="image">
                <Image
                    className="project-image"
                    src={urlFor(post.image).url()}
                    alt={post.alt}
                    width={1920}
                    height={1080}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="container">
                <div className="content">
                    <PortableText value={post.content} />
                </div>
            </div>
        </div>
    );
}
