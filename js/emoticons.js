let emoticonArray = [ '🐸 ', '🐮 ', '🐨 ', '🐯 ', '🐼 ', '🐵 ', '🐷 ',];

function getRandomEmoticon(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  let number = Math.round(rand);

  return emoticonArray[number];
};
export { getRandomEmoticon };
