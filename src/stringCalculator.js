export class StringCalculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }

    // Custom delimiter support: check for "//[delimiter]\n[numbers]"
    const delimiterPattern = /^\/\/(.+)\n/;
    let delimiters = [',', '\n'];
    let numberString = numbers;

    if (delimiterPattern.test(numbers)) {
      const delimiterMatch = numbers.match(delimiterPattern);
      delimiters.push(delimiterMatch[1]);
      numberString = numbers.replace(delimiterPattern, '');
    }

    // regex to split by multiple delimiters
    const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);
    const numberArray = numberString.split(delimiterRegex).map(Number);

    // Handle negative numbers
    const negativeNumbers = numberArray.filter(n => n < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
