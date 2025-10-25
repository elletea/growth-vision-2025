import React from 'react';

export interface ChevronUpProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ChevronUp: React.FC<ChevronUpProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.29285 4.29289C7.68337 3.90237 8.31654 3.90237 8.70706 4.29289L14.7071 10.2929L13.2928 11.7071L7.99995 6.41421L2.70706 11.7071L1.29285 10.2929L7.29285 4.29289Z" fill={color}/>
    </svg>
  );
};

export default ChevronUp;
