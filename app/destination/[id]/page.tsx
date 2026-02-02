"use client";

import { useParams, useRouter } from "next/navigation";
import { destinations } from "../../data";

export default function DestinationPage() {
  const params = useParams();
  const router = useRouter();
  const destination = destinations.find((d) => d.id === params.id);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>見つかりませんでした</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="text-gray-600 text-lg"
          >
            ←
          </button>
          <div>
            <h1 className="font-bold text-gray-800">{destination.name}</h1>
            <p className="text-xs text-blue-600">{destination.exit}</p>
          </div>
        </div>
      </header>

      <div className="max-w-lg mx-auto py-4">
        <ol className="space-y-4">
          {destination.steps.map((step, index) => (
            <li key={index}>
              <div className="bg-white border-l-4 border-pink-500 px-4 py-3">
                <p className="font-bold text-gray-800">【{index + 1}】{step.text}</p>
              </div>
              {step.photo && (
                <img
                  src={step.photo}
                  alt={step.text}
                  className="w-full"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
