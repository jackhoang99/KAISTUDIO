import React from 'react';

interface MerchItemProps {
  name: string;
  price: number;
  image: string;
  description: string;
}

const MerchItem = ({ name, price, image, description }: MerchItemProps) => {
  return (
    <div className="group">
      <div className="aspect-square overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-light mb-2">{name}</h3>
      <p className="text-black/60 mb-2">{description}</p>
      <p className="font-light">${price}</p>
      <p className="mt-4 text-sm text-black/60 italic">Available in store</p>
    </div>
  );
};

export default MerchItem;