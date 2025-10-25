import React from 'react';

export interface ChevronLeftProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ChevronLeft: React.FC<ChevronLeftProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 7.29291C3.90237 7.68343 3.90237 8.3166 4.29289 8.70712L10.2929 14.7071L11.7071 13.2929L6.41421 8.00001L11.7071 2.70712L10.2929 1.29291L4.29289 7.29291Z" fill={color}/>
    </svg>
  );
};

export default ChevronLeft;
