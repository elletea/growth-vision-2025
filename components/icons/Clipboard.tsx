import React from 'react';

export interface ClipboardProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Clipboard: React.FC<ClipboardProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.0005 1C14.2632 1.00015 15.3886 1.58596 16.1216 2.5H19.5005C20.0525 2.50026 20.5005 2.94788 20.5005 3.5V20.5C20.5005 21.0521 20.0525 21.4997 19.5005 21.5H4.50049C3.9482 21.5 3.49951 21.0523 3.49951 20.5V3.5C3.49951 2.94772 3.9482 2.5 4.50049 2.5H7.87842C8.61149 1.58585 9.73754 1 11.0005 1H13.0005ZM5.50049 4.5V19.5H18.5005V4.5H16.9673C16.9877 4.66387 17.0005 4.83059 17.0005 5V6C17.0005 6.55212 16.5525 6.99974 16.0005 7H8.00049C7.4482 7 7.00049 6.55228 7.00049 6V5C7.00049 4.83059 7.01227 4.66387 7.03271 4.5H5.50049ZM11.0005 3C9.89592 3 9.00049 3.89543 9.00049 5H15.0005C15.0005 3.89559 14.1048 3.00026 13.0005 3H11.0005Z" fill={color}/>
    </svg>
  );
};

export default Clipboard;
