import React from 'react';

export interface CardRemoveProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardRemove: React.FC<CardRemoveProps> = ({
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
      <path d="M13 13.6914L15.3164 11.5205L16.6836 12.9795L12.6836 16.7295C12.299 17.0899 11.701 17.0899 11.3164 16.7295L7.31641 12.9795L8.68359 11.5205L11 13.6914V8H13V13.6914Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M22.5 6H20.5V17.5C20.5 19.1569 19.1569 20.5 17.5 20.5H6.5C4.84315 20.5 3.5 19.1569 3.5 17.5V6H1.5V4H22.5V6ZM5.5 6V17.5C5.5 18.0523 5.94772 18.5 6.5 18.5H17.5C18.0523 18.5 18.5 18.0523 18.5 17.5V6H5.5Z" fill={color}/>
    </svg>
  );
};

export default CardRemove;
