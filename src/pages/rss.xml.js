import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const note = await getCollection('notes');
  return rss({
    title: 'jeksn.me | Notes',
    description: 'Notes from jeksn.me',
    site: 'https://jeksn.me',
    items: note.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      // description: post.data.description,
      // customData: post.data.customData,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/notes/${post.slug}/`,
    })),
  });
}