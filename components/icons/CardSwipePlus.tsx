import React from 'react';

export interface CardSwipePlusProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardSwipePlus: React.FC<CardSwipePlusProps> = ({
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
      <path d="M18.5 18H22.5V20H18.5V24H16.5V20H12.5V18H16.5V14H18.5V18Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M19.5 4C21.1569 4 22.5 5.34315 22.5 7V14H20.5V10.5H3.5V17C3.5 17.5523 3.94772 18 4.5 18H10.5V20H4.5C2.84315 20 1.5 18.6569 1.5 17V7C1.5 5.34315 2.84315 4 4.5 4H19.5ZM4.5 6C3.94772 6 3.5 6.44772 3.5 7V8.5H20.5V7C20.5 6.44772 20.0523 6 19.5 6H4.5Z" fill={color}/>
    </svg>
  );
};

export default CardSwipePlus;
