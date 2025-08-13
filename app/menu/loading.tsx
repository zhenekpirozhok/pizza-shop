export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-5 py-10 px-5">
      <div className="h-5 w-40 bg-gray-200 animate-pulse rounded-md" />
      
      <div className="h-10 w-3/4 md:w-1/2 bg-gray-200 animate-pulse rounded-md" />
      <div className="h-10 w-20 md:w-30 bg-gray-200 animate-pulse rounded-md" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-100 w-80 bg-gray-200 animate-pulse rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
