import { evaluate } from 'mathjs';

export const calculate = (expression) => {
  try {
    console.log('Expression:', expression);  // Debugging statement
    const result = evaluate(expression);
    console.log('Result:', result);  // Debugging statement
    return result;
  } catch (error) {
    console.error('Evaluation Error:', error.message);  // Log the specific error
    return 'Error';
  }
};
