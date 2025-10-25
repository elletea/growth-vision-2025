import React from 'react';

export interface PauseProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Pause: React.FC<PauseProps> = ({
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
      <path d="M9 18.5L6.5 18.5V5.5L9 5.5V18.5Z" fill={color}/>
  <path d="M17.5 18.5H15V5.5H17.5V18.5Z" fill={color}/>
    </svg>
  );
};

export default Pause;
