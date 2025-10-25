import React from 'react';

export interface HoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Hold: React.FC<HoldProps> = ({
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
      <path d="M16 13H8V11H16V13Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M15.9561 2.00488C16.185 2.02763 16.4004 2.12889 16.5645 2.29297L21.707 7.43555C21.8945 7.62302 21.9999 7.87746 22 8.14258V15.8574C21.9999 16.1225 21.8945 16.377 21.707 16.5645L16.5645 21.707C16.377 21.8945 16.1225 21.9999 15.8574 22H8.14258C7.87746 21.9999 7.62302 21.8945 7.43555 21.707L2.29297 16.5645C2.1055 16.377 2.00007 16.1225 2 15.8574V8.14258C2.00007 7.87746 2.1055 7.62302 2.29297 7.43555L7.43555 2.29297C7.62302 2.1055 7.87746 2.00007 8.14258 2H15.8574L15.9561 2.00488ZM4 8.55664V15.4434L8.55664 20H15.4434L20 15.4434V8.55664L15.4434 4H8.55664L4 8.55664Z" fill={color}/>
    </svg>
  );
};

export default Hold;
