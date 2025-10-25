import React from 'react';

export interface CardHumanLinesProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardHumanLines: React.FC<CardHumanLinesProps> = ({
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
      <path d="M7 6H3.5V18H20.5V6H17V4H21.5C22.0523 4 22.5 4.44772 22.5 5V19C22.5 19.5523 22.0523 20 21.5 20H2.5C1.94772 20 1.5 19.5523 1.5 19V5C1.5 4.44772 1.94772 4 2.5 4H7V6Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 10C15.0939 10 18 12.0419 18 15C18 15.5523 17.5523 16 17 16H7C6.44772 16 6 15.5523 6 15C6 12.0419 8.90606 10 12 10ZM12 12C10.1297 12 8.76859 12.9134 8.24121 14H15.7588C15.2314 12.9134 13.8703 12 12 12Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3ZM12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5Z" fill={color}/>
    </svg>
  );
};

export default CardHumanLines;
