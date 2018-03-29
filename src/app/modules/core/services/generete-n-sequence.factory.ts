export const generateRandomSequence = (n: number): string => {
  return new Array(n).join().replace(/(.|$)/g, function() { return ((Math.random() * 36) | 0)
    .toString(36)[Math.random() < .5 ? 'toString' : 'toUpperCase'](); });
};
