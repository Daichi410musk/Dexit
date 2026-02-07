export type Step = {
  text: string;
  photo?: string;
};

export type Destination = {
  id: string;
  name: string;
  exit: string;
  exitId?: string;
  steps: Step[];
  type: "place" | "exit";
  direct?: boolean;
};

export const destinations: Destination[] = [
  {
    id: "west",
    name: "JR新宿駅 西口（地上）",
    exit: "西改札→西口",
    type: "exit",
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
    type: "exit",
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
    type: "exit",
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
    type: "exit",
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
    type: "place",
    direct: true,
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
    type: "place",
    direct: true,
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
  {
    id: "toho-cinema",
    name: "TOHOシネマズ 新宿（ゴジラヘッド）",
    exit: "東改札→東口",
    exitId: "east",
    type: "place",
    steps: [],
  },
  {
    id: "lumine-1",
    name: "ルミネ1",
    exit: "南改札→南口",
    type: "place",
    direct: true,
    steps: [
      {
        text: "JR新宿駅 南改札を出る",
        photo: "/photos/minami-kaisatsu.png",
      },
      {
        text: "改札を出たら右（小田急線改札方向）に曲がる",
      },
      {
        text: "10段ほどの階段を上がると、左右がルミネ1の入り口",
      },
    ],
  },
  {
    id: "lumine-2",
    name: "ルミネ2",
    exit: "南改札→南口",
    type: "place",
    direct: true,
    steps: [
      {
        text: "JR新宿駅 南改札を出る",
        photo: "/photos/minami-kaisatsu.png",
      },
      {
        text: "改札を出て、みどりの窓口の角を左に曲がる",
      },
      {
        text: "正面がルミネ2の入り口",
      },
    ],
  },
  {
    id: "keio-dept",
    name: "京王百貨店 新宿店",
    exit: "中央西改札→中央西口",
    type: "place",
    direct: true,
    steps: [
      {
        text: "JR新宿駅 中央西口改札を出る",
        photo: "/photos/chuo-nishi-kaisatsu2.png",
      },
      {
        text: "左手に京王百貨店が見える",
      },
    ],
  },
  {
    id: "isetan",
    name: "伊勢丹 新宿店",
    exit: "東改札→東口",
    exitId: "east",
    type: "place",
    steps: [],
  },
  {
    id: "takashimaya",
    name: "高島屋 新宿店",
    exit: "新南改札(新南口)",
    exitId: "shinsouth",
    type: "place",
    steps: [],
  },
  {
    id: "marui",
    name: "新宿マルイ 本館",
    exit: "東改札→東口",
    exitId: "east",
    type: "place",
    steps: [],
  },
  {
    id: "tokyo-metropolitan",
    name: "東京都庁",
    exit: "西改札→西口",
    exitId: "west",
    type: "place",
    steps: [],
  },
  {
    id: "shinjuku-central-park",
    name: "新宿中央公園",
    exit: "西改札→西口",
    exitId: "west",
    type: "place",
    steps: [],
  },
  {
    id: "kabukicho",
    name: "歌舞伎町",
    exit: "東改札→東口",
    exitId: "east",
    type: "place",
    steps: [],
  },
  {
    id: "golden-gai",
    name: "新宿ゴールデン街",
    exit: "東改札→東口",
    exitId: "east",
    type: "place",
    steps: [],
  },
  {
    id: "shinjuku-sanchome",
    name: "新宿三丁目",
    exit: "東改札→東口",
    exitId: "east",
    type: "place",
    steps: [],
  },
  {
    id: "shinjuku-gyoen",
    name: "新宿御苑",
    exit: "南改札→南口",
    exitId: "south",
    type: "place",
    steps: [],
  },
];
