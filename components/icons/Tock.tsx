import React from 'react';

export interface TockProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Tock: React.FC<TockProps> = ({
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
      <path d="M11.9999 17.1134C9.21468 17.1134 6.95875 14.8021 6.95875 11.9484C6.95875 9.54667 8.57193 7.5194 10.7396 6.95126V3.01296C6.46723 3.63275 3.17786 7.40319 3.17786 11.9613C3.17786 16.9584 7.13519 21 11.9999 21C13.9786 21 15.806 20.3286 17.2806 19.2052L14.5583 16.4161C13.8022 16.8551 12.9326 17.1134 11.9999 17.1134Z" fill={color}/>
  <path d="M17.0413 11.9483C17.0413 12.9038 16.7892 13.7948 16.3481 14.5696L19.0703 17.3587C20.1794 15.8479 20.8222 13.9756 20.8222 11.9483C20.8222 7.39024 17.5328 3.63271 13.2604 3V6.93831C15.4281 7.51936 17.0413 9.54662 17.0413 11.9483Z" fill={color}/>
    </svg>
  );
};

export default Tock;
