import React from 'react';

export interface Circle5Props {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Circle5: React.FC<Circle5Props> = ({
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
      <path d="M12.192 16.748C10.524 16.748 9.312 15.944 9 14.444L10.944 14.084C11.088 14.744 11.544 15.116 12.192 15.104C12.912 15.092 13.476 14.564 13.476 13.772C13.476 12.98 12.972 12.404 12.168 12.404C11.688 12.404 11.316 12.608 11.112 12.92L9.252 12.692L9.648 8H14.82V9.716H11.16L11.016 11.372C11.364 11.036 11.88 10.82 12.516 10.82C14.28 10.82 15.372 12.068 15.372 13.724C15.372 15.488 13.992 16.748 12.192 16.748Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M4.92858 4.92846C8.83375 1.02329 15.1659 1.02343 19.0712 4.92846C22.9764 8.8337 22.9764 15.1658 19.0712 19.071C15.1659 22.9763 8.83382 22.9763 4.92858 19.071C1.02356 15.1658 1.02341 8.83362 4.92858 4.92846ZM17.6571 6.34252C14.5329 3.21854 9.46676 3.2184 6.34264 6.34252C3.21852 9.46664 3.21867 14.5328 6.34264 17.657C9.46683 20.7812 14.5329 20.7812 17.6571 17.657C20.7813 14.5328 20.7813 9.46671 17.6571 6.34252Z" fill={color}/>
    </svg>
  );
};

export default Circle5;
