import React from 'react';

export interface ScaleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Scale: React.FC<ScaleProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M19.8467 2.01166C20.2938 1.94194 20.7376 2.18351 20.9189 2.60638L23.7891 9.30267C24.0161 9.83309 23.9386 10.5363 23.4072 10.9882C22.4593 11.7943 21.2012 12.1611 20 12.1611C18.7988 12.161 17.5407 11.7943 16.5928 10.9882C16.0613 10.5362 15.9836 9.83213 16.2109 9.3017L18.2871 4.45795L13 5.77923V18.9999H16V20.9999H7.99999V18.9999H11V6.27923L5.35741 7.69037L7.7871 13.3007C8.01621 13.8299 7.93978 14.5245 7.42479 14.9785C5.55243 16.6283 2.44756 16.6284 0.575183 14.9785C0.0603043 14.5245 -0.0162151 13.8298 0.212879 13.3007L3.01464 6.82709C3.08104 6.45019 3.36257 6.12905 3.7578 6.03021L19.7578 2.03021L19.8467 2.01166ZM2.21288 13.7128C3.24575 14.3804 4.75301 14.3801 5.78612 13.7128L3.99999 9.58783L2.21288 13.7128ZM18.2178 9.69623C18.7075 9.99135 19.3344 10.1611 20 10.1611C20.6653 10.1611 21.2916 9.9911 21.7812 9.69623L20 5.53802L18.2178 9.69623Z" fill={color}/>
    </svg>
  );
};

export default Scale;
