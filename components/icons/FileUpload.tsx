import React from 'react';

export interface FileUploadProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FileUpload: React.FC<FileUploadProps> = ({
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
      <path d="M5 19H19V16H21V20C20.9999 20.5522 20.5522 21 20 21H4C3.44775 21 3.00006 20.5522 3 20V16H5V19Z" fill={color}/>
  <path d="M12 3C12.2652 3 12.5195 3.10544 12.707 3.29297L17.207 7.79297L15.793 9.20703L13 6.41406V16.5H11V6.41406L8.20703 9.20703L6.79297 7.79297L11.293 3.29297L11.3662 3.22656C11.5442 3.08073 11.7679 3 12 3Z" fill={color}/>
    </svg>
  );
};

export default FileUpload;
