import React from 'react';

export interface WithdrawProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Withdraw: React.FC<WithdrawProps> = ({
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
      <path d="M13 18.0859L15.793 15.2929L17.207 16.707L12.707 21.207C12.3165 21.5975 11.6835 21.5975 11.293 21.207L6.79297 16.707L8.20703 15.2929L11 18.0859V9.99994H13V18.0859Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21.5 5.49994C22.0523 5.49994 22.5 5.94765 22.5 6.49994V18.4999C22.5 18.7651 22.3945 19.0195 22.207 19.207C22.0195 19.3944 21.7652 19.4999 21.5 19.4999H18.75V17.4999H20.5V10.9677C18.6908 10.742 17.2579 9.30917 17.0322 7.49994H6.96777C6.74209 9.30917 5.30923 10.742 3.5 10.9677V17.4999H5.25V19.4999H2.5C1.94778 19.4999 1.5001 19.0521 1.5 18.4999V6.49994C1.5 6.23472 1.60543 5.98044 1.79297 5.79291C1.98051 5.60537 2.23478 5.49994 2.5 5.49994H21.5ZM3.5 8.93353C4.20222 8.75247 4.7536 8.20219 4.93457 7.49994H3.5V8.93353ZM19.0654 7.49994C19.2464 8.20219 19.7978 8.75247 20.5 8.93353V7.49994H19.0654Z" fill={color}/>
    </svg>
  );
};

export default Withdraw;
