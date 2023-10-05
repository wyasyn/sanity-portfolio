import { PortableTextBlock } from "sanity";

type Project = {
    _id: string;
    _createdAt: Date
    name: string
    slud: string
    image: string
    url: string
    alt: string
    content: PortableTextBlock[]
}