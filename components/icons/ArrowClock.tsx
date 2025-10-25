import React from 'react';

export interface ArrowClockProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowClock: React.FC<ArrowClockProps> = ({
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
      <path d="M12 2C17.5227 2.00006 21.9999 6.4773 22 12C22 17.5228 17.5228 21.9999 12 22C6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20C16.4182 19.9999 20 16.4182 20 12C19.9999 7.58187 16.4181 4.00006 12 4C9.25166 4 6.82626 5.38707 5.38574 7.5H8V9.5H3C2.44772 9.5 2 9.05228 2 8.5V3.5H4V5.99902C5.82397 3.57125 8.728 2 12 2Z" fill={color}/>
  <path d="M12.5 12H15.5V14H11.5C10.9477 14 10.5 13.5523 10.5 13V8H12.5V12Z" fill={color}/>
    </svg>
  );
};

export default ArrowClock;
