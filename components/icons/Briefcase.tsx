import React from 'react';

export interface BriefcaseProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Briefcase: React.FC<BriefcaseProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5 3C15.6046 3 16.5 3.89543 16.5 5V7H20.5C21.6046 7 22.5 7.89543 22.5 9V19C22.5 20.1046 21.6046 21 20.5 21H3.5C2.39543 21 1.5 20.1046 1.5 19V9C1.5 7.89543 2.39543 7 3.5 7H7.5V5C7.5 3.89543 8.39543 3 9.5 3H14.5ZM3.5 19H20.5V9H3.5V19ZM9.5 7H14.5V5H9.5V7Z" fill={color}/>
    </svg>
  );
};

export default Briefcase;
