import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

interface CartButtonProps {
  onClick: () => void;
}

const CartButton = ({ onClick }: CartButtonProps) => {
  const items = useCart((state) => state.items);

  return (
    <button 
      onClick={onClick}
      className="relative p-2 hover:opacity-80 transition-opacity"
    >
      <ShoppingBag className="w-6 h-6" />
      {items.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {items.length}
        </span>
      )}
    </button>
  );
};

export default CartButton;