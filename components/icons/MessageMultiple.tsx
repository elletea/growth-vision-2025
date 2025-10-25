import React from 'react';

export interface MessageMultipleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MessageMultiple: React.FC<MessageMultipleProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14 2C16.2091 2 18 3.79086 18 6V7.5H19C21.2091 7.5 23 9.29086 23 11.5V16C23 18.2091 21.2091 20 19 20H17V18H19C20.1046 18 21 17.1046 21 16V11.5C21 10.3954 20.1046 9.5 19 9.5H18V10.5C18 12.7091 16.2091 14.5 14 14.5H8V16C8 17.1046 8.89544 18 10 18H12.5859C13.1163 18 13.625 18.2109 14 18.5859L17.207 21.793L15.793 23.207L12.5859 20H10C7.79087 20 6 18.2091 6 16V14.5H5C2.79086 14.5 1 12.7091 1 10.5V6C1 3.79086 2.79086 2 5 2H14ZM5 4C3.89543 4 3 4.89543 3 6V10.5C3 11.6046 3.89543 12.5 5 12.5H6V11.5C6 9.29086 7.79086 7.5 10 7.5H16V6C16 4.89543 15.1046 4 14 4H5ZM10 9.5C8.89543 9.5 8 10.3954 8 11.5V12.5H14C15.1046 12.5 16 11.6046 16 10.5V9.5H10Z" fill={color}/>
    </svg>
  );
};

export default MessageMultiple;
