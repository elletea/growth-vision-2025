import React from 'react';

export interface CardChipMultipleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardChipMultiple: React.FC<CardChipMultipleProps> = ({
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
      <path d="M12.5 13.5H9.5V11.5H12.5V13.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M20.5312 7.01465C21.9179 7.15553 23 8.32618 23 9.75V18.25C23 19.7688 21.7688 21 20.25 21H7.75C6.23122 21 5 19.7688 5 18.25V9.75C5 8.23122 6.23122 7 7.75 7H20.25L20.5312 7.01465ZM7.75 9C7.33579 9 7 9.33579 7 9.75V18.25C7 18.6642 7.33579 19 7.75 19H20.25C20.6642 19 21 18.6642 21 18.25V9.75C21 9.36183 20.7051 9.04253 20.3271 9.00391L20.25 9H7.75Z" fill={color}/>
  <path d="M18 5H3.75C3.33579 5 3 5.33579 3 5.75V16H1V5.75C1 4.23122 2.23122 3 3.75 3H18V5Z" fill={color}/>
    </svg>
  );
};

export default CardChipMultiple;
