import { createClient, type QueryParams } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2026-07-27",
  useCdn: true,
});

interface SanityFetchOptions {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
}

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 3600,
}: SanityFetchOptions): Promise<T | null> {
  try {
    return await client.fetch(query, params, {
      next: { revalidate },
    });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}
