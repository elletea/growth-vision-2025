import React from 'react';

export interface SyringeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Syringe: React.FC<SyringeProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.20697 2.20703L5.414 4L7.99994 6.58496L11.7929 2.79297L13.207 4.20703L11.8886 5.52441L19.3857 13.0205L19.4609 13.1055C19.6247 13.3116 19.7009 13.5761 19.6708 13.8408L19.2197 17.8047L22.7079 21.293L21.2929 22.707L17.8066 19.2197L13.8408 19.6719C13.5382 19.7062 13.2368 19.5999 13.0214 19.3848L5.52533 11.8887L4.20697 13.207L2.79291 11.793L6.58588 7.99902L3.99994 5.41406L2.20697 7.20703L0.792908 5.79297L5.79291 0.792969L7.20697 2.20703ZM6.96478 10.5L11.0253 14.5605L13.2929 12.293L14.707 13.707L12.4394 15.9746L14.0947 17.6299L17.2675 17.2666L17.6298 14.0938L10.4999 6.96387L6.96478 10.5Z" fill={color}/>
    </svg>
  );
};

export default Syringe;
