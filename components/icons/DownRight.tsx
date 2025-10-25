import React from 'react';

export interface DownRightProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DownRight: React.FC<DownRightProps> = ({
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
      <path d="M4.79297 6.20703L14.5859 16H7V18H17C17.5523 18 18 17.5523 18 17V7H16V14.5859L6.20703 4.79297L4.79297 6.20703Z" fill={color}/>
    </svg>
  );
};

export default DownRight;
