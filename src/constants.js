export const board = [
  [
    {
      index: 0,
      user: null,
      value: null,
      row: 0,
      cell: 0,
    },
    {
      index: 1,
      user: null,
      value: null,
      row: 0,
      cell: 1,
    },
    {
      index: 2,
      user: null,
      value: null,
      row: 0,
      cell: 2,
    },
  ],
  [
    {
      index: 0,
      user: null,
      value: null,
      row: 1,
      cell: 0,
    },
    {
      index: 1,
      user: null,
      value: null,
      row: 1,
      cell: 1,
    },
    {
      index: 2,
      user: null,
      value: null,
      row: 1,
      cell: 2,
    },
  ],
  [
    {
      index: 0,
      user: null,
      value: null,
      row: 2,
      cell: 0,
    },
    {
      index: 1,
      user: null,
      value: null,
      row: 2,
      cell: 1,
    },
    {
      index: 2,
      user: null,
      value: null,
      row: 2,
      cell: 2,
    },
  ],
];

export const players = [
  {
    player: 1,
    sign: "X",
  },
  {
    player: 2,
    sign: "O",
  },
];

export const possibleScenerios = [
  ["0:0", "0:1", "0:2"],
  ["1:0", "1:1", "1:2"],
  ["2:0", "2:1", "2:2"],
  ["0:0", "1:0", "2:0"],
  ["0:1", "1:1", "2:1"],
  ["0:2", "1:2", "2:2"],
  ["0:0", "1:1", "2:2"],
  ["0:2", "1:1", "2:0"],
];
