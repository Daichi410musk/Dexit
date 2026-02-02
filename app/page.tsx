import Link from "next/link";
import { destinations } from "./data";

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
        <ul className="space-y-3">
          {destinations.map((item) => (
            <li key={item.id}>
              <Link
                href={`/destination/${item.id}`}
                className="block bg-white rounded-xl shadow-sm border border-gray-100 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">{item.name}</span>
                  <span className="text-blue-600 text-sm font-medium">
                    {item.exit}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-400">
                    タップで道順を見る
                  </span>
                  <span className="text-gray-400 text-xs">→</span>
                </div>
              </Link>
            </li>
          ))}

          {/* Coming Soon カード */}
          <li className="bg-gray-50 rounded-xl p-4 border border-dashed border-gray-300">
            <div className="text-center text-gray-500">
              <span className="text-lg">🚧</span>
              <p className="mt-1 font-medium">他の目的地も準備中...</p>
              <p className="text-xs mt-1">順次追加予定です</p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
