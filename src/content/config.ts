import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    status: z.string(),
    statusHistory: z.array(z.object({
      status: z.string(),
      date: z.string(),
    })).optional(),
    lastUpdated: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
