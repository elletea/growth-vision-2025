import React from 'react';

export interface PdfProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Pdf: React.FC<PdfProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.25 9C8.66421 9 9 9.33579 9 9.75V12.25C9 12.6642 8.66421 13 8.25 13H6.5V15H5V9H8.25ZM6.5 11.5H7.5V10.5H6.5V11.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12.25 9C13.2165 9 14 9.7835 14 10.75V13.25C14 14.2165 13.2165 15 12.25 15H10V9H12.25ZM11.5 13.5H12.25C12.3881 13.5 12.5 13.3881 12.5 13.25V10.75C12.5 10.6119 12.3881 10.5 12.25 10.5H11.5V13.5Z" fill={color}/>
  <path d="M19 10.5H16.5V11.5H18.5V13H16.5V15H15V9H19V10.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21.5 3.5C22.0523 3.5 22.5 3.94772 22.5 4.5V19.5C22.5 20.0523 22.0523 20.5 21.5 20.5H2.5C1.94772 20.5 1.5 20.0523 1.5 19.5V4.5C1.5 3.94772 1.94772 3.5 2.5 3.5H21.5ZM3.5 18.5H20.5V5.5H3.5V18.5Z" fill={color}/>
    </svg>
  );
};

export default Pdf;
