import { routes } from "../data";
import Link from "next/link";

export default async function RoutePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const route = routes.find((r) => r.id === id);

  if (!route) {
    return <div>ルートが見つかりません</div>;
  }
  return (
    <main className="px-6 py-4">
      <div className="flex items-center">
        <Link href="/" className="border border-gray-400 rounded">
          ←戻る
        </Link>
        <h1 className="text-center text-xl font-bold ml-6">
          JR新宿駅→{route.title}
        </h1>
      </div>
      <p className="text-lg font-semibold">{route.via}</p>
      {route.steps.map((step, index) => (
        <div key={index} className={step.checkpoint ? "mb-4" : ""}>
          <div>
            {index + 1}. {step.instruction}
          </div>
          {step.checkpoint && <div>写真準備中</div>}
          {step.checkpoint && <div>✔︎{step.checkpoint}</div>}
        </div>
      ))}
    </main>
  );
}
