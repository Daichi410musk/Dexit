import Link from "next/link";
import { destinations } from "../data";

export default function PlacesPage() {
  const places = destinations.filter((item) => item.type === "place");

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              aria-label="ホームに戻る"
              className="inline-flex items-center gap-1 text-gray-700 text-sm font-semibold"
            >
              <span aria-hidden="true">←</span>
              <span>ホームに戻る</span>
            </Link>
            <span className="text-sm text-gray-500"> </span>
          </div>
          <h1 className="text-center text-xl font-bold text-gray-800">
            📍 目的地一覧
          </h1>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-3">
        {places.map((item) => (
          <Link
            key={item.id}
            href={`/destination/${item.id}`}
            className="flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-3 text-sm"
          >
            <span className="font-medium text-gray-800">{item.name}</span>
            <span className="text-blue-600 text-xs font-semibold">
              {item.exit}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
