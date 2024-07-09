import React from 'react';
import '../styles/Button.css';

function Button({ label, onClick, special, zero }) {
  return (
    <button 
      className={`StyledButton ${special ? 'special' : ''} ${zero ? 'zero' : ''} ${label === 'Rad' ? 'corner-left' : ''} ${label === '=' ? 'corner-right' : ''}`} 
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Button;
