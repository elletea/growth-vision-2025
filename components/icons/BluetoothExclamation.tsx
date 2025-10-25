import React from 'react';

export interface BluetoothExclamationProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BluetoothExclamation: React.FC<BluetoothExclamationProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13 11.3213L18.5693 15.1777C18.8261 15.3555 18.985 15.6431 18.999 15.9551C19.0129 16.2671 18.8806 16.5685 18.6406 16.7686L12.6406 21.7686C12.3426 22.0169 11.9275 22.0698 11.5762 21.9053C11.2248 21.7407 11 21.388 11 21V14.0625L5.56934 17.8223L4.43066 16.1777L10.4648 12L4.43066 7.82227L5.56934 6.17773L11 9.93652V3H13V11.3213ZM13 18.8643L16.3486 16.0732L13 13.7549V18.8643Z" fill={color}/>
  <path d="M17.5 1V6H15.5V1H17.5Z" fill={color}/>
  <path d="M16.5 11C17.3284 11 18 10.3284 18 9.5C18 8.67157 17.3284 8 16.5 8C15.6716 8 15 8.67157 15 9.5C15 10.3284 15.6716 11 16.5 11Z" fill={color}/>
    </svg>
  );
};

export default BluetoothExclamation;
