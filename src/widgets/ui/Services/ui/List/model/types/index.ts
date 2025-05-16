import { StaticImageData } from 'next/image';

export type Service = {
  id: number;
  title: string;
  description: string;
  img: StaticImageData;
};
