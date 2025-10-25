import React from 'react';

export interface HumanPlusProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HumanPlus: React.FC<HumanPlusProps> = ({
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
      <path d="M19 17H23V19H19V23H17V19H13V17H17V13H19V17Z" fill={color}/>
  <path d="M12 12C13.1406 12 14.2393 12.1527 15.2646 12.4346L14.7354 14.3623C13.8841 14.1283 12.9632 14 12 14C7.84138 14 4.74385 16.3079 4.11816 19H11V21H3C2.44772 21 2 20.5523 2 20C2 15.3624 6.72559 12 12 12Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 2.5C14.2091 2.5 16 4.29086 16 6.5C16 8.70914 14.2091 10.5 12 10.5C9.79086 10.5 8 8.70914 8 6.5C8 4.29086 9.79086 2.5 12 2.5ZM12 4.5C10.8954 4.5 10 5.39543 10 6.5C10 7.60457 10.8954 8.5 12 8.5C13.1046 8.5 14 7.60457 14 6.5C14 5.39543 13.1046 4.5 12 4.5Z" fill={color}/>
    </svg>
  );
};

export default HumanPlus;
