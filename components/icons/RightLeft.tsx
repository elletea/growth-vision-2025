import React from 'react';

export interface RightLeftProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RightLeft: React.FC<RightLeftProps> = ({
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
      <path d="M9.70703 13.707L6.91406 16.5H20V18.5H6.91406L9.70703 21.293L8.29297 22.707L3.79297 18.207C3.60544 18.0195 3.5 17.7652 3.5 17.5C3.5 17.2679 3.58073 17.0442 3.72656 16.8662L3.79297 16.793L8.29297 12.293L9.70703 13.707Z" fill={color}/>
  <path d="M20.207 5.79297L20.2734 5.86621C20.4192 6.04414 20.5 6.26798 20.5 6.5C20.5 6.76513 20.3945 7.01951 20.207 7.20703L15.707 11.707L14.293 10.293L17.0859 7.5H4V5.5H17.0859L14.293 2.70703L15.707 1.29297L20.207 5.79297Z" fill={color}/>
    </svg>
  );
};

export default RightLeft;
