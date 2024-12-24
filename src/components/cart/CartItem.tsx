import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { Product } from '../../types/product';

interface CartItemProps {
  item: Product;
}

const CartItem = ({ item }: CartItemProps) => {
  const removeItem = useCart((state) => state.removeItem);
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="flex space-x-4">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-gray-500 mt-1">Black | M</p>
            <p className="text-lg mt-1">${item.price}</p>
          </div>
          <button onClick={() => removeItem(item.id)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center mt-4">
          <label className="text-sm mr-2">Qty:</label>
          <select
            value={quantity}
            onChange={(e) => handleQuantityChange(Number(e.target.value))}
            className="border rounded px-2 py-1"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CartItem;