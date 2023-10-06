import { PortableTextBlock } from "sanity";

type Project = {
    _id: string;
    _createdAt: Date
    name: string
    slug: string
    image: string
    url: string
    alt: string
    content: string
}