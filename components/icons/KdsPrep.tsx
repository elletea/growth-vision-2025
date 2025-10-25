import React from 'react';

export interface KdsPrepProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const KdsPrep: React.FC<KdsPrepProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10 4C10.5523 4 11 4.44772 11 5V19C11 19.5523 10.5523 20 10 20H3C2.44776 20 2.00001 19.5522 2 19V5C2 4.44774 2.44775 4.00004 3 4H10ZM4 18H9V6H4V18Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21 4C21.5523 4 22 4.44772 22 5V14C22 14.5523 21.5523 15 21 15H14C13.4478 15 13 14.5523 13 14V5C13 4.44774 13.4478 4.00004 14 4H21ZM15 13H20V6H15V13Z" fill={color}/>
    </svg>
  );
};

export default KdsPrep;
