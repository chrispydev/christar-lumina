import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">

      <div className="h-11 w-11 rounded-xl bg-blue-600/20 flex justify-center items-center border border-blue-500/20">
        <Image src="/logo.svg" alt="Christar Lumina" width={50} height={50} />
      </div>

      <div>
        <p className="font-semibold tracking-tight">
          Christar <span className="text-blue-500">Lumina</span>
        </p>
      </div>
    </Link>
  );
}
