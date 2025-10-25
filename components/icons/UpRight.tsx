import React from 'react';

export interface UpRightProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const UpRight: React.FC<UpRightProps> = ({
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
      <path d="M17 6C17.5521 6.00025 18 6.44787 18 7V17H16V9.41406L6.20703 19.207L4.79297 17.793L14.5859 8H7V6H17Z" fill={color}/>
    </svg>
  );
};

export default UpRight;
