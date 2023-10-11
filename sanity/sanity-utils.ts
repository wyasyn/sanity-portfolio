import { createClient, groq } from "next-sanity";
import { Project, TestimonyProps } from "../type";

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
            badge,
            content,
        }`, { next: { revalidate:  4800 } }
    )
} 

export async function getTestimony(): Promise<TestimonyProps[]> {
  
    return client.fetch(
        groq`*[_type == "testimony"]{
            ...,
            name,
            "slug":slug.current,
            image, 
            title,
            testimony,
        }`, { next: { revalidate:  60 } }
    )
} 