import React from 'react';

export interface Circle1Props {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Circle1: React.FC<Circle1Props> = ({
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
      <path d="M13.4842 16.1521H11.4921V10.5124H9.49987V9.01244L10.2206 8.95189C11.3602 8.86782 11.8398 8.47161 11.9598 7.49974H13.4842V16.1521Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M4.92858 4.92846C8.83375 1.02329 15.1659 1.02343 19.0712 4.92846C22.9764 8.8337 22.9764 15.1658 19.0712 19.071C15.1659 22.9763 8.83382 22.9763 4.92858 19.071C1.02356 15.1658 1.02341 8.83362 4.92858 4.92846ZM17.6571 6.34252C14.5329 3.21854 9.46676 3.2184 6.34264 6.34252C3.21852 9.46664 3.21867 14.5328 6.34264 17.657C9.46683 20.7812 14.5329 20.7812 17.6571 17.657C20.7813 14.5328 20.7813 9.46671 17.6571 6.34252Z" fill={color}/>
    </svg>
  );
};

export default Circle1;
