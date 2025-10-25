import React from 'react';

export interface LoudSpeakerProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LoudSpeaker: React.FC<LoudSpeakerProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M20.7656 4.02903C21.0635 3.95713 21.3783 4.02501 21.6191 4.21458C21.8599 4.40419 22 4.69427 22 5.00071V18.5007C21.9999 18.8096 21.8573 19.1014 21.6133 19.2908C21.369 19.48 21.0502 19.5464 20.751 19.4695L12.5 17.3445V17.4753C12.4998 19.4097 10.6955 20.8392 8.8125 20.3962L8.5625 20.3367C7.2077 20.0177 6.25014 18.8086 6.25 17.4167V15.5847L2.72363 14.57C2.2953 14.4468 2.00012 14.0548 2 13.6091V9.34837C2.00008 8.88662 2.31678 8.48513 2.76562 8.37669L20.7656 4.02903ZM8.25 17.4167C8.25014 17.8806 8.56987 18.2841 9.02148 18.3904L9.27148 18.449C9.89893 18.5963 10.4998 18.1199 10.5 17.4753V16.8074L8.25 16.1609V17.4167ZM4 10.1355V12.8562L11.749 15.0866L20 17.2097V6.27024L4 10.1355Z" fill={color}/>
    </svg>
  );
};

export default LoudSpeaker;
