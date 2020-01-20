import {Image} from './image.model';

export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  height: string;
  temperature: string;
  lightNeed: string;
  nutrition: string;
  ph: string;
  images: Image[];
}
