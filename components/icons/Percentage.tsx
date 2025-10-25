import React from 'react';

export interface PercentageProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Percentage: React.FC<PercentageProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17.5 14.5C19.1569 14.5 20.5 15.8431 20.5 17.5C20.5 19.1569 19.1569 20.5 17.5 20.5C15.8431 20.5 14.5 19.1569 14.5 17.5C14.5 15.8431 15.8431 14.5 17.5 14.5ZM17.5 16.5C16.9477 16.5 16.5 16.9477 16.5 17.5C16.5 18.0523 16.9477 18.5 17.5 18.5C18.0523 18.5 18.5 18.0523 18.5 17.5C18.5 16.9477 18.0523 16.5 17.5 16.5Z" fill={color}/>
  <path d="M20.207 5.20703L5.20703 20.207L3.79297 18.793L18.793 3.79297L20.207 5.20703Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M6.5 3.5C8.15685 3.5 9.5 4.84315 9.5 6.5C9.5 8.15685 8.15685 9.5 6.5 9.5C4.84315 9.5 3.5 8.15685 3.5 6.5C3.5 4.84315 4.84315 3.5 6.5 3.5ZM6.5 5.5C5.94772 5.5 5.5 5.94772 5.5 6.5C5.5 7.05228 5.94772 7.5 6.5 7.5C7.05228 7.5 7.5 7.05228 7.5 6.5C7.5 5.94772 7.05228 5.5 6.5 5.5Z" fill={color}/>
    </svg>
  );
};

export default Percentage;
