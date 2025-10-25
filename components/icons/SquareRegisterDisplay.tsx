import React from 'react';

export interface SquareRegisterDisplayProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareRegisterDisplay: React.FC<SquareRegisterDisplayProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M19.5 3C20.8807 3 22 4.11929 22 5.5V14.5C22 15.8807 20.8807 17 19.5 17H14.5V17.5C14.5 18.3284 15.1716 19 16 19H17V21H7V19H8C8.82843 19 9.5 18.3284 9.5 17.5V17H4.5C3.11929 17 2 15.8807 2 14.5V5.5C2 4.11929 3.11929 3 4.5 3H19.5ZM4.5 5C4.22386 5 4 5.22386 4 5.5V14.5C4 14.7761 4.22386 15 4.5 15H19.5C19.7761 15 20 14.7761 20 14.5V5.5C20 5.22386 19.7761 5 19.5 5H4.5Z" fill={color}/>
    </svg>
  );
};

export default SquareRegisterDisplay;
