import React from 'react';

export interface DownLeftProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DownLeft: React.FC<DownLeftProps> = ({
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
      <path d="M19.2075 6.20703L9.41455 16H17.0005V18H7.00049C6.44821 18 6.0005 17.5523 6.00049 17V7H8.00049V14.5859L17.7935 4.79297L19.2075 6.20703Z" fill={color}/>
    </svg>
  );
};

export default DownLeft;
