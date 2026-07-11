import React from 'react'

function ColorButton({ color, onClick, isSelected }) {
  return (
    <li 
      className={`${color} ${isSelected ? 'active' : ''}`} 
      onClick={onClick}
    >
      {color} {isSelected && ' ✓'}
    </li>
  );
}

export default ColorButton;
