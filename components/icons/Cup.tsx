import React from 'react';

export interface CupProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Cup: React.FC<CupProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17.5 3C17.9 3 18.2614 3.23876 18.4189 3.60645L19.6592 6.5H21V8.5H19.8525L17.9873 20.1582C17.9096 20.6432 17.4912 21 17 21H7C6.50879 21 6.09041 20.6432 6.0127 20.1582L4.14746 8.5H3V6.5H4.34082L5.58105 3.60645L5.64941 3.47461C5.82965 3.18266 6.14998 3 6.5 3H17.5ZM7.85254 19H16.1475L17.8271 8.5H6.17285L7.85254 19ZM6.5166 6.5H17.4834L16.8408 5H7.15918L6.5166 6.5Z" fill={color}/>
    </svg>
  );
};

export default Cup;
