import React from 'react';

export interface GifProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Gif: React.FC<GifProps> = ({
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
      <path d="M10 10.5H7.75C7.61193 10.5 7.5 10.6119 7.5 10.75V13.25C7.5 13.3881 7.61193 13.5 7.75 13.5H8.5V11.5H10V15H7.75C6.7835 15 6 14.2165 6 13.25V10.75C6 9.7835 6.7835 9 7.75 9H10V10.5Z" fill={color}/>
  <path d="M12.75 15H11.25V9H12.75V15Z" fill={color}/>
  <path d="M18 10.5H15.5V11.5H17.5V13H15.5V15H14V9H18V10.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21.5 3.5C22.0523 3.5 22.5 3.94772 22.5 4.5V19.5C22.5 20.0523 22.0523 20.5 21.5 20.5H2.5C1.94772 20.5 1.5 20.0523 1.5 19.5V4.5C1.5 3.94772 1.94772 3.5 2.5 3.5H21.5ZM3.5 18.5H20.5V5.5H3.5V18.5Z" fill={color}/>
    </svg>
  );
};

export default Gif;
