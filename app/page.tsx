import Link from "next/link";
import { destinations } from "./routes/data";

export default function Home() {
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
        <p className="text-sm text-gray-600 mb-4">
          行きたい場所を選んでください
        </p>

        <ul className="space-y-3">
          {destinations.map((dest) => (
            <li key={dest.id}>
              <Link
                href={`/destinations/${dest.id}`}
                className="block bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all active:scale-[0.98]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">{dest.name}</span>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
