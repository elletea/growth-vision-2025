import React from 'react';

export interface OfficeWordProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const OfficeWord: React.FC<OfficeWordProps> = ({
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
  <path d="M11.176 7.59961H12.868L14.248 13.2276L15.628 7.59961H17.656L15.364 16.2156H13.432L11.992 10.7076L10.576 16.2156H8.64404L6.34004 7.59961H8.41604L9.80804 13.2276L11.176 7.59961Z" fill={color}/>
    </svg>
  );
};

export default OfficeWord;
