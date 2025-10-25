import React from 'react';

export interface HumanCoupleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HumanCouple: React.FC<HumanCoupleProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.5 12C20.5653 12 24 15.0601 24 19C24 19.5523 23.5523 20 23 20H17V18H21.8877C21.3828 15.7634 19.2196 14 16.5 14H12.749C14.1304 15.2591 15 17.0181 15 19C15 19.5523 14.5523 20 14 20H1C0.447715 20 0 19.5523 0 19C3.46434e-08 15.0601 3.43474 12 7.5 12H16.5ZM7.5 14C4.78041 14 2.61725 15.7634 2.1123 18H12.8877C12.3828 15.7634 10.2196 14 7.5 14Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M7.5 4C9.15685 4 10.5 5.34315 10.5 7C10.5 8.65685 9.15685 10 7.5 10C5.84315 10 4.5 8.65685 4.5 7C4.5 5.34315 5.84315 4 7.5 4ZM7.5 6C6.94772 6 6.5 6.44772 6.5 7C6.5 7.55228 6.94772 8 7.5 8C8.05228 8 8.5 7.55228 8.5 7C8.5 6.44772 8.05228 6 7.5 6Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M16.5 4C18.1569 4 19.5 5.34315 19.5 7C19.5 8.65685 18.1569 10 16.5 10C14.8431 10 13.5 8.65685 13.5 7C13.5 5.34315 14.8431 4 16.5 4ZM16.5 6C15.9477 6 15.5 6.44772 15.5 7C15.5 7.55228 15.9477 8 16.5 8C17.0523 8 17.5 7.55228 17.5 7C17.5 6.44772 17.0523 6 16.5 6Z" fill={color}/>
    </svg>
  );
};

export default HumanCouple;
