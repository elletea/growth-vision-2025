import React from 'react';

export interface ChevronDownProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ChevronDown: React.FC<ChevronDownProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.70715 11.7071C8.31663 12.0976 7.68346 12.0976 7.29294 11.7071L1.29294 5.70711L2.70715 4.29289L8.00005 9.58579L13.2929 4.29289L14.7072 5.70711L8.70715 11.7071Z" fill={color}/>
    </svg>
  );
};

export default ChevronDown;
