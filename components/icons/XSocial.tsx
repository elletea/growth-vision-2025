import React from 'react';

export interface XSocialProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const XSocial: React.FC<XSocialProps> = ({
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
      <path d="M17.1761 3.86475H19.9362L13.9061 10.7567L21 20.1351H15.4456L11.0951 14.4471L6.11723 20.1351H3.35544L9.80517 12.7634L3 3.86475H8.69545L12.6279 9.06374L17.1761 3.86475ZM16.2073 18.483H17.7368L7.86441 5.43004H6.2232L16.2073 18.483Z" fill={color}/>
    </svg>
  );
};

export default XSocial;
