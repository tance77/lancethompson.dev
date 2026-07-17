import type { CollectionEntry } from 'astro:content'

/** Format a post date for the `ls -l` listings, e.g. "2026 · 04". */
export function postDate(date: Date): string {
  return `${date.getUTCFullYear()} · ${String(date.getUTCMonth() + 1).padStart(2, '0')}`
}

/** Long-form date for the post page itself, e.g. "April 2026". */
export function postDateLong(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

/** Estimated read time from the raw markdown body, ~200 wpm. */
export function readTime(post: CollectionEntry<'blog'>): string {
  const words = (post.body ?? '').split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min`
}

/** Published posts, newest first. */
export async function publishedPosts() {
  const { getCollection } = await import('astro:content')
  const posts = await getCollection('blog', ({ data }) => !data.draft)
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}
