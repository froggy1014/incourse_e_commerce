export const SplitNum = (number: number) => {
  const price: string[] = [];
  const string = String(number).split('').reverse();

  for (let i = 1; i <= string.length; i++) {
    if (i % 3 === 0) price.push(string[i - 1], ',');
    else price.push(string[i - 1]);
  }
  if (price.at(-1) === ',') price.pop();
  return price.reverse().join('');
};
