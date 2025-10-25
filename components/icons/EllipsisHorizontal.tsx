import React from 'react';

export interface EllipsisHorizontalProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const EllipsisHorizontal: React.FC<EllipsisHorizontalProps> = ({
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
      <path d="M19 10C20.104 10 21 10.896 21 12C21 13.104 20.104 14 19 14C17.896 14 17 13.104 17 12C17 10.896 17.896 10 19 10Z" fill={color}/>
  <path d="M12 10C13.104 10 14 10.896 14 12C14 13.104 13.104 14 12 14C10.896 14 10 13.104 10 12C10 10.896 10.896 10 12 10Z" fill={color}/>
  <path d="M7 12C7 10.896 6.104 10 5 10C3.896 10 3 10.896 3 12C3 13.104 3.896 14 5 14C6.104 14 7 13.104 7 12Z" fill={color}/>
    </svg>
  );
};

export default EllipsisHorizontal;
