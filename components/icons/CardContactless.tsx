import React from 'react';

export interface CardContactlessProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardContactless: React.FC<CardContactlessProps> = ({
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
      <path d="M15.5 6H4.5C3.94772 6 3.5 6.44772 3.5 7V17C3.5 17.5523 3.94772 18 4.5 18H19.5C20.0523 18 20.5 17.5523 20.5 17V16.5H22.5V17C22.5 18.6569 21.1569 20 19.5 20H4.5C2.84315 20 1.5 18.6569 1.5 17V7C1.5 5.34315 2.84315 4 4.5 4H15.5V6Z" fill={color}/>
  <path d="M21.7568 2.86816L22.041 3.16699C24.8783 6.30742 24.7834 11.1551 21.7568 14.1816L21.2324 14.707L19.8184 13.292L20.3428 12.7676C22.6128 10.4976 22.684 6.86117 20.5557 4.50586L20.3428 4.28223L19.7676 3.70703L21.1816 2.29297L21.7568 2.86816Z" fill={color}/>
  <path d="M18.5859 5.69629C20.148 7.25839 20.148 9.79142 18.5859 11.3535L18.2324 11.707L16.8184 10.293L17.1719 9.93945C17.9529 9.15841 17.9529 7.8914 17.1719 7.11035L16.7676 6.70703L18.1816 5.29297L18.5859 5.69629Z" fill={color}/>
  <path d="M10.25 9C10.3881 9 10.5 9.11193 10.5 9.25V11.25C10.5 11.3881 10.3881 11.5 10.25 11.5H7.25C7.11193 11.5 7 11.3881 7 11.25V9.25C7 9.11193 7.11193 9 7.25 9H10.25Z" fill={color}/>
    </svg>
  );
};

export default CardContactless;
