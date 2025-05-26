import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils } from 'lucide-react';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary-900';

  return (
    <Link to="/" className="flex items-center">
      <div className="mr-2 text-accent-500">
        <Utensils size={28} />
      </div>
      <div className={`font-serif font-bold text-2xl ${textColor}`}>
        DesiCrave
      </div>
    </Link>
  );
};

export default Logo;