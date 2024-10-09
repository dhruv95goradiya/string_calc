export class StringCalculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }

    let delimiters = [',', '\n']; // Default delimiters: comma and newline
    let numberString = numbers;

    // Handle custom delimiters
    const customDelimiterPattern = /^\/\/(\[.+\])\n/;
    const singleDelimiterPattern = /^\/\/(.+)\n/;

    if (customDelimiterPattern.test(numbers)) {
      // Multiple delimiters with any length
      const delimiterMatch = numbers.match(customDelimiterPattern)[1];
      const delimiterParts = delimiterMatch.slice(1, -1).split(']['); // Extract delimiters from format [delim1][delim2]
      delimiters = delimiters.concat(delimiterParts);
      numberString = numbers.replace(customDelimiterPattern, '');
    } else if (singleDelimiterPattern.test(numbers)) {
      // Single delimiter
      const delimiterMatch = numbers.match(singleDelimiterPattern)[1];
      delimiters.push(delimiterMatch);
      numberString = numbers.replace(singleDelimiterPattern, '');
    }

    // regex pattern to match all delimiters
    const delimiterRegex = new RegExp(`[${delimiters.map(d => this.escapeRegex(d)).join('|')}]`);
    
    // Split the numbers string by the delimiters
    const numberArray = numberString.split(delimiterRegex).map(Number);

    // Handle negative numbers
    const negativeNumbers = numberArray.filter(n => n < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    //ignore >1000 num
    const filteredArray = numberArray.filter(n => n <= 1000);

    return filteredArray.reduce((sum, num) => sum + num, 0);
  }

  // escape special characters in delimiters for regex
  escapeRegex(delimiter) {
    return delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

}
