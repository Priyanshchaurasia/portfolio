// Defines what a project file must contain. If a project file is missing
// something required, Astro shows a clear error naming the file and the field.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      order: z.number(), // position in the carousel: 1 comes first
      stack: z.array(z.string()),
      live: z.url().optional(), // "Live site" link
      code: z.url().optional(), // "Source code" link
      // A project shows either a screenshot (image) or one of the built-in
      // illustrations (visual). If both are set, the screenshot wins.
      image: image().optional(),
      imageAlt: z.string().optional(),
      visual: z.enum(['safesight', 'offline-llm', 'campus-map']).optional(),
      draft: z.boolean().default(false), // true hides the project from the site
    }),
});

export const collections = { projects };
