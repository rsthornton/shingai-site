import { defineCollection, z } from 'astro:content';

const archiveCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    permalink: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  archive: archiveCollection,
};
