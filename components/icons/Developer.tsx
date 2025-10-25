import React from 'react';

export interface DeveloperProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Developer: React.FC<DeveloperProps> = ({
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
      <path d="M10.6812 11.2676C10.8844 11.4567 11.0005 11.7223 11.0005 12C11.0004 12.2777 10.8846 12.5433 10.6812 12.7324L3.68115 19.2324L2.31982 17.7676L8.53076 12L2.31982 6.23242L3.68115 4.7666L10.6812 11.2676Z" fill={color}/>
  <path d="M22.5005 18H12.0005V16H22.5005V18Z" fill={color}/>
    </svg>
  );
};

export default Developer;
