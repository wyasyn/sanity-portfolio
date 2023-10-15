import Image from "next/image";
import { getPosts } from "../../../sanity/sanity-utils";
import "./Post.scss";
import { urlFor } from "../../../sanity/urlFor";
import Link from "next/link";
// import { PortableText } from "@portabletext/react";

export default async function Post() {
    const posts = await getPosts();
    return (
        <>
            {posts.map((data) => (
                <article className="post" key={data._id}>
                    <div className="image">
                        <Image
                            src={urlFor(data.image).url()}
                            alt={data.alt}
                            width={1080}
                            height={678}
                        />
                    </div>
                    <div className="info">
                        <h3>{data.title}</h3>
                        <div className="center">
                            <Link
                                href={`/posts/${data.slug}`}
                                target="_blank"
                                className="btn primary"
                            >
                                View Blog
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}
