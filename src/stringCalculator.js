export class StringCalculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    // const numArray = numbers.split(',');
    // Replace newline characters with commas, then split by comma
    // const numArray = numbers.replace(/\n/g, ',').split(',');
    // return numArray.reduce((sum, current) => sum + parseInt(current), 0);

    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbers = numbers.substring(delimiterEndIndex + 1);
    }
    const numArray = numbers.replace(/\n/g, delimiter).split(delimiter);
    const negatives = numArray.filter(num => parseInt(num) < 0);

    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
    }

    return numArray.reduce((sum, current) => sum + parseInt(current), 0);
  }
}
