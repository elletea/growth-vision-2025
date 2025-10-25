import React from 'react';

export interface ScanDocumentProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ScanDocument: React.FC<ScanDocumentProps> = ({
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
      <path d="M3.5 19H7.5V21H2.5L2.39746 20.9951C1.89333 20.9438 1.5 20.5177 1.5 20V15H3.5V19Z" fill={color}/>
  <path d="M22.5 20C22.5 20.5523 22.0523 21 21.5 21H16.5V19H20.5V15H22.5V20Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M11.7422 8.03418C13.6052 7.53738 15.8013 6.92822 18.4062 8.08594C18.7673 8.24643 18.9999 8.60491 19 9V15C18.9999 15.3384 18.8287 15.6545 18.5449 15.8389C18.2611 16.0232 17.903 16.0515 17.5938 15.9141C15.6988 15.0719 14.1447 15.4636 12.2578 15.9668C10.3948 16.4636 8.19867 17.0718 5.59375 15.9141C5.23273 15.7536 5.00009 15.3951 5 15V9L5.00781 8.875C5.04434 8.58524 5.20676 8.32361 5.45508 8.16211C5.73889 7.97767 6.09693 7.94849 6.40625 8.08594C8.30115 8.92809 9.85537 8.53733 11.7422 8.03418ZM17 9.6875C15.3643 9.15778 13.9442 9.51708 12.2578 9.9668C10.7399 10.3716 9.00103 10.8494 7 10.3867V14.3115C8.63578 14.8414 10.0557 14.4839 11.7422 14.0342C13.2601 13.6294 14.999 13.1507 17 13.6133V9.6875Z" fill={color}/>
  <path d="M7.5 5H3.5V9H1.5V4C1.5 3.73478 1.60543 3.4805 1.79297 3.29297C1.9805 3.10543 2.23479 3 2.5 3H7.5V5Z" fill={color}/>
  <path d="M21.5 3C22.0523 3 22.5 3.44772 22.5 4V9H20.5V5H16.5V3H21.5Z" fill={color}/>
    </svg>
  );
};

export default ScanDocument;
