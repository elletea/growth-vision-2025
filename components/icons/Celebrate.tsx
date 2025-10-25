import React from 'react';

export interface CelebrateProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Celebrate: React.FC<CelebrateProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.0186 3.12483C15.3283 2.95459 15.7045 2.96056 16.0088 3.14046C16.313 3.32044 16.5 3.64735 16.5 4.00081V20.0008C16.4999 20.3542 16.313 20.6813 16.0088 20.8612C15.7046 21.0409 15.3282 21.0469 15.0186 20.8768L5.01855 15.3768C4.69913 15.2011 4.50015 14.8653 4.5 14.5008V9.50081C4.5 9.13619 4.69911 8.80061 5.01855 8.62483L15.0186 3.12483ZM6.5 10.0907V13.91L14.5 18.3094V5.69124L6.5 10.0907Z" fill={color}/>
  <path d="M22.6406 17.2323L21.3594 18.7694L18.3594 16.2694L19.6406 14.7323L22.6406 17.2323Z" fill={color}/>
  <path d="M3 15.0008H1V9.00081H3V15.0008Z" fill={color}/>
  <path d="M24 13.0008H20V11.0008H24V13.0008Z" fill={color}/>
  <path d="M22.6406 6.76937L19.6406 9.26937L18.3594 7.73226L21.3594 5.23226L22.6406 6.76937Z" fill={color}/>
    </svg>
  );
};

export default Celebrate;
