import React from 'react';

export interface EllipsisVerticalProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const EllipsisVertical: React.FC<EllipsisVerticalProps> = ({
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
      <path d="M10 5C10 3.896 10.896 3 12 3C13.104 3 14 3.896 14 5C14 6.104 13.104 7 12 7C10.896 7 10 6.104 10 5Z" fill={color}/>
  <path d="M10 12C10 10.896 10.896 10 12 10C13.104 10 14 10.896 14 12C14 13.104 13.104 14 12 14C10.896 14 10 13.104 10 12Z" fill={color}/>
  <path d="M12 17C10.896 17 10 17.896 10 19C10 20.104 10.896 21 12 21C13.104 21 14 20.104 14 19C14 17.896 13.104 17 12 17Z" fill={color}/>
    </svg>
  );
};

export default EllipsisVertical;
