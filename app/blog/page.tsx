import { client } from "@/lib/sanity";

const query = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt
  }
`;

export default async function Blog() {
  const posts = await client.fetch(query);

  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">
          Latest <span className="text-blue-500">Insights</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <div
              key={post.slug.current}
              className="bg-white/5 border border-white/10 rounded-3xl p-6"
            >
              <h2 className="text-2xl font-bold">{post.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
