import { createClient, groq } from "next-sanity";
import { Project } from "../type";

export const client = createClient({
    projectId: 'dhp2ol24',
    dataset: 'production',
    apiVersion: "2023-10-04",
    useCdn: false,
});
export async function getProjects(): Promise<Project[]> {
  
    return client.fetch(
        groq`*[_type == "project"]{
            ...,
            name,
            "slug":slug.current,
            image, 
            url,
            content
        } | order(_createdAt desc)`
    )
} 