import { StringCalculator } from '../src/stringCalculator';

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  test('should return the number itself if only one number is present', () => {
    expect(calculator.add('1')).toBe(1);
  });

  test('should return the sum of two comma-separated numbers', () => {
    expect(calculator.add('1,2')).toBe(3);
  });

  test('should return the sum of multiple comma-separated numbers', () => {
    expect(calculator.add('1,2,3')).toBe(6);
  });

  test('should handle new lines as delimiter between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  test('should handle custom delimiters', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
  });

  test('should throw an exception for negative numbers', () => {
    expect(() => calculator.add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
  });

  test('should throw an error with all negative numbers listed', () => {
    expect(() => calculator.add('1,-2,-3')).toThrow('Negative numbers not allowed: -2, -3');
  });

  test('should handle large numbers', () => {
    expect(calculator.add('1000,2000,3000')).toBe(6000);
  });
  
});
