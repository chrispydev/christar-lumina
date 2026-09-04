import Image from "next/image";

export function BrowserFrame({ src, alt, url, label, width = 1600, height = 1000,
  priority = false, chrome = true }: {
    src: string; alt: string; url?: string; label?: string;
    width?: number; height?: number; priority?: boolean; chrome?: boolean;
  }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-frame border border-hair bg-surface
        shadow-[0_40px_90px_-40px_rgba(0,0,0,.95)] ring-1 ring-white/[.02] ring-inset">
        {chrome && (
          <div className="flex items-center gap-2 border-b border-hair bg-[#0E0E11] px-4 py-3">
            <i className="size-2 rounded-full bg-hair-strong" /><i className="size-2 rounded-full bg-hair-strong" />
            <i className="size-2 rounded-full bg-hair-strong" />
            {url && <b className="ml-3 truncate rounded-chip bg-white/5 px-3 py-1 text-xs font-normal text-faint">{url}</b>}
          </div>
        )}
        <div className="aspect-[16/10]">
          <Image src={src} alt={alt} width={width} height={height}
            priority={priority} loading={priority ? undefined : "lazy"} sizes="(min-width:1100px) 1104px, 100vw"
            className="size-full object-cover" />
        </div>
      </div>
      {label && <figcaption className="mt-4 text-[13px] tracking-wide text-faint">{label}</figcaption>}
    </figure>
  );
}
