// Структура данных игры

const initialState = {
  question: 0,
  time: 0,
  lives: 3
};

const questions = {
  'question-0': {
    text: `Угадайте для каждого изображения фото или рисунок?`,
    answer: 0
  },
  'question-1': {
    text: `Угадай, фото или рисунок?`,
    answer: 1
  },
  'question-2': {
    text: `Найдите рисунок среди изображений`,
    answer: 2
  }
};

const answers = {
  'answer-0': {
    isTrue: false,
    paint: images.paintings[0],
    photo: images.photos[0]
  },
  'answer-1': {
    isTrue: false,
    paint: images.paintings[0],
    photo: images.photos[0]
  },
  'answer-2': {
    isTrue: false,
    paint: images.paintings[0],
    photo: images.photos[0]
  }
};

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
    `http://i.imgur.com/1KegWPz.jpg`,

    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,

    // Nature
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

export {initialState, questions, answers, images};
