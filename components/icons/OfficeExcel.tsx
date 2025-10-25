import React from 'react';

export interface OfficeExcelProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const OfficeExcel: React.FC<OfficeExcelProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M20.5 3.5C21.0523 3.5 21.5 3.94772 21.5 4.5V19.5C21.5 20.0523 21.0523 20.5 20.5 20.5H3.5C2.94772 20.5 2.5 20.0523 2.5 19.5V4.5C2.5 3.94772 2.94772 3.5 3.5 3.5H20.5ZM4.5 18.5H19.5V5.5H4.5V18.5Z" fill={color}/>
  <path d="M15.994 7.59961L13.162 11.8236L16.126 16.2156H13.87L11.962 13.3236L10.054 16.2156H7.87L10.822 11.8236L7.99 7.59961H10.246L12.022 10.3236L13.798 7.59961H15.994Z" fill={color}/>
    </svg>
  );
};

export default OfficeExcel;
