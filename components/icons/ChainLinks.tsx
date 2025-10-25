import React from 'react';

export interface ChainLinksProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ChainLinks: React.FC<ChainLinksProps> = ({
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
      <path d="M20.2753 11.9459C22.575 14.2458 22.5751 17.9751 20.2753 20.275C17.9754 22.5748 14.2461 22.5747 11.9462 20.275L9.87194 18.1998L11.286 16.7857L13.3602 18.8599C14.8791 20.3788 17.3413 20.3788 18.8602 18.8599C20.3791 17.341 20.3791 14.8788 18.8602 13.3599L16.786 11.2857L18.2001 9.87165L20.2753 11.9459Z" fill={color}/>
  <path d="M16.9706 15.5552L16.2626 16.2623L15.5555 16.9703L7.02916 8.44392L7.73717 7.73689L8.4442 7.02888L16.9706 15.5552Z" fill={color}/>
  <path d="M3.72448 3.72419C6.02426 1.42443 9.7536 1.42473 12.0536 3.72419L14.1278 5.79939L12.7137 7.21345L10.6395 5.13923C9.12061 3.62061 6.65832 3.62045 5.13952 5.13923C3.62071 6.65803 3.62089 9.12032 5.13952 10.6392L7.21373 12.7134L5.79967 14.1275L3.72448 12.0533C1.425 9.75331 1.42469 6.02398 3.72448 3.72419Z" fill={color}/>
    </svg>
  );
};

export default ChainLinks;
