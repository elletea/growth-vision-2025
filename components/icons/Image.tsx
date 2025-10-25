import React from 'react';

export interface ImageProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.4316 9.67773C11.7977 9.42433 12.293 9.44176 12.6406 9.73145L18.6406 14.7314C18.964 15.001 19.0837 15.445 18.9404 15.8408C18.797 16.2365 18.4209 16.5 18 16.5H6C5.57909 16.5 5.20298 16.2365 5.05957 15.8408C4.91626 15.445 5.03601 15.001 5.35938 14.7314L11.3594 9.73145L11.4316 9.67773ZM8.7627 14.5H15.2373L12 11.8018L8.7627 14.5Z" fill={color}/>
  <path d="M7 7.5C7.82843 7.5 8.5 8.17157 8.5 9C8.5 9.82843 7.82843 10.5 7 10.5C6.17157 10.5 5.5 9.82843 5.5 9C5.5 8.17157 6.17157 7.5 7 7.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21.5 3.5C22.0523 3.5 22.5 3.94772 22.5 4.5V19.5C22.5 20.0523 22.0523 20.5 21.5 20.5H2.5C1.94772 20.5 1.5 20.0523 1.5 19.5V4.5C1.5 3.94772 1.94772 3.5 2.5 3.5H21.5ZM3.5 18.5H20.5V5.5H3.5V18.5Z" fill={color}/>
    </svg>
  );
};

export default Image;
