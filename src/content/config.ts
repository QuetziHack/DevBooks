import { defineCollection, z } from "astro:content";

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        editorial: z.string(),
        img: z.string(),
        readtime: z.number(),
        description: z.string(),
        download: z.object({
            mexico: z.string().url(),
            usa: z.string().url(),
        })
    }),
});

export const collections = { books }