import { destinations, exits } from "../../routes/data";
import Link from "next/link";

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">目的地が見つかりません</p>
          <Link href="/" className="text-blue-600 underline">
            トップに戻る
          </Link>
        </div>
      </main>
    );
  }

  const exit = exits.find((e) => e.id === destination.exitId);

  if (!exit) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">出口情報が見つかりません</p>
          <Link href="/" className="text-blue-600 underline">
            トップに戻る
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <h1 className="text-lg font-bold text-gray-800 flex-1">
            {destination.name}
          </h1>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="bg-blue-600 text-white rounded-2xl p-4 shadow-lg">
          <p className="text-blue-100 text-sm">おすすめ出口</p>
          <p className="text-xl font-bold">{exit.name}</p>
        </div>

        <div className="mt-8">
          <div className="space-y-4">
            {exit.steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-1.5" />
                  <div className="w-0.5 flex-1 bg-blue-200 mt-2" />
                </div>
                <div className="flex-1 pb-6">
                  <p className="font-medium text-gray-800">{step}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-1.5" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{exit.goal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
