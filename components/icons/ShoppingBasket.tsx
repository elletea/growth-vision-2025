import React from 'react';

export interface ShoppingBasketProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ShoppingBasket: React.FC<ShoppingBasketProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.3692 2.72413C11.7619 2.40378 12.3409 2.42637 12.7071 2.79249L17.9141 7.99952H22C22.3116 7.99952 22.6058 8.14451 22.7949 8.3921C22.984 8.63967 23.0467 8.96165 22.9649 9.26222L19.9649 20.2622C19.8462 20.6973 19.451 20.9995 19 20.9995H5.00003C4.54908 20.9995 4.15384 20.6973 4.03518 20.2622L1.03518 9.26222C0.953346 8.96165 1.01601 8.63967 1.2051 8.3921C1.39429 8.14451 1.68842 7.99952 2.00003 7.99952H6.08596L11.293 2.79249L11.3692 2.72413ZM5.7637 18.9995H18.2364L20.6905 9.99952H3.3096L5.7637 18.9995ZM8.91409 7.99952H15.086L12 4.91358L8.91409 7.99952Z" fill={color}/>
    </svg>
  );
};

export default ShoppingBasket;
