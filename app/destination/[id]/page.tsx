import type { Metadata } from "next";
import Image from "next/image";
import { destinations } from "../../data";
import BackButton from "../../components/BackButton";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return {
      title: "見つかりません | JR新宿駅 出口案内",
    };
  }

  const title = `${destination.name} への行き方 | JR新宿駅 出口案内`;
  const description = `JR新宿駅から${destination.name}への行き方。${destination.exit}を利用します。写真付きでわかりやすく出口までの道順を案内します。`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      locale: "ja_JP",
    },
  };
}

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

  const exitDestination = destination.exitId
    ? destinations.find((d) => d.id === destination.exitId)
    : null;

  const steps =
    destination.steps.length > 0
      ? destination.steps
      : exitDestination?.steps ?? [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center gap-3">
          <BackButton />
          <div>
            <h1 className="font-bold text-gray-800">{destination.name}</h1>
            <p className="text-xs text-blue-600">{destination.exit}</p>
          </div>
        </div>
      </header>

      <div className="max-w-lg mx-auto py-4">
        {exitDestination && (
          <div className="mx-4 mb-4 rounded-xl bg-blue-50 border border-blue-100 px-4 py-3">
            <p className="text-sm text-gray-800">
              <span className="font-semibold">{destination.name}</span>へは
              <span className="font-semibold">{exitDestination.name}</span>
              を出て向かってください。
            </p>
            <p className="text-xs text-gray-500 mt-1">
              以下は出口までの案内です。
            </p>
          </div>
        )}

        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={index}>
              <div className="bg-white border-l-4 border-pink-500 px-4 py-3">
                <p className="font-bold text-gray-800">【{index + 1}】{step.text}</p>
              </div>
              {step.photo && (
                <div className="w-full h-64 relative overflow-hidden">
                  <Image
                    src={step.photo}
                    alt={step.text}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
