import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    industry: z.string(),
    logo: z.string(),
    excerpt: z.string(),
    date: z.date(),
    featured: z.boolean().optional(),
    stats: z.object({
      metric1: z.string(),
      value1: z.string(),
      metric2: z.string(),
      value2: z.string(),
      metric3: z.string(),
      value3: z.string(),
    }),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    author: z.string(),
    authorRole: z.string().optional(),
    coverImage: z.string(),
    category: z.string(),
    readTime: z.string(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { 'case-studies': caseStudies, blog };
