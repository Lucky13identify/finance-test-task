export function replaceDotsWithCommas(number) {
  if (typeof number !== 'number' && typeof number !== 'string') {
    return;
  }

  const numberString = number.toString();
  const numberWithCommas = numberString.replace(/\./g, ',');

  return numberWithCommas;
}
