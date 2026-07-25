import { client } from "@/lib/sanity";

export default async function BlogPost({
  params
}: {
  params: {
    slug: string;
  };
}) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      content,
      publishedAt
    }`,
    { slug: params.slug }
  );

  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold">{post.title}</h1>
        <p className="mt-5 text-gray-400">{post.publishedAt}</p>
        <div className="mt-10 text-gray-300 leading-relaxed">
          {JSON.stringify(post.content)}
        </div>
      </div>
    </section>
  );
}
