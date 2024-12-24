import React, { useState } from 'react';

const DiscountCode = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState('');

  return (
    <div className="border-t border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full items-center"
      >
        <span className="text-lg">Discount code?</span>
        <span className="transform transition-transform duration-200" style={{ 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-4 flex space-x-2">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter code"
            className="flex-1 border border-gray-300 rounded px-4 py-2"
          />
          <button className="bg-black text-white px-6 py-2 rounded">
            APPLY
          </button>
        </div>
      )}
    </div>
  );
}

export default DiscountCode;