

import Image from "next/image";
import Link from "next/link";
import { destinations } from "../../data";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DestinationPage({ params }: Props) {
  const { id } = await params;
  const destination = destinations.find((d) => d.id === id);

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
          <Link href="/" className="text-gray-600 text-lg">
            ←
          </Link>
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
                <Image
                  src={step.photo}
                  alt={step.text}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority={index === 0}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
