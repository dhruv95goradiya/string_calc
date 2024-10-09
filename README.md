# String Calculator TDD Kata

## Overview

This project implements a **String Calculator** following the **Test-Driven Development (TDD)** approach. The calculator accepts a string of numbers and computes their sum. It supports various formats, including custom delimiters and multiple delimiters of any length. 

### Features
- Returns the sum of numbers from a string input.
- Handles an empty string (returns `0`).
- Supports custom delimiters (e.g., `//[delimiter]\n`).
- Supports multiple delimiters (e.g., `//[delim1][delim2]\n`).
- Delimiters can be of any length (e.g., `//[***]\n`).
- Ignores numbers greater than 1000.
- Throws an error when negative numbers are passed, listing all negative numbers.

### Example Inputs
- Input: `""` -> Output: `0`
- Input: `"1"` -> Output: `1`
- Input: `"1,2,3"` -> Output: `6`
- Input: `"1\n2,3"` -> Output: `6`
- Input: `"//[***]\n1***2***3"` -> Output: `6`
- Input: `"//[*][%]\n1*2%3"` -> Output: `6`
- Input: `"//[***][%%%]\n1***2%%%3"` -> Output: `6`
- Input: `"2,1001"` -> Output: `2`

---

## Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v12 or higher)
- **npm** (Node Package Manager)

### Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/string-calculator-tdd.git

2. **Navigate to dir**:

   ```bash
   cd string_calc

3. **Install dependency**:

   ```bash
   npm install

4. **Run test**:

   ```bash
   npm test

### License
This project is licensed under the MIT License 
