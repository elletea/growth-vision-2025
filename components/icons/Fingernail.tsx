import React from 'react';

export interface FingernailProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Fingernail: React.FC<FingernailProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5.67383 4.69629L5.67285 4.69727L21.3828 6.94043C22.1359 7.04801 22.7234 7.55124 22.9482 8.20898C23.1803 8.88806 23.001 9.67523 22.3652 10.1953C21.4921 10.9094 20.4411 11.579 19.3076 12.168C18.6282 14.5017 17.2996 16.438 15.3213 17.8027C13.2294 19.2457 10.4862 20 7.17676 20H1V18H7.17676C10.1904 18 12.5078 17.3136 14.1855 16.1562C15.2849 15.3978 16.1395 14.4142 16.7471 13.2285C14.8111 13.8348 12.7032 14.1061 10.7969 13.9941C8.23878 13.8437 5.606 12.9655 4.62695 10.7705C3.85488 9.03916 3.98328 7.49551 4.21582 6.49805L0.850586 5.98828L1.14941 4.01172L5.67383 4.69629ZM6.20801 6.79297C6.00717 7.53131 5.87077 8.64818 6.4541 9.95605C6.94646 11.0598 8.51238 11.8569 10.915 11.998C13.2298 12.134 15.9178 11.6196 18.0166 10.583C19.0648 10.0653 20.0186 9.48026 20.8047 8.87793L6.20801 6.79297Z" fill={color}/>
    </svg>
  );
};

export default Fingernail;
