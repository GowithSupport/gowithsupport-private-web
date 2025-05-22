
import React from 'react';

interface PhoneButtonProps {
  phoneNumber: string;
  className?: string;
}

const PhoneButton: React.FC<PhoneButtonProps> = ({ phoneNumber, className = "" }) => {
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  
  return (
    <a 
      href={`tel:${formattedNumber}`} 
      className={`bg-gowith-orange hover:bg-gowith-orange-hover text-white font-medium px-4 py-2 rounded-md transition-colors flex items-center justify-center ${className}`}
    >
      {phoneNumber}
    </a>
  );
};

export default PhoneButton;
