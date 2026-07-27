import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-center">
      <div>
        <h1 className="text-8xl font-bold text-blue-500">404</h1>
        <h2 className="mt-6 text-3xl font-bold">Page Not Found</h2>
        <p className="mt-4 text-gray-400">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-4 transition hover:bg-blue-700"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
