import React from 'react';

export interface BackspaceProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Backspace: React.FC<BackspaceProps> = ({
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
      <path d="M18.2072 9.70654L15.9142 11.9995L18.2072 14.2925L16.7931 15.7065L14.5002 13.4136L12.2072 15.7065L10.7931 14.2925L13.0861 11.9995L10.7931 9.70654L12.2072 8.29248L14.5002 10.5854L16.7931 8.29248L18.2072 9.70654Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21.0002 3.99951C21.5522 3.99968 22 4.4475 22.0002 4.99951V18.9995C22.0002 19.5517 21.5523 19.9993 21.0002 19.9995H9.00015C8.73494 19.9995 8.48066 19.8941 8.29312 19.7065L1.29312 12.7065C0.902627 12.316 0.902608 11.683 1.29312 11.2925L8.29312 4.29248L8.36637 4.22607C8.54426 4.08043 8.76822 3.99951 9.00015 3.99951H21.0002ZM3.41422 11.9995L9.41422 17.9995H20.0002V5.99951H9.41422L3.41422 11.9995Z" fill={color}/>
    </svg>
  );
};

export default Backspace;
