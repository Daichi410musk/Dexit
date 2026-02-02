export type Step = {
  text: string;
  photo?: string;
};

export type Destination = {
  id: string;
  name: string;
  exit: string;
  steps: Step[];
};

export const destinations: Destination[] = [
  {
    id: "west",
    name: "JR新宿駅 西口（地上）",
    exit: "西改札→西口",
    steps: [
      {
        text: "JR新宿駅 西改札を出る",
        photo: "/photos/nishi-kaisatsu.png",
      },
      {
        text: "改札を出たら左に進み、歩いてすぐの曲がり角を左へ進む",
        photo: "/photos/nishi-sign1.png",
      },
      {
        text: "西口地上方面の案内板がある階段を上る",
        photo: "/photos/nishi-sign2.png",
      },
      {
        text: "西口地上方面の案内をもとに進む",
        photo: "/photos/nishi-sign3.png",
      },
      {
        text: "西口に到着",
        photo: "/photos/nishi-goal.png",
      },
    ],
  },
  {
    id: "east",
    name: "JR新宿駅 東口（地上）",
    exit: "東改札→東口",
    steps: [
      {
        text: "JR新宿駅 東改札を出る",
        photo: "/photos/higashi-kaisatsu.png",
      },
      { text: "改札を出たら斜め右に進む", photo: "/photos/higashi-sign.png" },
      {
        text: "歌舞伎町方面と書かれた案内板がある階段を上がって、東口に到着",
        photo: "/photos/higashi-goal.png",
      },
    ],
  },
  {
    id: "south",
    name: "JR新宿駅 南口",
    exit: "南改札→南口",
    steps: [
      {
        text: "JR新宿駅 南改札を出る",
        photo: "/photos/minami-kaisatsu.png",
      },
      {
        text: "改札を出ると、南口に到着",
      },
    ],
  },
  {
    id: "shinsouth",
    name: "JR新宿駅 新南口",
    exit: "新南改札(新南口)",
    steps: [
      {
        text: "JR新宿駅 新南改札を出る",
        photo: "/photos/shin-minami-kaisatsu.png",
      },
      {
        text: "改札を出ると、新南口に到着",
      },
    ],
  },
  {
    id: "busta",
    name: "バスタ新宿",
    exit: "新南改札(新南口)",
    steps: [
      {
        text: "JR新宿駅 新南改札を出る",
        photo: "/photos/busta-kaisatsu.png",
      },
      {
        text: "左手のエスカレーターで上に上がる",
        photo: "/photos/busta-sign.png",
      },
      { text: "バスタ新宿に到着", photo: "/photos/busta-goal.png" },
    ],
  },
  {
    id: "newoman",
    name: "NEWoMan新宿",
    exit: "新南改札(新南口)",
    steps: [
      {
        text: "JR新宿駅 新南改札を出る",
        photo: "/photos/shin-minami-kaisatsu.png",
      },
      {
        text: "改札を出て右手がNEWoMan新宿",
      },
    ],
  },
];
