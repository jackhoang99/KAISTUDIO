import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const ConfirmationActions = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <Button 
        onClick={() => navigate('/')}
        className="w-full bg-black text-white py-3 hover:bg-black/80"
      >
        Go to Homepage
      </Button>
      <Button 
        onClick={() => navigate('/booking')}
        className="w-full border border-black py-3 hover:bg-black/5"
      >
        Book Your First Class
      </Button>
    </div>
  );
};

export default ConfirmationActions;