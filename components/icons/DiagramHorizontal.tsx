import React from 'react';

export interface DiagramHorizontalProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DiagramHorizontal: React.FC<DiagramHorizontalProps> = ({
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
      <path d="M17.5 19.5C17.5003 18.3957 18.3956 17.5 19.5 17.5C20.6042 17.5003 21.4997 18.3958 21.5 19.5C21.5 20.6044 20.6043 21.4997 19.5 21.5C18.3954 21.5 17.5 20.6046 17.5 19.5Z" fill={color}/>
  <path d="M17.5 3.5C17.5003 2.39565 18.3956 1.5 19.5 1.5C20.6042 1.50026 21.4997 2.39582 21.5 3.5C21.5 4.60441 20.6043 5.49974 19.5 5.5C18.3954 5.5 17.5 4.60457 17.5 3.5Z" fill={color}/>
  <path d="M10 10.5V3.5C10.0003 2.94794 10.4479 2.5 11 2.5L16 2.5V4.5H12V18.501H16V20.501H11C10.4479 20.501 10.0003 20.053 10 19.501V12.5L7 12.5V10.5L10 10.5Z" fill={color}/>
  <path d="M1.5 11.5C1.50026 10.3957 2.39559 9.5 3.5 9.5C4.60418 9.50026 5.49974 10.3958 5.5 11.5C5.5 12.6044 4.60435 13.4997 3.5 13.5C2.39543 13.5 1.5 12.6046 1.5 11.5Z" fill={color}/>
    </svg>
  );
};

export default DiagramHorizontal;
