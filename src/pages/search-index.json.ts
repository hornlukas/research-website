import type { APIRoute } from 'astro';
import { insertMultiple, save } from 'zbsearch';
import { publications } from '@/data/publications';
import { createSearchDatabase } from '@/lib/search';
import { paperSearchUrl } from '@/lib/search-records';

export const prerender = true;

export const GET: APIRoute = async () => {
  const base = import.meta.env.BASE_URL;
  const records = publications.flatMap((paper, index) =>
    paper.title.trim()
      ? [{
          id: `paper:${index}`,
          title: paper.title,
          content: paper.abstract,
          category: 'paper',
          url: paperSearchUrl(paper.link, base, index),
        }]
      : []
  );
  const db = createSearchDatabase();
  await insertMultiple(db, records);
  return new Response(JSON.stringify(save(db)), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
