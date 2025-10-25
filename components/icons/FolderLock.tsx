import React from 'react';

export interface FolderLockProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FolderLock: React.FC<FolderLockProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15 9.5C16.6569 9.5 18 10.8431 18 12.5V14H18.5C19.6046 14 20.5 14.8954 20.5 16V20.5C20.5 21.6046 19.6046 22.5 18.5 22.5H11.5C10.3954 22.5 9.5 21.6046 9.5 20.5V16C9.5 14.8954 10.3954 14 11.5 14H12V12.5C12 10.8431 13.3431 9.5 15 9.5ZM11.5 20.5H18.5V16H11.5V20.5ZM15 11.5C14.4477 11.5 14 11.9477 14 12.5V14H16V12.5C16 11.9477 15.5523 11.5 15 11.5Z" fill={color}/>
  <path d="M10 2.5C10.3038 2.5 10.5915 2.63778 10.7812 2.875L12.4814 5H21L21.1025 5.00488C21.6067 5.05621 22 5.48232 22 6V12H20V7H12C11.6962 7 11.4085 6.86222 11.2188 6.625L9.51855 4.5H4V16.5H7.5V18.5H3C2.44772 18.5 2 18.0523 2 17.5V3.5C2 2.94772 2.44772 2.5 3 2.5H10Z" fill={color}/>
    </svg>
  );
};

export default FolderLock;
