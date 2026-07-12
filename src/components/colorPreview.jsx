import React from 'react';
import { MdRestartAlt } from "react-icons/md";
import { MdOutlineColorLens } from "react-icons/md";

function ColorPreview({ color, setcolor }) {
  return (
    <div className="preview-container">
      <p className='choose-label'>Preview:</p>
      
      <div 
        className="preview-box icon-center"
        style={{ backgroundColor: color ? color.toLowerCase() : '#dcdbdb' }}>

        {!color ? (
          <div className="placeholder-content">
            <MdOutlineColorLens size="40px" className="placeholder-icon" />
            <span>No Color Selected Yet</span> 
          </div>
        ) : null}

      </div>
      
      <p className='bold'>
             {color ? `Selected Color: ${color}` : null}
      </p>
      
      <button className='btn btn-content' onClick={() => setcolor(null)}>
        <MdRestartAlt size = "24px" className='bold-icon' />
        Reset
      </button>
    </div>
  );
}

export default ColorPreview;
