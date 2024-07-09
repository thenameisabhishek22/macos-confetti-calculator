import React from 'react';
import Button from './Button';
import '../styles/Keypad.css';

const buttons = [
  '(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '+/-', '%', '÷',
  '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '×',
  '¼', '2√x', '3√x', 'y√x', 'ln', 'log₁₀', '4', '5', '6', '−',
  'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
  'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '=',
];

function Keypad({ onButtonClick }) {
  return (
    <div className="KeypadWrapper">
      {buttons.map(button => (
        <Button 
          key={button} 
          label={button} 
          onClick={onButtonClick} 
          special={['÷', '×', '−', '+', '='].includes(button)} 
          zero={button === '0'}
          corner-left={button === 'Rad'}
          corner-right={button === '='}
        />
      ))}
    </div>
  );
}

export default Keypad;
