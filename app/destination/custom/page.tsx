import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { promises as fs } from "node:fs";
import path from "node:path";
import { destinations } from "../../data";

export const metadata: Metadata = {
  title: "目的地検索 | JR新宿駅 出口案内",
  description:
    "JR新宿駅の目的地を検索して、最適な改札・出口を調べることができます。目的地名を入力するだけで道順を案内します。",
  openGraph: {
    title: "目的地検索 | JR新宿駅 出口案内",
    description:
      "JR新宿駅の目的地を検索して、最適な改札・出口を調べることができます。",
    locale: "ja_JP",
  },
};

type CustomSearchParams = {
  name?: string | string[];
  q?: string | string[];
};

type CustomPageProps = {
  searchParams?: CustomSearchParams | Promise<CustomSearchParams>;
};

const normalize = (value: string) => value.trim();
const coerceParam = (value?: string | string[]) =>
  Array.isArray(value) ? value[0] ?? "" : value ?? "";

const logUnknownDestination = async (value: string) => {
  const logDir = path.join(process.cwd(), "logs");
  const logPath = path.join(logDir, "unknown-destinations.csv");
  const timestamp = new Date().toISOString();
  const sanitized = value.replaceAll("\n", " ").replaceAll("\r", " ").trim();

  try {
    await fs.mkdir(logDir, { recursive: true });
    await fs.appendFile(logPath, `"${timestamp}","${sanitized}"\n`, "utf8");
  } catch {
    // Logging failure should not break the user flow.
  }
};

export default async function CustomDestinationPage({
  searchParams,
}: CustomPageProps) {
  const params = searchParams ? await searchParams : undefined;
  const rawName = coerceParam(params?.name) || coerceParam(params?.q);
  const name = normalize(rawName);

  if (!name) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <header className="bg-white shadow-sm sticky top-0 z-10 relative">
          <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 text-base font-semibold">
            ← ホーム
          </Link>
          <div className="max-w-lg mx-auto px-4 py-4">
            <h1 className="text-center text-xl font-bold text-gray-800">
              🚉 目的地が未入力です
            </h1>
          </div>
        </header>

        <div className="max-w-lg mx-auto px-4 py-6 space-y-4">
          <p className="text-sm text-gray-600">
            目的地名を入力してから検索してください。
          </p>
        </div>
      </main>
    );
  }

  const matched = destinations.find(
    (destination) =>
      destination.id === name ||
      normalize(destination.name) === name ||
      normalize(destination.name).includes(name)
  );

  if (matched) {
    redirect(`/destination/${matched.id}`);
  }

  void logUnknownDestination(name);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-10 relative">
        <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 text-base font-semibold">
          ← ホーム
        </Link>
        <div className="max-w-lg mx-auto px-4 py-4">
          <h1 className="text-center text-xl font-bold text-gray-800">
            🚉 {name}
          </h1>
          <p className="text-center text-xs text-gray-500 mt-1">
            現在この目的地の案内は準備中です
          </p>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-sm text-gray-700">
            入力された目的地に対応する出口案内が見つかりませんでした。
          </p>
          <p className="text-xs text-gray-500 mt-2">
            近い場所や駅出口名で再検索してください。
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-800">
            現在対応している目的地
          </h2>
          <ul className="mt-3 space-y-2">
            {destinations.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/destination/${item.id}`}
                  className="flex items-center justify-between bg-white rounded-lg border border-gray-100 px-3 py-3 text-sm shadow-sm"
                >
                  <span className="text-gray-800">{item.name}</span>
                  <span className="text-blue-600 text-xs font-semibold">
                    {item.exit}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
