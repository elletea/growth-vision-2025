import React from 'react';

export interface HumanArrowRightProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HumanArrowRight: React.FC<HumanArrowRightProps> = ({
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
      <path d="M23.707 16.793C23.8946 16.9805 24 17.2348 24 17.5C24 17.7321 23.9193 17.9558 23.7734 18.1338L23.707 18.207L19.207 22.707L17.793 21.293L20.5859 18.5H13V16.5H20.5859L17.793 13.707L19.207 12.293L23.707 16.793Z" fill={color}/>
  <path d="M12 12C13.346 12 14.6345 12.2115 15.8125 12.5986L15.1875 14.499C14.2138 14.1791 13.1367 14 12 14C7.84138 14 4.74385 16.3079 4.11816 19H11V21H3C2.44772 21 2 20.5523 2 20C2 15.3624 6.72559 12 12 12Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 2.5C14.2091 2.5 16 4.29086 16 6.5C16 8.70914 14.2091 10.5 12 10.5C9.79086 10.5 8 8.70914 8 6.5C8 4.29086 9.79086 2.5 12 2.5ZM12 4.5C10.8954 4.5 10 5.39543 10 6.5C10 7.60457 10.8954 8.5 12 8.5C13.1046 8.5 14 7.60457 14 6.5C14 5.39543 13.1046 4.5 12 4.5Z" fill={color}/>
    </svg>
  );
};

export default HumanArrowRight;
