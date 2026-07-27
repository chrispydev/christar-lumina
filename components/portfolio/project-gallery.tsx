import Image from "next/image";

type Props = {
  images: string[];
};

export default function ProjectGallery({
  images,
}: Props) {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

        {images.map((image) => (
          <div
            key={image}
            className="relative aspect-video overflow-hidden rounded-3xl border border-white/10"
          >
            <Image
              src={image}
              alt="Project screenshot"
              fill
              className="object-cover"
            />
          </div>
        ))}

      </div>
    </section>
  );
}
