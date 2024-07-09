import React, { useState } from 'react';
import Keypad from './Keypad';
import '../styles/Calculator.css';
import * as math from 'mathjs';
import ConfettiExplosion from 'react-confetti-explosion';

const Calculator = () => {
  const [theme, setTheme] = useState('dark');
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [error, setError] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = (button) => {
    try {
      if (button === 'C') {
        setDisplay('0');
        setExpression('');
        setError(null);
      } else if (button === '=') {
        const result = math.evaluate(expression);
        if (expression.includes('2') && expression.includes('6')) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 2000);
        }
        setDisplay(result.toString());
        setExpression(result.toString());
      } else if (button === '±') {
        const newValue = (-parseFloat(display)).toString();
        setDisplay(newValue);
        setExpression((prevExpression) => prevExpression.slice(0, -display.length) + newValue);
      } else if (button === '%') {
        const newValue = (parseFloat(display) / 100).toString();
        setDisplay(newValue);
        setExpression((prevExpression) => prevExpression.slice(0, -display.length) + newValue);
      } else if (['÷', '×', '−', '+'].includes(button)) {
        const operators = {
          '÷': '/',
          '×': '*',
          '−': '-',
          '+': '+',
        };
        setDisplay(button);
        setExpression((prevExpression) => prevExpression + operators[button]);
      } else if (button === 'x²') {
        const newValue = math.pow(parseFloat(display), 2).toString();
        setDisplay(newValue);
        setExpression(newValue);
      } else if (button === 'x³') {
        const newValue = math.pow(parseFloat(display), 3).toString();
        setDisplay(newValue);
        setExpression(newValue);
      } else if (button === '1/x') {
        const newValue = (1 / parseFloat(display)).toString();
        setDisplay(newValue);
        setExpression(newValue);
      } else if (button === '2√x') {
        const newValue = math.sqrt(parseFloat(display)).toString();
        setDisplay(newValue);
        setExpression(newValue);
      } else if (button === '3√x') {
        const newValue = math.cbrt(parseFloat(display)).toString();
        setDisplay(newValue);
        setExpression(newValue);
      } else if (button === 'x!') {
        const newValue = math.factorial(parseFloat(display)).toString();
        setDisplay(newValue);
        setExpression(newValue);
      } else if (button === 'sin') {
        const newValue = math.sin(math.unit(parseFloat(display), 'deg')).toString();
        setDisplay(newValue);
        setExpression(newValue);
      } else if (button === 'cos') {
        const newValue = math.cos(math.unit(parseFloat(display), 'deg')).toString();
        setDisplay(newValue);
        setExpression(newValue);
      } else if (button === 'tan') {
        const newValue = math.tan(math.unit(parseFloat(display), 'deg')).toString();
        setDisplay(newValue);
        setExpression(newValue);
      } else if (button === 'ln') {
        const newValue = math.log(parseFloat(display)).toString();
        setDisplay(newValue);
        setExpression(newValue);
      } else if (button === 'log₁₀') {
        const newValue = math.log10(parseFloat(display)).toString();
        setDisplay(newValue);
        setExpression(newValue);
      } else if (button === 'Rand') {
        const newValue = Math.random().toString();
        setDisplay(newValue);
        setExpression(newValue);
      } else {
        setDisplay((prevDisplay) => (prevDisplay === '0' ? button : prevDisplay + button));
        setExpression((prevExpression) => prevExpression + button);
      }
      setError(null);
    } catch (e) {
      setError(e.message);
      setDisplay('Error');
    }
  };

  

  return (
    <div className="CalculatorWrapper">
      {showConfetti && <ConfettiExplosion />}
      <div className="DisplayWrapper">{expression}</div>
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
