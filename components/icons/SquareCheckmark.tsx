import React from 'react';

export interface SquareCheckmarkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareCheckmark: React.FC<SquareCheckmarkProps> = ({
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
      <path d="M23.7588 14.1504L17.7588 21.1504C17.5688 21.372 17.2919 21.5 17 21.5C16.7081 21.5 16.4312 21.372 16.2412 21.1504L13.2412 17.6504L14.7588 16.3496L17 18.9639L22.2412 12.8496L23.7588 14.1504Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V11.5H19V10H5V19H11.5V21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM5 8H19V5H5V8Z" fill={color}/>
    </svg>
  );
};

export default SquareCheckmark;
