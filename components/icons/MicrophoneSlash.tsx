import React from 'react';

export interface MicrophoneSlashProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MicrophoneSlash: React.FC<MicrophoneSlashProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C13.933 2 15.5 3.567 15.5 5.5V6.08594L18.5859 3L20 4.41406L15.5 8.91406V11.5C15.5 13.433 13.933 15 12 15C11.2668 15 10.5867 14.774 10.0244 14.3887L8.5957 15.8174C9.53232 16.5569 10.714 16.9999 12 17C15.0374 16.9999 17.5 14.5374 17.5 11.5V11H19.5V11.5C19.5 15.3029 16.6692 18.4427 13 18.9316V22H11V18.9316C9.55366 18.7388 8.23856 18.1331 7.1748 17.2383L4.70703 19.707L3.29297 18.293L5.82715 15.7578C4.99087 14.5485 4.50005 13.082 4.5 11.5V11H6.5V11.5C6.50004 12.5276 6.7829 13.4887 7.27344 14.3115L8.75977 12.8252C8.61397 12.469 8.5253 12.0833 8.50488 11.6797L8.5 11.5V5.5C8.5 3.567 10.067 2 12 2ZM11.501 12.9121C11.6573 12.9674 11.8247 13 12 13C12.8284 13 13.5 12.3284 13.5 11.5V10.9141L11.501 12.9121ZM12 4C11.1716 4 10.5 4.67157 10.5 5.5V11.0859L13.5 8.08594V5.5C13.5 4.67157 12.8284 4 12 4Z" fill={color}/>
    </svg>
  );
};

export default MicrophoneSlash;
