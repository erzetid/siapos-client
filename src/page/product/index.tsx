import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import DataTable, { ExpanderComponentProps, TableColumn } from 'react-data-table-component';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineForm, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { IProductTable } from '../../adapter/ProductAdapter';
import Container from '../../layout/Container';
import Content from '../../layout/Content';

// import {
//   IProductTable,
//   dummyProduct,
//   dummyProduct1,
// } from '../../adapter/ProductAdapter';
// import ProductAdapter from '../../adapter/ProductAdapter';
const columns: TableColumn<IProductTable>[] = [
  {
    name: 'KODE',
    selector: (row) => row.code,
    maxWidth: '120px',
  },
  {
    name: 'NAMA',
    selector: (row) => row.name,
    maxWidth: '250px',
  },
  {
    name: 'HARGA',
    selector: (row) => row.price,
    maxWidth: '200px',
  },
  {
    name: 'STOK',
    selector: (row) => row.stock,
    maxWidth: '100px',
  },
  {
    name: 'STATUS',
    maxWidth: '150px',
    cell: (row) => <Text color={row.status.color}>{row.status.text}</Text>,
  },
  {
    name: 'AKSI',
    cell: (r) => (
      <Stack spacing={1} direction={'row'}>
        <Button
          leftIcon={<AiOutlineEdit />}
          colorScheme="cyan"
          variant="solid"
          color={'white'}
          size={'xs'}
          onClick={() => console.log(r.code)}
        >
          Edit
        </Button>
        <Button
          leftIcon={<AiOutlineDelete />}
          colorScheme="red"
          variant="solid"
          color={'white'}
          size={'xs'}
          onClick={() => console.log(r.code)}
        >
          Hapus
        </Button>
      </Stack>
    ),
    button: true,
  },
];

// const DATA_DUMMY: IProductTable[] = [
//   {
//     category: "Elektronik",
//     code: "001-DT",
//     id: "0001",
//     name: "Kipas Angin",
//     price: "Rp. 250,000,-",
//     status: "Active",
//     thumbnail: "https://bit.ly/dan-abramov",
//     stock: 50,
//   },
//   {
//     category: "Elektronik",
//     code: "002-DT",
//     id: "0002",
//     name: "Magic Com",
//     price: "Rp. 550,000,-",
//     status: "Active",
//     stock: 30,
//   },
//   {
//     category: "Elektronik",
//     code: "003-DT",
//     id: "0003",
//     name: "TV 21 inch",
//     price: "Rp. 1.750,000,-",
//     status: "Not Active",
//     stock: 21,
//   },
// ];

const ExpandTableProduct: FC<ExpanderComponentProps<IProductTable>> = ({
  data,
}) => {
  return (
    <Stack ml={4} p={2} flexDirection={'row'} alignItems={'center'}>
      <Image
        boxSize="150px"
        objectFit="cover"
        src={data.thumbnail}
        alt="Product image"
        fallbackSrc="https://via.placeholder.com/150"
      />
      <Box px={4}>
        <Stack mb={2} spacing={'-0.5'}>
          <Text fontSize={12} fontWeight={'bold'} color={'blue.500'}>
            {data.category.toUpperCase()}
          </Text>
          <Text>{data.code}</Text>
          <Text fontSize={18} fontWeight={'bold'}>
            {data.name.toUpperCase()}
          </Text>
          <Text fontSize={12} fontWeight={'bold'}>
            {data.brand}
          </Text>
          <Text>{data.price}</Text>
          <Text>Stok: {data.stock}</Text>
          <Text>
            <Button
              size={'xs'}
              variant={'outline'}
              fontSize={10}
              colorScheme={data.status.color}
              pointerEvents={'none'}
              disabled={data.status.disabled}
            >
              {data.status.text}
            </Button>
          </Text>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <Button
            leftIcon={<AiOutlineShoppingCart color="white" />}
            colorScheme="yellow"
            variant="solid"
            boxShadow={'sm'}
            size={'sm'}
          >
            <Text color={'white'}>Jual</Text>
          </Button>
          <Button
            leftIcon={<AiOutlineForm color="white" />}
            colorScheme="purple"
            variant="solid"
            boxShadow={'sm'}
            size={'sm'}
          >
            <Text color={'white'}>Stok</Text>
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

const Product = () => {
  return (
    <Container title="Produk">
      <Stack direction="row" spacing={4} justifyContent={'flex-end'} my={2}>
        <Link to={'add'}>
          <Button
            leftIcon={<AiOutlinePlus size={18} color="white" />}
            colorScheme="green"
            variant="solid"
            boxShadow={'md'}
            size={'sm'}
          >
            <Text color={'white'}>Tambah Produk</Text>
          </Button>
        </Link>
      </Stack>
      <Content title="Tabel Produk">
        <DataTable
          columns={columns}
          data={ProductAdapter.setTable([dummyProduct, dummyProduct1])}
          selectableRows
          onSelectedRowsChange={({ selectedRows }) =>
            console.table(selectedRows)
          }
          customStyles={{
            headCells: { style: { fontWeight: 'bold', fontSize: 12 } },
          }}
          expandableRows
          expandableRowsComponent={ExpandTableProduct}
          pagination
        />
      </Content>
    </Container>
  );
};

export default Product;
