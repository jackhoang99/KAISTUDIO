import React from 'react';

interface ShippingProgressProps {
  subtotal: number;
}

const ShippingProgress = ({ subtotal }: ShippingProgressProps) => {
  const threshold = 75;
  const remaining = Math.max(0, threshold - subtotal);
  const progress = Math.min(100, (subtotal / threshold) * 100);

  return (
    <div className="mt-4">
      {remaining > 0 ? (
        <p className="text-sm mb-2">
          You're ${remaining.toFixed(2)} away from Free Standard Shipping
        </p>
      ) : (
        <p className="text-sm mb-2 text-green-600">
          Congratulations! You've earned Free Standard Shipping
        </p>
      )}
      <div className="h-2 bg-gray-200 rounded-full">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between text-xs mt-1">
        <span>$0</span>
        <span>${threshold}</span>
      </div>
    </div>
  );
}

export default ShippingProgress;