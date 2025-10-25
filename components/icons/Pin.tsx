import React from 'react';

export interface PinProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Pin: React.FC<PinProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.5001 2C16.0523 2.00007 16.5001 2.44776 16.5001 3V9.58691C17.1274 10.2176 17.718 10.8367 18.2071 11.5703C18.7884 12.4423 19.2083 13.4425 19.4806 14.8037C19.5393 15.0974 19.4633 15.4021 19.2735 15.6338C19.0836 15.8654 18.7996 16 18.5001 16H13.0001V23H11.0001V16H5.50009C5.20052 16 4.91659 15.8654 4.72665 15.6338C4.53681 15.4021 4.46088 15.0974 4.51962 14.8037C4.79189 13.4425 5.21172 12.4423 5.79306 11.5703C6.28216 10.8367 6.87281 10.2176 7.50009 9.58691V3L7.50497 2.89746C7.55631 2.39334 7.98242 2 8.50009 2H15.5001ZM9.50009 10C9.50009 10.2652 9.39462 10.5195 9.20712 10.707C8.4428 11.4713 7.89242 12.0268 7.45712 12.6797C7.20592 13.0565 6.98825 13.4778 6.8038 14H17.1964C17.0119 13.4778 16.7942 13.0565 16.5431 12.6797C16.1078 12.0268 15.5574 11.4713 14.7931 10.707C14.6055 10.5195 14.5001 10.2652 14.5001 10V4H9.50009V10Z" fill={color}/>
    </svg>
  );
};

export default Pin;
