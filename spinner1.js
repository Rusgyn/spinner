let time = 200;

setTimeout(() => {
  process.stdout.write('\r| ');
}, time);

setTimeout(() => {
  process.stdout.write('\r/ ');
}, time * 2);

setTimeout(() => {
  process.stdout.write('\r- ');
}, time *3);

setTimeout(() => {
  process.stdout.write('\r\\ ');
}, time * 4);

setTimeout(() => {
  process.stdout.write('\r| ');
}, time * 5);

setTimeout(() => {
  process.stdout.write('\r/ ');
}, time * 6);

setTimeout(() => {
  process.stdout.write('\r- ');
}, time * 7);

setTimeout(() => {
  process.stdout.write('\r\\ ');
}, time * 8);

setTimeout(() => {
  process.stdout.write('\r| ');
}, time * 9);