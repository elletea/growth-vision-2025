import React from 'react';

export interface SquareAiFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareAiFill: React.FC<SquareAiFillProps> = ({
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
      <path d="M13 1C13 4.73686 13.9106 7.17374 15.4883 8.69238C17.0736 10.2182 19.5212 11 23 11V13C19.5212 13 17.0736 13.7818 15.4883 15.3076C13.9106 16.8263 13 19.2631 13 23H11C11 19.5212 10.2182 17.0736 8.69238 15.4883C7.17374 13.9106 4.73686 13 1 13V11C4.73686 11 7.17374 10.0894 8.69238 8.51172C10.2182 6.9264 11 4.47881 11 1H13Z" fill={color}/>
    </svg>
  );
};

export default SquareAiFill;
