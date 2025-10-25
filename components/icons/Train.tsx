import React from 'react';

export interface TrainProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Train: React.FC<TrainProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17.6543 4.50391C19.2394 4.58421 20.5 5.8949 20.5 7.5V19C20.5 20.6569 19.1569 22 17.5 22H6.5C4.84315 22 3.5 20.6569 3.5 19V7.5C3.50001 5.84315 4.84315 4.5 6.5 4.5H17.5L17.6543 4.50391ZM5.5 19C5.5 19.5523 5.94772 20 6.5 20H17.5C18.0523 20 18.5 19.5523 18.5 19V18H5.5V19ZM6.5 6.5C5.94772 6.5 5.50001 6.94772 5.5 7.5V16H18.5V7.5C18.5 6.98233 18.1067 6.55621 17.6025 6.50488L17.5 6.5H6.5Z" fill={color}/>
  <path d="M12 0.375C13.3235 0.375 14.7271 0.812999 15.707 1.79297L14.293 3.20703C13.7729 2.68701 12.9265 2.375 12 2.375C11.0735 2.375 10.2271 2.687 9.70703 3.20703L8.29297 1.79297C9.27294 0.812995 10.6765 0.375003 12 0.375Z" fill={color}/>
    </svg>
  );
};

export default Train;
