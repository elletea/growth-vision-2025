import React from 'react';

export interface AttachProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Attach: React.FC<AttachProps> = ({
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
      <path d="M9.89521 3.94907C12.4353 1.3502 16.564 1.35034 19.1042 3.94907C21.6317 6.53524 21.6318 10.7194 19.1042 13.3055L11.9743 20.6004C10.1501 22.4666 7.1822 22.4667 5.3581 20.6004C3.54667 18.7468 3.54663 15.7499 5.3581 13.8963L12.488 6.60141C13.5961 5.46763 15.4032 5.46785 16.5114 6.60141C17.6071 7.72247 17.607 9.53107 16.5114 10.6522L9.38154 17.9471L8.66669 17.2479L7.95087 16.5497L15.0808 9.25473C15.4169 8.9108 15.4169 8.34378 15.0808 7.99985C14.7571 7.66896 14.2422 7.66879 13.9186 7.99985L6.78876 15.2948C5.73698 16.3712 5.73701 18.1256 6.78876 19.202C7.8283 20.2656 9.50403 20.2655 10.5436 19.202L17.6735 11.9071C19.4416 10.0981 19.4416 7.15551 17.6735 5.34653C15.918 3.55093 13.0813 3.55071 11.3259 5.34653L10.3532 6.34165L8.92353 4.94419L9.89521 3.94907Z" fill={color}/>
    </svg>
  );
};

export default Attach;
