import React from 'react';

export interface SignJpyProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SignJpy: React.FC<SignJpyProps> = ({
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
      <path d="M18.8174 4.57715L13.9307 11.5H17.5V13.5H13V16H17.5V18H13V22H11V18H6.5V16H11V13.5H6.5V11.5H10.0693L5.18262 4.57715L6.81738 3.42285L12 10.7646L17.1826 3.42285L18.8174 4.57715Z" fill={color}/>
    </svg>
  );
};

export default SignJpy;
