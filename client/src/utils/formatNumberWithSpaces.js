export function thousandsSeparator(number) {
  const parts = number.toString().split('.');
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  if (parts.length === 2) {
    const decimalPart = parts[1].padEnd(3, '0').substring(0, 3);

    return `${integerPart} ${decimalPart}`;
  } else {
    return integerPart;
  }
}
