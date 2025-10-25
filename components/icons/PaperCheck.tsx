import React from 'react';

export interface PaperCheckProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PaperCheck: React.FC<PaperCheckProps> = ({
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
      <path d="M18 14.0004H16V8.00044H18V14.0004Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M11.7939 4.97798C14.8611 4.18424 18.3366 3.23235 21.9424 5.01216C22.2835 5.18064 22.4999 5.52815 22.5 5.90864V17.9086C22.4998 18.2541 22.3217 18.5758 22.0283 18.7583C21.7349 18.9405 21.3674 18.9579 21.0576 18.8051C18.2155 17.4022 15.4741 18.0918 12.2949 18.9145C9.21416 19.7118 5.71465 20.634 2.05273 18.8032C1.71411 18.6339 1.5002 18.2872 1.5 17.9086V5.90864C1.50005 5.5622 1.67996 5.24026 1.97461 5.05806C2.26936 4.87603 2.63739 4.8592 2.94727 5.01411C5.85119 6.46598 8.62845 5.79716 11.7939 4.97798ZM20.5 6.5561C17.8543 5.49338 15.2658 6.14569 12.2949 6.9145C9.6224 7.60611 6.63531 8.39014 3.5 7.39106V17.2651C6.20613 18.3796 8.82969 17.7451 11.7939 16.978C14.4501 16.2906 17.412 15.4858 20.5 16.4379V6.5561Z" fill={color}/>
    </svg>
  );
};

export default PaperCheck;
