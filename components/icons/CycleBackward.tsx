import React from 'react';

export interface CycleBackwardProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CycleBackward: React.FC<CycleBackwardProps> = ({
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
      <path d="M9.20731 4.20703L6.41434 7H15.0003C18.59 7.0002 21.5003 9.91025 21.5003 13.5C21.5003 17.0897 18.59 19.9998 15.0003 20H11.5003V18H15.0003C17.4854 17.9998 19.5003 15.9852 19.5003 13.5C19.5003 11.0148 17.4854 9.0002 15.0003 9H6.41434L9.20731 11.793L7.79324 13.207L3.29324 8.70703C2.90273 8.31652 2.90275 7.6835 3.29324 7.29297L7.79324 2.79297L9.20731 4.20703Z" fill={color}/>
    </svg>
  );
};

export default CycleBackward;
