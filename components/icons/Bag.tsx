import React from 'react';

export interface BagProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Bag: React.FC<BagProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.6543 2.00391C15.2394 2.08421 16.5 3.39489 16.5 5V6H19C19.4794 6 19.8919 6.3407 19.9824 6.81152L22.0244 17.4336C22.3801 19.2836 20.963 20.9998 19.0791 21H4.92089C3.0371 20.9997 1.61987 19.2836 1.97558 17.4336L4.01757 6.81152L4.03905 6.72461C4.16065 6.29928 4.55053 6.00006 4.99999 6H7.49999V5C7.49999 3.34319 8.8432 2.00008 10.5 2H13.5L13.6543 2.00391ZM3.93944 17.8115C3.82112 18.4279 4.29323 18.9997 4.92089 19H19.0791C19.7068 18.9998 20.1789 18.428 20.0605 17.8115L18.1738 8H5.82616L3.93944 17.8115ZM10.5 4C9.94777 4.00008 9.49999 4.44776 9.49999 5V6H14.5V5C14.5 4.48232 14.1067 4.05621 13.6025 4.00488L13.5 4H10.5Z" fill={color}/>
    </svg>
  );
};

export default Bag;
