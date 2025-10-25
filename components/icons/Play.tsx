import React from 'react';

export interface PlayProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Play: React.FC<PlayProps> = ({
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
      <path d="M7 19.6417V4.35754C7 4.20108 7.17157 4.10521 7.30482 4.18721L19.7232 11.8293C19.8501 11.9074 19.8501 12.0919 19.7232 12.17L7.30482 19.812C7.17157 19.8941 7 19.7982 7 19.6417Z" fill={color}/>
    </svg>
  );
};

export default Play;
