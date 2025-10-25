import React from 'react';

export interface CardChipProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardChip: React.FC<CardChipProps> = ({
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
      <path d="M10.25 9C10.3881 9 10.5 9.11193 10.5 9.25V11.25C10.5 11.3881 10.3881 11.5 10.25 11.5H7.25C7.11193 11.5 7 11.3881 7 11.25V9.25C7 9.11193 7.11193 9 7.25 9H10.25Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M19.5 4C21.1569 4 22.5 5.34315 22.5 7V17C22.5 18.6569 21.1569 20 19.5 20H4.5C2.84315 20 1.5 18.6569 1.5 17V7C1.5 5.34315 2.84315 4 4.5 4H19.5ZM4.5 6C3.94772 6 3.5 6.44772 3.5 7V17C3.5 17.5523 3.94772 18 4.5 18H19.5C20.0523 18 20.5 17.5523 20.5 17V7C20.5 6.44772 20.0523 6 19.5 6H4.5Z" fill={color}/>
    </svg>
  );
};

export default CardChip;
