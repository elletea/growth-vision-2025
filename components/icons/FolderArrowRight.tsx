import React from 'react';

export interface FolderArrowRightProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FolderArrowRight: React.FC<FolderArrowRightProps> = ({
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
      <path d="M23.207 17.793C23.5731 18.1591 23.5957 18.7381 23.2754 19.1309L23.207 19.207L18.707 23.707L17.293 22.293L20.0859 19.5H10V17.5H20.0859L17.293 14.707L18.707 13.293L23.207 17.793Z" fill={color}/>
  <path d="M10 3.5C10.3038 3.5 10.5915 3.63778 10.7812 3.875L12.4814 6H21C21.5523 6 22 6.44772 22 7V12H20V8H12C11.6962 8 11.4085 7.86222 11.2188 7.625L9.51855 5.5H4V17.5H8V19.5H3C2.44772 19.5 2 19.0523 2 18.5V4.5C2 3.94772 2.44772 3.5 3 3.5H10Z" fill={color}/>
    </svg>
  );
};

export default FolderArrowRight;
