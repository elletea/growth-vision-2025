import React from 'react';

export interface QuestionMarkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QuestionMark: React.FC<QuestionMarkProps> = ({
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
      <path d="M12.0002 18C12.8285 18.0002 13.5002 18.6717 13.5002 19.5C13.5002 20.3283 12.8285 20.9998 12.0002 21C11.1718 21 10.5002 20.3284 10.5002 19.5C10.5003 18.6716 11.1718 18 12.0002 18Z" fill={color}/>
  <path d="M12.0002 2C15.4494 2.00014 18.0002 4.6131 18.0002 7.9209C18.0001 9.5907 17.3202 10.9668 16.2024 11.9336C15.3257 12.6917 14.2107 13.1722 13.0002 13.3857V16H11.0002V11.5605L11.9377 11.502C13.1644 11.4254 14.1916 11.0281 14.8938 10.4209C15.5769 9.83014 16.0001 9.0042 16.0002 7.9209C16.0002 5.72138 14.3486 4.00014 12.0002 4C9.60514 4 7.92933 5.77058 7.48267 8.1084L5.51782 7.73242C6.09634 4.70527 8.40895 2 12.0002 2Z" fill={color}/>
    </svg>
  );
};

export default QuestionMark;
