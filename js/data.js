/** **************************************************************
 *************** Модуль структуры данных игры ********************
 ************************************************************** **/

const stats = [
  `wrong`,
  `slow`,
  `fast`,
  `correct`,
  `wrong`,
  `unknown`,
  `slow`,
  `unknown`,
  `fast`,
  `unknown`
];

const images = {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,

    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,

    // Nature
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    // People
    `https://i.imgur.com/1KegWPz.jpg`,

    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,

    // Nature
    `https://i.imgur.com/DKR1HtB.jpg`
  ]
};

const answers = [
  [
    {
      isTrue: false,
      image: images.photos[0]
    },
    {
      isTrue: false,
      image: images.paintings[0]
    }
  ],
  [
    {
      isTrue: false,
      image: images.paintings[1]
    }
  ],
  [
    {
      isTrue: false,
      image: images.photos[1]
    },
    {
      isTrue: false,
      image: images.photos[2]
    },
    {
      isTrue: false,
      image: images.paintings[2]
    }
  ]
];

const questions = [
  {
    text: `Угадайте для каждого изображения фото или рисунок?`,
    answers
  },
  {
    text: `Угадай, фото или рисунок?`,
    answers
  },
  {
    text: `Найдите рисунок среди изображений`,
    answers
  }
];

export default {
  level: 0,
  time: 0,
  lives: 3,
  questions,
  stats
};
