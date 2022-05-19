export const fonotronChannelURL = ({ id, bitrate }) => `http://channels.fonotron.ru:8000/Chan_${id}_${bitrate}.mp3`;

export const channelList = [
  {
    id: 1,
    title: 'Прямой эфир радио «Орфей»',
    urls: {
      192: 'https://orfeyfm.hostingradio.ru:8034/orfeyfm192.mp3',
      128: 'https://orfeyfm.hostingradio.ru:8034/orfeyfm128.mp3',
      64: 'https://orfeyfm.hostingradio.ru:8034/orfeyfm64.mp3',
    },
  },
  {
    id: 75,
    title: 'Бельканто',
  },
  {
    id: 72,
    title: 'Популярная классика',
  },
  {
    id: 73,
    title: 'Русская классика',
  },
  {
    id: 74,
    title: 'Симфоническая музыка',
  },
  {
    id: 77,
    title: 'Клавир',
  },
  {
    id: 76,
    title: 'Камерата',
  },
  {
    id: 67,
    title: 'Музыка кино',
  },
  {
    id: 60,
    title: 'Зарубежная хоровая',
  },
  {
    id: 61,
    title: 'Современная хоровая',
  },
  {
    id: 62,
    title: 'Хоры из опер',
  },
  {
    id: 63,
    title: 'Фолк-музыка',
  },
  {
    id: 65,
    title: 'Музыка с участием духовых',
  },
  {
    id: 66,
    title: 'Музыка мюзиклов',
  },
];
