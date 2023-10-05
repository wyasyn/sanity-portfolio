import { createClient, groq } from "next-sanity";
import { Project } from "../type";


export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: 'dhp2ol24',
        dataset: 'production',
        apiVersion: "2023-10-04",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.assets->url, 
            url,
            content
        }`
    )
}