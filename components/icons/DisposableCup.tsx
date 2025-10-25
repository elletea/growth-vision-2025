import React from 'react';

export interface DisposableCupProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DisposableCup: React.FC<DisposableCupProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17.1494 1.98877L14.3633 2.40869L14.0879 4.50049H21V6.50049H19.8711L17.9902 20.1372C17.9217 20.6317 17.4993 21.0005 17 21.0005H7C6.5007 21.0005 6.07825 20.6317 6.00977 20.1372L4.12891 6.50049H3V4.50049H12.0713L12.4795 1.40283L12.5137 1.2417C12.6244 0.877974 12.9359 0.602683 13.3213 0.544434L16.8506 0.0102539L17.1494 1.98877ZM7.87109 19.0005H16.1289L17.8525 6.50049H13.8242L12.4912 16.6313L10.5088 16.3696L11.8086 6.50049H6.14746L7.87109 19.0005Z" fill={color}/>
    </svg>
  );
};

export default DisposableCup;
