import { PriceListCard } from '../../ui/PriceTabs/ui/PriceListCard/ui/PriceListCard';
import { PriceItem, PriceTab } from '../types';

const furniturePrice: PriceItem[] = [
  { id: 1, label: 'Диван', price: 1000 },
  { id: 2, label: 'Диван', price: 1000 },
  { id: 3, label: 'Диван', price: 1000 },
  { id: 4, label: 'Диван', price: 1000 },
  { id: 5, label: 'Диван', price: 1000 },
  { id: 6, label: 'Диван', price: 1000 },
  { id: 7, label: 'Диван', price: 1000 },
];
const carpetPrice: PriceItem[] = [
  { id: 1, label: 'Килим', price: 1000 },
  { id: 2, label: 'Килим', price: 1000 },
  { id: 3, label: 'Килим', price: 1000 },
  { id: 4, label: 'Килим', price: 1000 },
  { id: 5, label: 'Килим', price: 1000 },
  { id: 6, label: 'Килим', price: 1000 },
  { id: 7, label: 'Килим', price: 1000 },
];
const cleaningPrice: PriceItem[] = [
  { id: 1, label: 'Прибирання', price: 1000 },
  { id: 2, label: 'Прибирання', price: 1000 },
  { id: 3, label: 'Прибирання', price: 1000 },
  { id: 4, label: 'Прибирання', price: 1000 },
  { id: 5, label: 'Прибирання', price: 1000 },
  { id: 6, label: 'Прибирання', price: 1000 },
  { id: 7, label: 'Прибирання', price: 1000 },
];

export const priceTabs: PriceTab[] = [
  {
    id: 1,
    value: 'furniture',
    label: 'Хімчистка меблів',
    content: (isEven: boolean) => (
      <PriceListCard
        title="Хімчистка меблів"
        data={furniturePrice}
        isEven={isEven}
      />
    ),
  },
  {
    id: 2,
    value: 'carpet',
    label: 'Прання килимів',
    content: (isEven: boolean) => (
      <PriceListCard
        title="Прання килимів"
        data={carpetPrice}
        isEven={isEven}
      />
    ),
  },
  {
    id: 3,
    value: 'cleaning',
    label: 'Клінінг',
    content: (isEven: boolean) => (
      <PriceListCard title="Клінінг" data={cleaningPrice} isEven={isEven} />
    ),
  },
];
