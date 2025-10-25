import React from 'react';

export interface StarProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Star: React.FC<StarProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9881 1.89137C11.3596 1.00089 12.6401 1.0009 13.0116 1.89137L13.0458 1.98317L15.1961 8.60035H22.1542C23.2194 8.60073 23.6623 9.96427 22.8006 10.5906L17.1708 14.6795L19.3211 21.2976C19.6501 22.3109 18.4907 23.1533 17.6288 22.5271L11.9999 18.4373L6.37095 22.5271C5.50901 23.153 4.34981 22.3107 4.67857 21.2976L6.82798 14.6795L1.19907 10.5906C0.337529 9.96428 0.780564 8.60092 1.84556 8.60035H8.80357L10.954 1.98317L10.9881 1.89137ZM10.5038 9.84059C10.3565 10.2936 9.93419 10.6002 9.45786 10.6004H4.61607L8.53306 13.4461C8.91859 13.7262 9.07973 14.2233 8.93247 14.6765L7.4354 19.281L11.3534 16.4353L11.5038 16.3435C11.8153 16.1859 12.1844 16.1859 12.4959 16.3435L12.6463 16.4353L16.5633 19.281L15.0672 14.6765C14.92 14.2234 15.0813 13.7262 15.4667 13.4461L19.3836 10.6004H14.5418C14.0656 10.6001 13.6432 10.2936 13.4959 9.84059L11.9999 5.23414L10.5038 9.84059Z" fill={color}/>
    </svg>
  );
};

export default Star;
