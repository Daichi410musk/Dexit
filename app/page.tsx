import Link from "next/link";
import { destinations } from "./data";
import SearchForm from "./components/SearchForm";

export default function Home() {
  const places = destinations.filter((item) => item.type === "place");
  const exits = destinations.filter((item) => item.type === "exit");
  const featuredPlaces = places.slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4">
          <h1 className="text-center text-xl font-bold text-gray-800">
            🚉 JR新宿駅 出口案内
          </h1>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 py-6">
        <SearchForm destinations={destinations} />

        <section className="mb-4">
          <h2 className="text-sm font-semibold text-gray-800">
            出口の案内を見る
          </h2>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {exits.map((item) => (
              <Link
                key={item.id}
                href={`/destination/${item.id}`}
                className="rounded-lg border border-gray-100 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <h2 className="text-sm font-semibold text-gray-800">
            よく使う目的地
          </h2>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {featuredPlaces.map((item) => (
              <Link
                key={item.id}
                href={`/destination/${item.id}`}
                className="rounded-lg border border-gray-100 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/places"
              className="flex items-center justify-center text-sm font-semibold text-blue-600"
            >
              一覧を見る →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
