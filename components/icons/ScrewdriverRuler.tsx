import React from 'react';

export interface ScrewdriverRulerProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ScrewdriverRuler: React.FC<ScrewdriverRulerProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.11898 2.22413C6.51175 1.90378 7.09075 1.92637 7.45687 2.29249L14.2069 9.04249C14.5972 9.43303 14.5973 10.0661 14.2069 10.4566L13.0389 11.6245L18.7498 17.3355L19.4998 16.5855L22.4139 19.4995L19.4998 22.4136L16.5858 19.4995L17.3358 18.7495L11.6248 13.0386L10.4569 14.2066C10.0664 14.5969 9.43329 14.5969 9.04281 14.2066L2.29281 7.45655C1.90234 7.06608 1.90245 6.43303 2.29281 6.04249L6.04281 2.29249L6.11898 2.22413ZM4.4139 6.74952L9.74984 12.0855L12.0858 9.74952L6.74984 4.41358L4.4139 6.74952Z" fill={color}/>
    </svg>
  );
};

export default ScrewdriverRuler;
