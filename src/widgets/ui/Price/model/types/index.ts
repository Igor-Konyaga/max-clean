import { ReactNode } from 'react';

export type PriceTab = {
  id: number;
  value: string;
  label: string;
  content: (isEvan: boolean) => ReactNode;
};

export type PriceItem = {
  id: number;
  label: string;
  price: number;
};
