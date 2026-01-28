const data = [
  { name: "バスタ新宿", exit: "南改札→新南口" },
  { name: "NEWoMan新宿", exit: "南改札→新南口" },
  { name: "JR新宿駅 西口（地上）", exit: "中央西改札→西口" },
  { name: "JR新宿駅 東口（地上）", exit: "中央東改札→東口" },
  { name: "伊勢丹新宿店", exit: "中央東改札→伊勢丹方面" },
];

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
          {data.map((item) => (
            <li key={item.name} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">{item.name}</span>
                <span className="text-blue-600 text-sm font-medium">{item.exit}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
