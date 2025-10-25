import React from 'react';

export interface HumanCheckProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HumanCheck: React.FC<HumanCheckProps> = ({
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
      <path d="M23.7588 14.6504L17.7588 21.6504C17.5688 21.872 17.2919 22 17 22C16.7081 22 16.4312 21.872 16.2412 21.6504L13.2412 18.1504L14.7588 16.8496L17 19.4639L22.2412 13.3496L23.7588 14.6504Z" fill={color}/>
  <path d="M12 12C14.6539 12 17.0945 12.825 18.9053 14.2051L17.6924 15.7949C16.2566 14.7008 14.2504 14 12 14C7.84138 14 4.74385 16.3079 4.11816 19H12V21H3C2.44772 21 2 20.5523 2 20C2 15.3624 6.72559 12 12 12Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 2.5C14.2091 2.5 16 4.29086 16 6.5C16 8.70914 14.2091 10.5 12 10.5C9.79086 10.5 8 8.70914 8 6.5C8 4.29086 9.79086 2.5 12 2.5ZM12 4.5C10.8954 4.5 10 5.39543 10 6.5C10 7.60457 10.8954 8.5 12 8.5C13.1046 8.5 14 7.60457 14 6.5C14 5.39543 13.1046 4.5 12 4.5Z" fill={color}/>
    </svg>
  );
};

export default HumanCheck;
