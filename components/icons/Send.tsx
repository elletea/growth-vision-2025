import React from 'react';

export interface SendProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Send: React.FC<SendProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M19.7129 3.04218C20.0652 2.9366 20.447 3.0331 20.7071 3.29315C20.9671 3.55321 21.0636 3.93501 20.958 4.28729L15.5576 22.2873C15.4355 22.6946 15.0693 22.9803 14.6446 22.9992C14.2198 23.0181 13.8298 22.7661 13.6719 22.3713L10.2305 13.7687L1.62893 10.3283C1.23415 10.1704 0.982071 9.78042 1.001 9.35565C1.01994 8.93089 1.30566 8.56474 1.71291 8.44257L19.7129 3.04218ZM5.02932 9.53436L10.7588 11.8264L12.793 9.79315L14.2071 11.2072L12.1729 13.2404L14.4649 18.9699L18.5078 5.49139L5.02932 9.53436Z" fill={color}/>
    </svg>
  );
};

export default Send;
