import React from 'react';

export interface CardInsertProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardInsert: React.FC<CardInsertProps> = ({
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
      <path d="M11.3164 7.77051C11.701 7.41009 12.299 7.41009 12.6836 7.77051L16.6836 11.5205L15.3164 12.9795L13 10.8086V16.5H11V10.8086L8.68359 12.9795L7.31641 11.5205L11.3164 7.77051Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M22.5 6H20.5V17.5C20.4999 19.1567 19.1568 20.5 17.5 20.5H6.5C4.84323 20.5 3.50013 19.1567 3.5 17.5V6H1.5V4H22.5V6ZM5.5 6V17.5C5.50013 18.0522 5.9478 18.5 6.5 18.5H17.5C18.0522 18.5 18.4999 18.0522 18.5 17.5V6H5.5Z" fill={color}/>
    </svg>
  );
};

export default CardInsert;
