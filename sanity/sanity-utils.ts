import { createClient, groq } from "next-sanity";
import { Project, PostProps } from "../type";

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

export async function getPosts(): Promise<PostProps[]> {
  
    return client.fetch(
        groq`*[_type == "post"]{
            ...,
            title,
            "slug":slug.current,
            image, 
            description,
            content,
        }`, { next: { revalidate:  60 } }
    )
} 


export async function getPost(slug: string): Promise<PostProps> {
  
    return client.fetch(
        groq`*[_type == "post" && slug.current == $slug ][0]{
            ...,
            title,
            "slug":slug.current,
            image, 
            description,
            content,
        }`,
        {slug}, 
        { next: { revalidate:  50 } }
    )
} 