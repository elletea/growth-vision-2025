import React from 'react';

export interface SquareTerminalProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareTerminal: React.FC<SquareTerminalProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M20.8857 7.57601C21.1837 7.45279 21.5241 7.48079 21.7979 7.65121C22.0714 7.82182 22.2459 8.11464 22.2666 8.43637L22.8633 17.8094C22.9732 19.5372 21.6013 20.9991 19.8701 20.9998H2.00098C1.44869 20.9998 1.00098 20.5521 1.00098 19.9998V16.4998C1.00125 16.096 1.24424 15.7309 1.61719 15.576L20.8857 7.57601ZM3.00098 17.1678V18.9998H19.8701C20.4467 18.9991 20.9038 18.512 20.8672 17.9364L20.3604 9.9598L3.00098 17.1678Z" fill={color}/>
  <path d="M7.91699 9.73812C8.69628 7.67147 11.0043 6.62724 13.0713 7.40609L12.3652 9.27816C11.3319 8.88891 10.1788 9.41106 9.78906 10.4442L7.91699 9.73812Z" fill={color}/>
  <path d="M4.17383 8.32894C5.73181 4.19482 10.3462 2.10538 14.4805 3.66293L13.7754 5.53402C10.675 4.36604 7.21462 5.93295 6.0459 9.03305L4.17383 8.32894Z" fill={color}/>
    </svg>
  );
};

export default SquareTerminal;
