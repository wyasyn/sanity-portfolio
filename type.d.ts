import { PortableTextBlock } from "sanity";

type Project = {
    _id: string;
    _createdAt: Date
    name: string
    slug: string
    image: string
    url: string
    alt: string
    badge: string
    content: string
}

type PostProps = {
    _id: string;
    _createdAt: Date
    title: string
    slug: string
    description: string
    image: string
    alt: string
    content: PortableTextBlock[];
}

type ProjectCardType = {
    image: string
    title: string
    content: string
    link: string
    badge: string
}

type propTitle =  {
    name: string
    title: string
}