import React from 'react';

export interface MovingBoxProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MovingBox: React.FC<MovingBoxProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M22.5 3.5C22.8465 3.50004 23.1684 3.67982 23.3506 3.97461C23.5326 4.26937 23.5495 4.63738 23.3945 4.94727L21.5 8.73633V19.5C21.5 20.0523 21.0522 20.4999 20.5 20.5H3.5C2.94772 20.5 2.5 20.0523 2.5 19.5V8.73633L0.605469 4.94727L2.39453 4.05273L4.11816 7.5H8.88184L10.6055 4.05273L10.6768 3.93164C10.8617 3.6637 11.1686 3.5 11.5 3.5H22.5ZM4.5 18.5H8.5V9.5H4.5V18.5ZM10.5 18.5H19.5V9.5H10.5V18.5ZM11.1182 7.5H19.8818L20.8818 5.5H12.1182L11.1182 7.5Z" fill={color}/>
    </svg>
  );
};

export default MovingBox;
