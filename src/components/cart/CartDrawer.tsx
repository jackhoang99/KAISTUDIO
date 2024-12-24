import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import CartItem from './CartItem';
import ShippingProgress from './ShippingProgress';
import DiscountCode from './DiscountCode';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const items = useCart((state) => state.items);
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shippingCost = 5;
  const total = subtotal + shippingCost;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-display">YOUR BAG</h2>
              <button onClick={onClose}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <ShippingProgress subtotal={subtotal} />
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="p-6 border-t border-gray-200">
            <DiscountCode />
            
            <div className="space-y-4 mt-6">
              <div className="flex justify-between text-sm">
                <span>Sub Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Estimated Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-[#4A90E2] text-white py-4 mt-6 rounded font-medium">
              CHECKOUT SECURELY
            </button>

            <div className="flex justify-center space-x-2 mt-4">
              <img src="/visa.svg" alt="Visa" className="h-8" />
              <img src="/mastercard.svg" alt="Mastercard" className="h-8" />
              <img src="/paypal.svg" alt="PayPal" className="h-8" />
              <img src="/applepay.svg" alt="Apple Pay" className="h-8" />
              <img src="/klarna.svg" alt="Klarna" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;