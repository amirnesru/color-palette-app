import React from 'react';

function ColorPreview({ color, setcolor }) {
  return (
    <div className="preview-container">
      <p className='choose-label'>Preview:</p>
      
      <div 
        className="preview-box"
        style={{ backgroundColor: color ? color.toLowerCase() : '#dcdbdb' }}
      ></div>

      <p className='bold'>
             {color ? `Selected Color: ${color}` : null}
      </p>
      
      <button className='btn' onClick={() => setcolor(null)}>
        Reset
      </button>
    </div>
  );
}

export default ColorPreview;
