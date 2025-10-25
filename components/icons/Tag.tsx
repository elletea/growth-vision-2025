import React from 'react';

export interface TagProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Tag: React.FC<TagProps> = ({
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
      <path d="M13.9999 7.87877C14.5857 7.29299 15.5352 7.29299 16.121 7.87877C16.7068 8.46456 16.7068 9.41408 16.121 9.99987C15.5352 10.5856 14.5857 10.5856 13.9999 9.99987C13.4142 9.41411 13.4142 8.46457 13.9999 7.87877Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12.1318 2.00866L20.1318 3.07116L20.2958 3.10729C20.6658 3.22168 20.9424 3.54408 20.9921 3.93834L21.9921 11.8749C22.0313 12.1856 21.9224 12.4969 21.6982 12.7157L11.9628 22.2157C11.571 22.5979 10.9446 22.594 10.5576 22.2069L1.7929 13.4423C1.40581 13.0552 1.4019 12.4288 1.78412 12.037L11.2841 2.30163C11.5045 2.07574 11.8189 1.96708 12.1318 2.00866ZM3.90521 12.7264L11.2724 20.0936L19.9452 11.6307L19.1035 4.95202L12.3652 4.05651L3.90521 12.7264Z" fill={color}/>
    </svg>
  );
};

export default Tag;
