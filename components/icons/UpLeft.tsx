import React from 'react';

export interface UpLeftProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const UpLeft: React.FC<UpLeftProps> = ({
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
      <path d="M17.0005 8H9.41455L19.2075 17.793L17.7935 19.207L8.00049 9.41406V17H6.00049V7C6.00049 6.44772 6.4482 6 7.00049 6H17.0005V8Z" fill={color}/>
    </svg>
  );
};

export default UpLeft;
