import React from 'react';

export interface UmbrellaProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Umbrella: React.FC<UmbrellaProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.001 2C17.5236 2.00026 22.001 6.47829 22.001 12.001C22.0008 12.3253 21.8429 12.63 21.5781 12.8174C21.3134 13.0045 20.9737 13.0521 20.668 12.9443C17.2841 11.7499 15.0203 11.6383 13.001 11.8711V19C13.001 20.657 11.6567 22 10 22C8.34342 21.9999 7 20.6569 7 19V18H9V19C9 19.552 9.44767 19.9999 10 20C10.5524 20 11.001 19.5521 11.001 19V12.1973C8.82427 12.628 6.41266 13.2306 2.93457 12.999C2.40941 12.964 2.00123 12.5272 2.00098 12.001C2.00098 6.47813 6.47813 2 12.001 2ZM12.001 4.00098C7.9066 4.00098 4.53158 7.07691 4.05859 11.0439C7.08039 11.1066 9.09634 10.4906 11.4531 10.0781C13.7978 9.66784 16.2629 9.52762 19.874 10.5869C19.2062 6.84345 15.9364 4.00121 12.001 4.00098Z" fill={color}/>
    </svg>
  );
};

export default Umbrella;
