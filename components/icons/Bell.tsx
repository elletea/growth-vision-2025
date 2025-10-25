import React from 'react';

export interface BellProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Bell: React.FC<BellProps> = ({
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
      <path d="M15.707 21.207C14.7271 22.187 13.3235 22.625 12 22.625C10.6765 22.625 9.27294 22.187 8.29296 21.207L9.70703 19.793C10.2271 20.313 11.0735 20.625 12 20.625C12.9265 20.625 13.7729 20.313 14.293 19.793L15.707 21.207Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C15.0235 2.00012 17.6373 4.11077 18.2744 7.06641L20.4775 17.2891C20.5412 17.5844 20.468 17.8928 20.2783 18.1279C20.0885 18.3631 19.8022 18.5 19.5 18.5H4.49999C4.1978 18.5 3.91152 18.363 3.72167 18.1279C3.53202 17.8929 3.45883 17.5843 3.52246 17.2891L5.72558 7.06641C6.36254 4.11055 8.97628 2 12 2ZM12 4C9.91859 4 8.11925 5.45267 7.68066 7.4873L5.73828 16.5H18.2617L16.3193 7.4873C15.8808 5.45269 14.0813 4.00012 12 4Z" fill={color}/>
    </svg>
  );
};

export default Bell;
