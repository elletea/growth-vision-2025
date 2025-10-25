import React from 'react';

export interface LightningBoltProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LightningBolt: React.FC<LightningBoltProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.904 1.30626C14.2593 0.937133 14.8362 0.896323 15.24 1.21153C15.6437 1.52709 15.7437 2.0968 15.4714 2.53086L11.7644 8.43516L19.3269 11.0543C19.6492 11.1659 19.8928 11.4345 19.9724 11.7662C20.052 12.0978 19.9569 12.4472 19.7204 12.693L10.0954 22.693C9.74001 23.0621 9.16228 23.1033 8.75853 22.7877C8.35501 22.4721 8.25586 21.9023 8.52806 21.4684L12.2341 15.5631L4.67259 12.9449C4.35037 12.8333 4.10668 12.5646 4.02708 12.233C3.94753 11.9015 4.04273 11.552 4.27904 11.3063L13.904 1.30626ZM6.80443 11.566L15.2224 14.4811L17.1941 12.4322L8.77611 9.51719L6.80443 11.566Z" fill={color}/>
    </svg>
  );
};

export default LightningBolt;
