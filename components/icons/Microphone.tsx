import React from 'react';

export interface MicrophoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Microphone: React.FC<MicrophoneProps> = ({
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
      <path d="M6.5 11.5C6.50012 14.5375 8.96248 16.9999 12 17C15.0374 16.9999 17.5 14.5374 17.5 11.5V11H19.5V11.5C19.5 15.3029 16.6692 18.4427 13 18.9316V22H11V18.9316C7.33084 18.4425 4.50011 15.3029 4.5 11.5V11H6.5V11.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C13.933 2 15.5 3.567 15.5 5.5V11.5C15.5 13.433 13.933 15 12 15C10.1273 15 8.59842 13.5292 8.50488 11.6797L8.5 11.5V5.5C8.5 3.567 10.067 2 12 2ZM12 4C11.1716 4 10.5 4.67157 10.5 5.5V11.5L10.5078 11.6533C10.5846 12.4097 11.2233 13 12 13C12.8284 13 13.5 12.3284 13.5 11.5V5.5C13.5 4.67157 12.8284 4 12 4Z" fill={color}/>
    </svg>
  );
};

export default Microphone;
