import React, { useState } from 'react';
// import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import ColorItem from '../ColorItem/ColorItem';
import './ColorList.css';

// Sortable Color Item
const SortableColorItem = SortableElement(({ color, index, onMenuOpen }) => (
  <ColorItem color={color} index={index} onMenuOpen={onMenuOpen} />
));

// Sortable List Container
const SortableColorList = SortableContainer(({ items, onMenuOpen }) => {
  return (
    <div className="kzui-color-list">
      {items.map((color, index) => (
        <SortableColorItem 
          key={`color-${color.id}`} 
          index={index} 
          color={color} 
          onMenuOpen={onMenuOpen}
        />
      ))}
    </div>
  );
});

const ColorList = () => {
  // Initial color list
  const [colors, setColors] = useState([
    { id: 1, title: 'Red', color: '#FF0000' },
    { id: 2, title: 'Green', color: '#00FF00' },
    { id: 3, title: 'Blue', color: '#0000FF' },
  ]);

  // Handle sorting the colors array
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  // Handle opening menu for individual items
  const handleMenuOpen = (index) => {
    console.log('Menu opened for:', index);
  };

  return (
    <div className="kzui-color-list-container">
      <SortableColorList items={colors} onSortEnd={onSortEnd} onMenuOpen={handleMenuOpen} />
    </div>
  );
};

export default ColorList;
