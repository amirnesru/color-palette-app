import { useState } from 'react';
import ColorButton from './components/ColorButton';
import ColorPreview from './components/colorPreview';

function App() {
  const [color, setcolor] = useState(null);
  let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

  return (
    <>
    <div className="card">
      <h1 className='center'>Color Palette Picker</h1>
      <p className='center'>Pick a color to preview it below</p>
      
      <p className="choose-label">Choose color:</p>
      <ul className='flex'>
        {colors.map((col, index) => (
          <ColorButton 
            key={index} 
            color={col} 
            isSelected={color === col} 
            onClick={() => setcolor(col)} 
          />
        ))}
      </ul>
    </div>
    <ColorPreview color={color} setcolor={setcolor} />

     </>
  );
}

export default App;
