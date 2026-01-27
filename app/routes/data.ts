export type Step = {
  instruction: string;
  checkpoint?: string;
};

export type Route = {
  id: string;
  title: string;
  via: string;
  steps: Step[];
};

export const routes: Route[] = [
  {
    id: "marunouchi",
    title: "丸の内線",
    via: "西改札経由",
    steps: [
      { instruction: "西改札の案内板を探す" },
      { instruction: "西改札を出る", checkpoint: "西改札を通過" },
      { instruction: "改札を出たら左に曲がる" },
      { instruction: "丸の内線の改札に到着", checkpoint: "丸の内線改札に到着" },
    ],
  },
  {
    id: "odakyu",
    title: "小田急線",
    via: "中央西改札経由",
    steps: [{ instruction: "中央西改札の案内板を探す" }],
  },
  {
    id: "keio",
    title: "京王線",
    via: "京王線連絡口経由",
    steps: [{ instruction: "京王口の案内板を探す" }],
  },
  {
    id: "oedo",
    title: "都営大江戸線・都営新宿線・京王新線",
    via: "南改札経由",
    steps: [
      { instruction: "南改札の案内板を探す" },
      { instruction: "南改札を出る", checkpoint: "南改札を通過" },
      { instruction: "改札を出たら右に曲がる" },
    ],
  },
  {
    id: "seibu",
    title: "西武新宿線",
    via: "東改札経由",
    steps: [{ instruction: "東改札の案内板を探す" }],
  },
];
