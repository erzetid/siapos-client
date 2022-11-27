// Copyright (c) 2022 CV ERZET ID
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { EInventoryItemStatus, EPaymentType, EProductType, IInventoryItem } from '@siapos/interface';

export const inventoryItem: IInventoryItem[] = [
  {
    brand: 'Lenovo',
    code: 'CODE',
    createdAt: 21131313131,
    description: 'Descrip',
    isNew: true,
    id: '00',
    name: 'Name dfsbfdhfgjfj fgfgjfgjfgj dfgfdgjfgj dgfgjfgjfg',
    categoryId: '1',
    dimension: { height: 0, length: 0, weight: 0 },
    discuss: {
      createdAt: 224,
      customer: { id: 'jbajjb', officeRefId: '' },
      id: 'asfsf',
      isMain: true,
      replies: [],
      review: '',
      updatedAt: 4446,
    },
    images: [],
    information: '',
    location: '',
    officeRefId: '',
    sellPrice: 10000,
    setting: {
      isShow: true,
      linkPayment: '',
      paymentType: EPaymentType.WHATSAPP,
    },
    status: EInventoryItemStatus.ACTIVATED,
    type: EProductType.INVENTORY,
    updatedAt: 3133131,
  },
];
