import React from 'react';

export interface SquareStandProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareStand: React.FC<SquareStandProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M20 3C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H16V21C16 21.5522 15.5522 21.9999 15 22H5V20H8V17H4C2.89553 16.9999 2.00002 16.1045 2 15V5C2 3.89549 2.89552 3.0001 4 3H20ZM10 20H14V11.5H10V20ZM4 15H8V10.5C8.00001 9.94779 8.44781 9.5001 9 9.5H15C15.2651 9.50005 15.5195 9.60553 15.707 9.79297C15.8945 9.98049 16 10.2348 16 10.5V15H20V5H4V15Z" fill={color}/>
    </svg>
  );
};

export default SquareStand;
