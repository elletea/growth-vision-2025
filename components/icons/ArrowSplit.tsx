import React from 'react';

export interface ArrowSplitProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowSplit: React.FC<ArrowSplitProps> = ({
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
      <path d="M23.207 4.79297C23.3946 4.9805 23.5 5.23479 23.5 5.5C23.5 5.76521 23.3946 6.0195 23.207 6.20703L18.707 10.707L17.293 9.29297L20.0859 6.5H9V17.5H15.0859L12.293 14.707L13.707 13.293L18.207 17.793C18.3946 17.9805 18.5 18.2348 18.5 18.5C18.5 18.7652 18.3946 19.0195 18.207 19.207L13.707 23.707L12.293 22.293L15.0859 19.5H8C7.44772 19.5 7 19.0523 7 18.5V13H0V11H7V5.5C7 4.94772 7.44772 4.5 8 4.5H20.0859L17.293 1.70703L18.707 0.292969L23.207 4.79297Z" fill={color}/>
    </svg>
  );
};

export default ArrowSplit;
