import React from 'react';

export interface AudioProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Audio: React.FC<AudioProps> = ({
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
      <path d="M18.7598 4C23.0798 8.41 23.0798 15.59 18.7598 20L17.2803 18.5498C20.8101 14.9398 20.8102 9.06991 17.2803 5.45996L18.7598 4Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M11.2461 5.32715C12.0218 4.91762 12.9999 5.47319 13 6.39258V17.6074C12.9999 18.5881 11.8869 19.1549 11.0938 18.5781L6.17578 15H3.7002C3.03745 15 2.5 14.4625 2.5 13.7998V10.2002C2.5 9.53745 3.03745 9 3.7002 9H6.17578L11.0938 5.42188L11.2461 5.32715ZM7.14062 10.7705C6.93554 10.9196 6.68814 11 6.43457 11H4.5V13H6.43457C6.68814 13 6.93554 13.0804 7.14062 13.2295L11 16.0352V7.96387L7.14062 10.7705Z" fill={color}/>
  <path d="M15.6006 7.24023C18.1703 9.86021 18.1704 14.1406 15.6006 16.7705L14.1201 15.3203C15.9101 13.4903 15.91 10.5204 14.1201 8.69043L15.6006 7.24023Z" fill={color}/>
    </svg>
  );
};

export default Audio;
