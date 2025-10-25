import React from 'react';

export interface CheckmarkCircleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CheckmarkCircle: React.FC<CheckmarkCircleProps> = ({
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
      <path d="M17.2587 9.15017L11.2587 16.1502C11.0687 16.3718 10.7918 16.4998 10.4999 16.4998C10.208 16.4997 9.93101 16.3718 9.74108 16.1502L6.74108 12.6502L8.25866 11.3494L10.4999 13.9636L15.7411 7.84938L17.2587 9.15017Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M4.92858 4.92849C8.83375 1.02332 15.1659 1.02346 19.0712 4.92849C22.9764 8.83373 22.9764 15.1658 19.0712 19.0711C15.1659 22.9763 8.83382 22.9763 4.92858 19.0711C1.02356 15.1658 1.02341 8.83365 4.92858 4.92849ZM17.6571 6.34255C14.5329 3.21857 9.46676 3.21843 6.34264 6.34255C3.21852 9.46667 3.21867 14.5328 6.34264 17.657C9.46683 20.7812 14.5329 20.7812 17.6571 17.657C20.7813 14.5328 20.7813 9.46674 17.6571 6.34255Z" fill={color}/>
    </svg>
  );
};

export default CheckmarkCircle;
