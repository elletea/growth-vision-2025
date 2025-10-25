import React from 'react';

export interface ClockProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Clock: React.FC<ClockProps> = ({
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
      <path d="M13.0002 12.0003H15.5002V14.0003H12.0002C11.4479 14.0003 11.0002 13.5526 11.0002 13.0003V8.50034H13.0002V12.0003Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M4.92893 4.92905C8.83417 1.02381 15.1663 1.02381 19.0715 4.92905C22.9768 8.8343 22.9768 15.1664 19.0715 19.0716C15.1663 22.9769 8.83418 22.9769 4.92893 19.0716C1.02369 15.1664 1.02369 8.8343 4.92893 4.92905ZM17.6574 6.34312C14.5333 3.21892 9.46719 3.21892 6.34299 6.34312C3.2188 9.46731 3.2188 14.5334 6.34299 17.6576C9.46719 20.7818 14.5333 20.7818 17.6574 17.6576C20.7816 14.5334 20.7816 9.46731 17.6574 6.34312Z" fill={color}/>
    </svg>
  );
};

export default Clock;
