const emojis = [
  "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😇",
  "🙂", "🙃", "😌", "🤨", "🧐", "🤓", "😎", "🥸", "😏",
  "😒", "😞", "😔", "😟", "😕", "🙁", "🤯", "😣", "😖",
  "😫", "😩", "🥺", "😢", "😭" 
];

const getRandomEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export default getRandomEmoji;