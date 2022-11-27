import { productSchema } from './schema/product';

export const validationSubmit = <T>(data: {
  [Key in keyof T]: any;
}): boolean => {
  let key: keyof typeof data;
  for (key in data) {
    const err = data[key];
    if (err !== '') return false;
  }
  return true;
};
export const schema = {
  product: productSchema,
};
