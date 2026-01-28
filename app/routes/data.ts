export type Exit = {
  id: string;
  name: string;
  steps: string[];
  goal: string;
};

export type Destination = {
  id: string;
  name: string;
  exitId: string;
};

export const exits: Exit[] = [
  {
    id: "minami-shinnanguchi",
    name: "南改札→新南口",
    steps: [
      "JR新宿駅 南改札を出て右へ進む",
      "「新南口・NEWoMan方面」の表示を追い続ける",
    ],
    goal: "新南口出口に出る",
  },
  {
    id: "chuonishi-nishiguchi",
    name: "中央西改札→西口",
    steps: [
      "JR新宿駅 中央西改札を出る",
      "「西口方面」の表示を追って進む",
    ],
    goal: "西口出口（地上）に出る",
  },
  {
    id: "chuohigashi-higashiguchi",
    name: "中央東改札→東口",
    steps: [
      "JR新宿駅 中央東改札を出る",
      "「東口方面」へ進む（地下に降りない）",
    ],
    goal: "東口出口（地上）に出る",
  },
  {
    id: "chuohigashi-isetan",
    name: "中央東改札→伊勢丹方面",
    steps: [
      "JR新宿駅 中央東改札を出る",
      "「新宿三丁目・伊勢丹方面」の表示へ進み、地下通路を直進",
    ],
    goal: "伊勢丹方面出口に出る",
  },
];

export const destinations: Destination[] = [
  { id: "busta", name: "バスタ新宿", exitId: "minami-shinnanguchi" },
  { id: "newoman", name: "NEWoMan新宿", exitId: "minami-shinnanguchi" },
  { id: "west-exit", name: "JR新宿駅 西口（地上）", exitId: "chuonishi-nishiguchi" },
  { id: "east-exit", name: "JR新宿駅 東口（地上）", exitId: "chuohigashi-higashiguchi" },
  { id: "isetan", name: "伊勢丹新宿店", exitId: "chuohigashi-isetan" },
];
