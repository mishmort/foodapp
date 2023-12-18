import React from 'react';
import './pop_up.css'; 

const PopupBox = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Your content here */}
        <button onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default PopupBox;
