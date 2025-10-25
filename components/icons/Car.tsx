import React from 'react';

export interface CarProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Car: React.FC<CarProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17.0732 3.5C18.0199 3.50019 18.8851 4.03519 19.3086 4.88184L21.5576 9.37891C21.9476 9.27544 22.3272 9.16565 22.6943 9.04785L23.3057 10.9521C22.8842 11.0874 22.4481 11.2126 22 11.3301V20C22 20.5522 21.5522 20.9999 21 21H17C16.4477 21 16 20.5523 16 20V18H8V20C8 20.5522 7.55218 20.9999 7 21H3C2.44772 21 2 20.5523 2 20V11.3301C1.55188 11.2126 1.11583 11.0874 0.694336 10.9521L1.30566 9.04785C1.67253 9.16557 2.05172 9.2755 2.44141 9.37891L4.69141 4.88184C5.11491 4.03517 5.98008 3.50011 6.92676 3.5H17.0732ZM20 11.7812C15.0154 12.7379 8.98459 12.7379 4 11.7812V19H6V17C6 16.4477 6.44772 16 7 16H17C17.5522 16.0001 18 16.4478 18 17V19H20V11.7812ZM6.92676 5.5C6.73752 5.50011 6.56416 5.60711 6.47949 5.77637L4.45117 9.83203C9.14253 10.7213 14.8564 10.7212 19.5479 9.83203L17.5205 5.77637C17.4359 5.60713 17.2624 5.50019 17.0732 5.5H6.92676Z" fill={color}/>
    </svg>
  );
};

export default Car;
