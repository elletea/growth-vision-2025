import React from 'react';

export interface CheckmarkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Checkmark: React.FC<CheckmarkProps> = ({
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
      <path d="M16.2559 7.15527L9.75586 14.6553C9.56646 14.8737 9.29109 14.9993 9.00195 15C8.71292 15.0006 8.43741 14.8757 8.24707 14.6582L4.74707 10.6582L6.25293 9.3418L8.99609 12.4766L14.7441 5.84473L16.2559 7.15527Z" fill={color}/>
    </svg>
  );
};

export default Checkmark;
