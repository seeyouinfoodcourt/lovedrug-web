import React from 'react';

type PriceProps = {
  value: number;
  currency: 'EUR' | 'USD' | 'DKK';
  className?: string;
};

export const Price = ({ value, currency, className }: PriceProps) => {
  return <div className={className}>{value}</div>;
};
