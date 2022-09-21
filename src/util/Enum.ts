export enum EStatus {
  CREATED = 0,
  UPDATED = 1,
  ACTIVATED = 2,
  NONACTIVATED = 3,
  DELETED = 4,
}

export enum ELog {
  LOGIN = 5,
  LOGOUT = 6,
}

export enum ERole {
  ADMINISTRATOR = 17,
  SELLER = 1,
  BUYER = 2,
}

export enum EPaymentType {
  MARKET_PLACE = 0,
  WHATSAPP = 1,
  PAYMENT_GATEWAY = 2,
}

export enum EOrderType {
  MARKET_PLACE = 0,
  DIRECT = 1,
  ONLINE = 2,
}

export enum EOrderStatus {
  UNPAID = 0,
  PAID = 1,
  UNCONFIRMED = 2,
  CONFIRMED = 3,
  SHIPPING = 4,
  DELIVERY = 5,
  DONE = 6,
}
