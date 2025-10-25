import React from 'react';

export interface PaypayProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Paypay: React.FC<PaypayProps> = ({
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
      <path d="M6.50628 21H5.66194C4.95639 20.9978 4.28038 20.7166 3.7816 20.2177C3.28282 19.7189 3.00183 19.043 3 18.3377V8.63644C5.1842 8.40583 7.38577 8.39005 9.57306 8.58932L6.50628 21ZM17.3371 12.6084C17.753 10.8885 14.9801 9.29889 10.5436 8.69741L8.93114 15.4024C12.6537 15.5784 16.8809 14.4586 17.3357 12.6084H17.3371ZM18.3381 3H5.66194C4.98148 3.00248 4.32766 3.26469 3.83416 3.73301C3.34066 4.20134 3.04475 4.8404 3.00693 5.51956C13.6256 5.2202 18.79 8.91223 17.9804 12.5876C17.2497 15.9027 13.8807 17.1735 8.414 17.5907L7.59463 20.9945H18.3381C19.0434 20.9923 19.7192 20.7112 20.2179 20.2127C20.7166 19.7141 20.9978 19.0386 21 18.3335V5.66092C20.9978 4.95587 20.7166 4.28033 20.2179 3.78179C19.7192 3.28324 19.0434 3.00219 18.3381 3" fill={color}/>
    </svg>
  );
};

export default Paypay;
