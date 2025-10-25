import React from 'react';

export interface SquareReaderContactlessAndChipProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareReaderContactlessAndChip: React.FC<SquareReaderContactlessAndChipProps> = ({
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
      <path d="M13.2074 16.7933L11.7933 18.2074L5.79332 12.2074L7.20739 10.7933L13.2074 16.7933Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M9.87926 2.70739C11.0508 1.53602 12.9499 1.53601 14.1214 2.70739L21.2933 9.87926C22.4643 11.0508 22.4646 12.95 21.2933 14.1214L14.1214 21.2933C12.95 22.4646 11.0508 22.4643 9.87926 21.2933L2.70739 14.1214C1.53602 12.9499 1.53601 11.0508 2.70739 9.87926L9.87926 2.70739ZM12.7074 4.12145C12.3169 3.73113 11.6838 3.73112 11.2933 4.12145L4.12145 11.2933C3.73113 11.6838 3.73113 12.3169 4.12145 12.7074L11.2933 19.8793C11.6838 20.2692 12.317 20.2695 12.7074 19.8793L19.8793 12.7074C20.2695 12.317 20.2692 11.6838 19.8793 11.2933L12.7074 4.12145Z" fill={color}/>
    </svg>
  );
};

export default SquareReaderContactlessAndChip;
