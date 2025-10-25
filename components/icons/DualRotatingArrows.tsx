import React from 'react';

export interface DualRotatingArrowsProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DualRotatingArrows: React.FC<DualRotatingArrowsProps> = ({
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
      <path d="M22 13.5C22 16.8137 19.3137 19.5 16 19.5H7.41406L10.207 22.293L8.79297 23.707L4.29297 19.207C3.90244 18.8165 3.90244 18.1835 4.29297 17.793L8.79297 13.293L10.207 14.707L7.41406 17.5H16C18.2091 17.5 20 15.7091 20 13.5V11H22V13.5Z" fill={color}/>
  <path d="M19.707 4.79297C20.0975 5.18348 20.0975 5.8165 19.707 6.20703L15.207 10.707L13.793 9.29297L16.5859 6.5H8C5.79089 6.5 4.00004 8.2909 4 10.5V13H2V10.5C2.00004 7.18633 4.68632 4.5 8 4.5H16.5859L13.793 1.70703L15.207 0.292969L19.707 4.79297Z" fill={color}/>
    </svg>
  );
};

export default DualRotatingArrows;
