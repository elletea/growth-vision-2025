import React from 'react';

export interface TSlashProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TSlash: React.FC<TSlashProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M22.7071 2.20703L13 11.9141V19H15V21H9.00002V19H11V13.9141L3.91406 21L2.5 19.5859L11 11.0859V5H5.00002V7H3.00002V4C3.00002 3.44772 3.44774 3 4.00002 3H19.086L21.293 0.792969L22.7071 2.20703ZM13 5V9.08594L17.086 5H13Z" fill={color}/>
    </svg>
  );
};

export default TSlash;
