import React from 'react';

export interface EnvelopeArrowRightProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const EnvelopeArrowRight: React.FC<EnvelopeArrowRightProps> = ({
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
      <path d="M23.207 17.793C23.3946 17.9805 23.5 18.2348 23.5 18.5C23.5 18.7321 23.4193 18.9558 23.2734 19.1338L23.207 19.207L18.707 23.707L17.293 22.293L20.0859 19.5H10V17.5H20.0859L17.293 14.707L18.707 13.293L23.207 17.793Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21 4.5C21.5523 4.5 22 4.94772 22 5.5V12H20V8.04395L12.6143 13.7891C12.2531 14.0699 11.7469 14.0699 11.3857 13.7891L4 8.04395V17.5H8V19.5H3C2.44772 19.5 2 19.0523 2 18.5V5.5C2 4.94772 2.44772 4.5 3 4.5H21ZM12 11.7324L18.7285 6.5H5.27148L12 11.7324Z" fill={color}/>
    </svg>
  );
};

export default EnvelopeArrowRight;
