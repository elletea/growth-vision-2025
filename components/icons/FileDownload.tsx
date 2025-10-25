import React from 'react';

export interface FileDownloadProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FileDownload: React.FC<FileDownloadProps> = ({
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
  <path d="M13 3V13.0859L15.793 10.293L17.207 11.707L12.707 16.207C12.5195 16.3946 12.2652 16.5 12 16.5C11.7679 16.5 11.5442 16.4193 11.3662 16.2734L11.293 16.207L6.79297 11.707L8.20703 10.293L11 13.0859V3H13Z" fill={color}/>
    </svg>
  );
};

export default FileDownload;
