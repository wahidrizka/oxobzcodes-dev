import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: image().optional(),
      tags: z.array(z.string()),
      series: z.string().optional(),
      seriesPart: z.number().optional(),
      draft: z.boolean().default(false),
    }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/portfolio' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      pubDate: z.coerce.date(),
      cover: image().optional(),
      status: z.enum(['production', 'development', 'archived']),
      category: z.enum(['fullstack', 'frontend', 'backend', 'other']),
      featured: z.boolean().default(false),
      stack: z.array(z.string()),
      liveUrl: z.string().optional(),
      repoUrl: z.string().optional(),
      teamSize: z.number().default(1),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, portfolio };
