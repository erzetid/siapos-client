import { Button, Icon, Stack, useColorModeValue } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import CheckValue from 'validasi';

import FormInput from '../../../components/Form/Input';
import FormSelect from '../../../components/Form/Select';
import FormTextArea from '../../../components/Form/TextArea';
import Container from '../../../layout/Container';
import Content from '../../../layout/Content';
import { schema, validationSubmit } from '../../../util/validator';

const AddProduct = () => {
  // const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [data, setData] = useState({
    brand: '',
    name: '',
    category: '',
    isNew: '',
  });
  const [errorInput, setErrorInput] = useState({
    brand: '',
    name: '',
    category: '',
    isNew: '',
  });
  const [btnSubmit, setBtnSubmit] = useState<boolean>(false);

  useEffect(() => {
    // ValidationEffect
    const _err = new CheckValue<typeof schema.product>()
      .object(schema.product)
      .validate(data);
    setErrorInput(_err);
    setBtnSubmit(!validationSubmit(_err));
  }, [data]);

  const handleInputs = useCallback(
    (text: string, field: keyof typeof data) => {
      const _data = { ...data, [field]: text };
      setData(_data);
    },
    [data]
  );

  const validation = (message: string): boolean => message !== '';
  const onSubmit = () => {
    // if (validationSubmit(errorInput)) console.log("OK");
  };

  return (
    <Container title="Produk" sub="Tambah Produk" link="/product">
      <Content title={'Foto Produk'}>
        <Stack
          direction={['column', 'row']}
          spacing={4}
          justifyContent={'center'}
          alignItems={'center'}
          p={5}
        >
          <Stack>
            <Stack
              borderColor={'green'}
              borderWidth={1}
              p={1}
              bg={useColorModeValue('blackAlpha.200', 'blackAlpha.200')}
              justifyContent={'center'}
              alignItems={'center'}
              w={32}
              h={32}
            >
              {/* {isUploaded?} */}
              <Icon
                as={AiOutlineCamera}
                w={12}
                height={12}
                color={useColorModeValue('blackAlpha.700', 'blackAlpha.700')}
              />
            </Stack>
            <Button
              size={'xs'}
              bg={useColorModeValue('cyan.400', 'cyan.400')}
              color={useColorModeValue('white', 'black')}
            >
              {'Pilih foto'}
            </Button>
          </Stack>
          <Stack>
            <Stack
              borderColor={'green'}
              borderWidth={1}
              p={1}
              bg={useColorModeValue('blackAlpha.200', 'blackAlpha.200')}
              justifyContent={'center'}
              alignItems={'center'}
              w={32}
              h={32}
            >
              {/* {isUploaded?} */}
              <Icon
                as={AiOutlineCamera}
                w={12}
                height={12}
                color={useColorModeValue('blackAlpha.700', 'blackAlpha.700')}
              />
            </Stack>
            <Button
              size={'xs'}
              bg={useColorModeValue('cyan.400', 'cyan.400')}
              color={useColorModeValue('white', 'black')}
            >
              {'Pilih foto'}
            </Button>
          </Stack>
          <Stack>
            <Stack
              borderColor={'green'}
              borderWidth={1}
              p={1}
              bg={useColorModeValue('blackAlpha.200', 'blackAlpha.200')}
              justifyContent={'center'}
              alignItems={'center'}
              w={32}
              h={32}
            >
              {/* {isUploaded?} */}
              <Icon
                as={AiOutlineCamera}
                w={12}
                height={12}
                color={useColorModeValue('blackAlpha.700', 'blackAlpha.700')}
              />
            </Stack>
            <Button
              size={'xs'}
              bg={useColorModeValue('cyan.400', 'cyan.400')}
              color={useColorModeValue('white', 'black')}
            >
              {'Pilih foto'}
            </Button>
          </Stack>
          <Stack>
            <Stack
              borderColor={'green'}
              borderWidth={1}
              p={1}
              bg={useColorModeValue('blackAlpha.200', 'blackAlpha.200')}
              justifyContent={'center'}
              alignItems={'center'}
              w={32}
              h={32}
            >
              {/* {isUploaded?} */}
              <Icon
                as={AiOutlineCamera}
                w={12}
                height={12}
                color={useColorModeValue('blackAlpha.700', 'blackAlpha.700')}
              />
            </Stack>
            <Button
              size={'xs'}
              bg={useColorModeValue('cyan.400', 'cyan.400')}
              color={useColorModeValue('white', 'black')}
            >
              {'Pilih foto'}
            </Button>
          </Stack>
          <Stack>
            <Stack
              borderColor={'green'}
              borderWidth={1}
              p={1}
              bg={useColorModeValue('blackAlpha.200', 'blackAlpha.200')}
              justifyContent={'center'}
              alignItems={'center'}
              w={32}
              h={32}
            >
              {/* {isUploaded?} */}
              <Icon
                as={AiOutlineCamera}
                w={12}
                height={12}
                color={useColorModeValue('blackAlpha.700', 'blackAlpha.700')}
              />
            </Stack>
            <Button
              size={'xs'}
              bg={useColorModeValue('cyan.400', 'cyan.400')}
              color={useColorModeValue('white', 'black')}
            >
              {'Pilih foto'}
            </Button>
          </Stack>
        </Stack>
      </Content>
      <Content title={'Informasi Produk'}>
        <FormInput
          required={true}
          label="Nama Produk"
          maxLength={70}
          isError={validation(errorInput.name)}
          message={errorInput.name}
          onChangeText={(t) => handleInputs(t, 'name')}
        />
        <Stack direction={['column', 'row']}>
          <FormInput
            required={true}
            label="Kode Produk"
            maxLength={70}
            isError={validation(errorInput.brand)}
            message={errorInput.brand}
            onChangeText={(t) => handleInputs(t, 'brand')}
          />
          <FormInput
            required={true}
            label="Brand/merk"
            maxLength={70}
            isError={validation(errorInput.brand)}
            message={errorInput.brand}
            onChangeText={(t) => handleInputs(t, 'brand')}
          />
        </Stack>
        <Stack direction={['column', 'row']}>
          <FormSelect
            label="Kategori"
            placeholder="Pilih Kategori"
            onChangeText={(t) => handleInputs(t, 'category')}
            isError={validation(errorInput.category)}
            message={errorInput.category}
            onEmptied={() => handleInputs('', 'category')}
          >
            <option value="option1">Elektronik</option>
            <option value="option2">Komputer</option>
            <option value="option3">Lainnya</option>
          </FormSelect>
          <FormSelect
            label="Kondisi"
            placeholder="Pilih kondisi"
            onChangeText={(t) => handleInputs(t, 'isNew')}
            isError={validation(errorInput.isNew)}
            message={errorInput.isNew}
            onEmptied={() => handleInputs('', 'isNew')}
          >
            <option value={'true'}>Baru</option>
            <option value={'false'}>Bekas</option>
          </FormSelect>
        </Stack>
        <Stack direction={['column', 'row']}>
          <FormInput
            required={true}
            label="Harga Beli (Rp)"
            type={'number'}
            maxLength={70}
            isError={validation(errorInput.brand)}
            message={errorInput.brand}
            onChangeText={(t) => handleInputs(t, 'brand')}
          />
          <FormInput
            label="Harga Beli PPn (Rp)"
            maxLength={70}
            onChangeText={(t) => handleInputs(t, 'brand')}
            border={'none'}
            isReadOnly={true}
            value={'Rp 0,-'}
          />
          <FormInput
            required={true}
            label="Harga Jual (Rp)"
            type={'number'}
            maxLength={70}
            isError={validation(errorInput.brand)}
            message={errorInput.brand}
            onChangeText={(t) => handleInputs(t, 'brand')}
          />
          <FormInput
            label="Harga Jual PPn (Rp)"
            maxLength={70}
            onChangeText={(t) => {}}
            border={'none'}
            isReadOnly={true}
            value={'Rp 0,-'}
          />
          <FormInput
            label="Diskon (%)"
            type={'number'}
            maxLength={70}
            isError={validation(errorInput.brand)}
            message={errorInput.brand}
            onChangeText={(t) => handleInputs(t, 'brand')}
          />
        </Stack>
        <FormTextArea
          label="Deskripsi"
          onChangeText={(e) => console.log(e)}
          placeholder="Masukan deskripsi produk disini ...."
          minHeight={180}
          isError={validation(errorInput.brand)}
          message={errorInput.brand}
        />
        <Stack direction={['column', 'row']}>
          <FormInput
            label="Panjang"
            type={'number'}
            maxLength={70}
            isError={validation(errorInput.brand)}
            message={errorInput.brand}
            onChangeText={(t) => handleInputs(t, 'brand')}
          />
          <FormInput
            label="Lebar"
            type={'number'}
            maxLength={70}
            isError={validation(errorInput.brand)}
            message={errorInput.brand}
            onChangeText={(t) => handleInputs(t, 'brand')}
          />
          <FormInput
            label="Tinggi"
            type={'number'}
            maxLength={70}
            isError={validation(errorInput.brand)}
            message={errorInput.brand}
            onChangeText={(t) => handleInputs(t, 'brand')}
          />
          <FormInput
            label="Berat (gram)"
            type={'number'}
            maxLength={70}
            isError={validation(errorInput.brand)}
            message={errorInput.brand}
            onChangeText={(t) => handleInputs(t, 'brand')}
          />
        </Stack>
        <FormTextArea
          label="Catatan"
          onChangeText={(e) => console.log(e)}
          placeholder="Masukan catatan produk disini ...."
          minHeight={120}
          isError={validation(errorInput.brand)}
          message={errorInput.brand}
        />
        <Button
          onClick={onSubmit}
          disabled={btnSubmit}
          backgroundColor={!btnSubmit ? 'cyan.400' : ''}
          color={!btnSubmit ? 'white' : 'black'}
        >
          Simpan
        </Button>
      </Content>
    </Container>
  );
};

export default AddProduct;
