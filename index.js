import emoji from 'node-emoji';

if (process.argv.length < 3) {
  console.log(emoji.random().emoji);
} else if (!emoji.hasEmoji(process.argv[2])) {
  console.log('Invalid emoji');
} else {
  console.log(emoji.get(process.argv[2]));
}

// if (process.argv.length > 2 && emoji.hasEmoji(process.argv[2])) {
//   console.log(emoji.get(process.argv[2]));
// } else if (process.argv.length > 2 && !emoji.hasEmoji(process.argv[2])) {
//   console.log('Invalid emoji');
// } else {
//   console.log(emoji.random().emoji);
// }
