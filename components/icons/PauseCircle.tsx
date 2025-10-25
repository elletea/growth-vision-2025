import React from 'react';

export interface PauseCircleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PauseCircle: React.FC<PauseCircleProps> = ({
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
      <path d="M10.5001 15.5001H8.50011V8.50011H10.5001V15.5001Z" fill={color}/>
  <path d="M15.5001 15.5001H13.5001V8.50011H15.5001V15.5001Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M4.92882 4.92882C8.83399 1.02365 15.1661 1.0238 19.0714 4.92882C22.9766 8.83406 22.9766 15.1662 19.0714 19.0714C15.1662 22.9766 8.83406 22.9766 4.92882 19.0714C1.0238 15.1661 1.02365 8.83399 4.92882 4.92882ZM17.6573 6.34288C14.5331 3.21891 9.467 3.21876 6.34288 6.34288C3.21876 9.467 3.21891 14.5331 6.34288 17.6573C9.46708 20.7815 14.5331 20.7815 17.6573 17.6573C20.7815 14.5331 20.7815 9.46708 17.6573 6.34288Z" fill={color}/>
    </svg>
  );
};

export default PauseCircle;
