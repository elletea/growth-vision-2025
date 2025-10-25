import React from 'react';

export interface FoodMenuProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FoodMenu: React.FC<FoodMenuProps> = ({
  size = 24,
  color = 'currentColor',
  className,
  style,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M8 4C9.19628 4 10.4206 4.20957 11.376 4.83496C11.6061 4.98559 11.8144 5.15744 12 5.34863C12.1856 5.15744 12.3939 4.98559 12.624 4.83496C13.5794 4.20957 14.8037 4 16 4H20C20.5523 4 21 4.44772 21 5V18.0908C21 18.6431 20.5523 19.0908 20 19.0908H16C14.9694 19.0908 14.191 19.2595 13.7002 19.5654C13.2863 19.8234 13 20.2203 13 21H11C11 20.2203 10.7137 19.8234 10.2998 19.5654C9.80899 19.2595 9.03058 19.0908 8 19.0908H4C3.44772 19.0908 3 18.6431 3 18.0908V5L3.00488 4.89746C3.05621 4.39333 3.48232 4 4 4H8ZM5 17.0908H8C9.03648 17.0908 10.1062 17.2315 11 17.6709V8C11 7.21537 10.7077 6.78759 10.2803 6.50781C9.78794 6.18574 9.01248 6 8 6H5V17.0908ZM16 6C14.9875 6 14.2121 6.18574 13.7197 6.50781C13.2923 6.78759 13 7.21537 13 8V17.6709C13.8938 17.2315 14.9635 17.0908 16 17.0908H19V6H16Z" fill={color}/>
    </svg>
  );
};

export default FoodMenu;
