export default function MenuSkeleton() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-100 w-80 bg-gray-200 animate-pulse rounded-md"
          />
        ))}
      </div>
    );
}