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

type TestimonyProps = {
    _id: string;
    _createdAt: Date
    name: string
    slug: string
    title: string
    image: string
    alt: string
    testimony: PortableTextBlock[];
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