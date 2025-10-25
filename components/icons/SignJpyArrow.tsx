import React from 'react';

export interface SignJpyArrowProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SignJpyArrow: React.FC<SignJpyArrowProps> = ({
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
      <path d="M11.8135 6.08105L7.94238 11.5H11V13.5H7V15.5H11V17.5H7V20.5H5V17.5H1V15.5H5V13.5H1V11.5H4.05762L0.186523 6.08105L1.81348 4.91895L6 10.7793L10.1865 4.91895L11.8135 6.08105Z" fill={color}/>
  <path d="M23.207 11.793C23.3946 11.9805 23.5 12.2348 23.5 12.5C23.5 12.7321 23.4193 12.9558 23.2734 13.1338L23.207 13.207L18.707 17.707L17.293 16.293L20.0859 13.5H13V11.5H20.0859L17.293 8.70703L18.707 7.29297L23.207 11.793Z" fill={color}/>
    </svg>
  );
};

export default SignJpyArrow;
