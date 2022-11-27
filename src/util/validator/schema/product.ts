import Validator from 'validasi';

export const productSchema = {
  brand: Validator.string()
    .alphaNum()
    .required('Brand tidak boleh kosong')
    .max(70),
  name: Validator.string()
    .alphaNum('Nama produk harus alfabet atau angka')
    .required('Nama produk tidak boleh kosong')
    .max(70),
  category: Validator.string().required('Kategori tidak boleh kosong'),
  isNew: Validator.string().required('Kondisi produk tidak boleh kosong'),
};
