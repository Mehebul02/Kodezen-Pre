import React, { useState } from 'react';
import './ColorItem.css';

const ColorItem = ({ color, index, onMenuOpen }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    onMenuOpen(index);
  };

  return (
    <div className="kzui-color-item">
      <div
        className="kzui-color-item__preview"
        style={{ backgroundColor: color.color }}
      />
      <div className="kzui-color-item__title">{color.title}</div>
      <div className="kzui-color-item__menu-trigger" onClick={handleMenuClick}>
        &#x22EE; {/* Vertical three-dot menu */}
      </div>
      {showMenu && (
        <div className="kzui-menu">
          <div className="kzui-menu-item" onClick={() => console.log('Edit clicked')}>Edit</div>
          <div className="kzui-menu-item" onClick={() => console.log('Duplicate clicked')}>Duplicate</div>
          <div className="kzui-menu-item" onClick={() => console.log('Delete clicked')}>Delete</div>
        </div>
      )}
    </div>
  );
};

export default ColorItem;
