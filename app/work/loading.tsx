export default function Loading() {
  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Christar<span className="text-blue-500">Lumina</span>
        </h1>
        <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-blue-500" />
        </div>
        <p className="mt-5 text-sm text-gray-500">
          Building digital experiences...
        </p>
      </div>
    </div>
  );
}
