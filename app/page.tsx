"use client";

import { useState } from "react";

type Step = {
  text: string;
  photo?: string; // 写真のパス（後で追加用）
};

type Destination = {
  name: string;
  exit: string;
  steps: Step[];
};

const data: Destination[] = [
  {
    name: "バスタ新宿",
    exit: "南改札→新南口",
    steps: [
      { text: "JR新宿駅 南改札を出る", photo: "/photos/minami-kaisatsu.jpg" },
      { text: "「新南口・バスタ新宿」の案内に従って進む", photo: "/photos/busta-sign.jpg" },
      { text: "エスカレーターで4階へ上がる → バスタ新宿に到着", photo: "/photos/busta-goal.jpg" },
    ],
  },
  {
    name: "NEWoMan新宿",
    exit: "南改札→新南口",
    steps: [
      { text: "JR新宿駅 南改札を出る", photo: "/photos/minami-kaisatsu.jpg" },
      { text: "改札を出て右手がNEWoMan新宿", photo: "/photos/newoman-goal.jpg" },
    ],
  },
  {
    name: "JR新宿駅 西口（地上）",
    exit: "中央西改札→西口",
    steps: [
      { text: "JR新宿駅 中央西改札を出る", photo: "/photos/chuo-nishi-kaisatsu.jpg" },
      { text: "「西口」の案内に従って直進", photo: "/photos/nishi-sign.jpg" },
      { text: "階段を上がって地上へ → 西口に到着", photo: "/photos/nishi-goal.jpg" },
    ],
  },
  {
    name: "JR新宿駅 東口（地上）",
    exit: "中央東改札→東口",
    steps: [
      { text: "JR新宿駅 中央東改札を出る", photo: "/photos/chuo-higashi-kaisatsu.jpg" },
      { text: "「東口」の案内に従って直進", photo: "/photos/higashi-sign.jpg" },
      { text: "階段を上がって地上へ → 東口に到着", photo: "/photos/higashi-goal.jpg" },
    ],
  },
  {
    name: "伊勢丹新宿店",
    exit: "中央東改札→伊勢丹方面",
    steps: [
      { text: "JR新宿駅 中央東改札を出る", photo: "/photos/chuo-higashi-kaisatsu.jpg" },
      { text: "「新宿三丁目・伊勢丹方面」の表示へ進む", photo: "/photos/isetan-sign.jpg" },
      { text: "地下通路を直進 → 伊勢丹方面出口に到着", photo: "/photos/isetan-goal.jpg" },
    ],
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          {data.map((item, index) => (
            <li
              key={item.name}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-4 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">{item.name}</span>
                  <span className="text-blue-600 text-sm font-medium">
                    {item.exit}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-400">
                    {openIndex === index ? "閉じる" : "タップで道順を見る"}
                  </span>
                  <span
                    className={`text-gray-400 text-xs transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <ol className="mt-3 space-y-3">
                    {item.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white text-sm rounded-full flex items-center justify-center">
                          {stepIndex + 1}
                        </span>
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm">{step.text}</p>
                          {step.photo && (
                            <div className="mt-2 bg-gray-100 rounded-lg h-32 flex items-center justify-center text-gray-400 text-xs">
                              📷 写真準備中
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
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
