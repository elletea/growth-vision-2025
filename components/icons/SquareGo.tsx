import React from 'react';

export interface SquareGoProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareGo: React.FC<SquareGoProps> = ({
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
      <path d="M20.6679 2H12C6.47775 2 2 6.47775 2 12C2 17.5223 6.47775 22 12 22C17.5223 22 22 17.5223 22 12V3.33212C22 2.59643 21.4036 2 20.6679 2ZM19.2787 11.1614C19.2787 11.6458 18.8882 12.0364 18.4038 12.0364H12.8391C12.3547 12.0364 11.9642 11.6458 11.9642 11.1614V5.59675C11.9642 5.11235 12.3547 4.72179 12.8391 4.72179H18.4038C18.8882 4.72179 19.2787 5.11235 19.2787 5.59675V11.1614Z" fill={color}/>
    </svg>
  );
};

export default SquareGo;
