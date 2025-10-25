import React from 'react';

export interface SquareCardProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareCard: React.FC<SquareCardProps> = ({
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
      <path d="M13.25 13.25H10.75V10.75H13.25V13.25Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M14.5 7.5C15.6046 7.5 16.5 8.39543 16.5 9.5V14.5C16.5 15.6046 15.6046 16.5 14.5 16.5H9.5C8.39543 16.5 7.5 15.6046 7.5 14.5V9.5C7.5 8.39543 8.39543 7.5 9.5 7.5H14.5ZM9.5 14.5H14.5V9.5H9.5V14.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M19.5 4C21.1569 4 22.5 5.34315 22.5 7V17C22.5 18.6569 21.1569 20 19.5 20H4.5C2.84315 20 1.5 18.6569 1.5 17V7C1.5 5.34315 2.84315 4 4.5 4H19.5ZM4.5 6C3.94772 6 3.5 6.44772 3.5 7V17C3.5 17.5523 3.94772 18 4.5 18H19.5C20.0523 18 20.5 17.5523 20.5 17V7C20.5 6.44772 20.0523 6 19.5 6H4.5Z" fill={color}/>
    </svg>
  );
};

export default SquareCard;
