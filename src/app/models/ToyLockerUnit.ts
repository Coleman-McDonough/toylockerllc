// models/ToyLockerUnit.ts

export interface ToyLockerUnit {
  _id?: string;
  buildingLetter: string;
  gridId: number;
  unitNumber: string;
  renterName: string;
  isRented: boolean;
  needsCleaning: boolean;
  isVip: boolean;
  dimensions: string;
  leaseEndDate: string;
  hasSigned: boolean;
  hasPaid: boolean;
  givenThirtyDays: boolean;
  lockCode: string;
  isReserved: boolean;
  moveInDate: string;
  phoneNumber: string;

  // Define other fields as necessary
}

export interface UpdateUnitData {
  renterName?: string;
  isRented?: boolean;
  needsCleaning?: boolean;
  isVip?: boolean;
  dimensions?: string;
  leaseEndDate?: string;
  hasSigned?: boolean;
  hasPaid?: boolean;
  givenThirtyDays?: boolean;
  lockCode?: string;
  isReserved?: boolean;
  moveInDate?: string;
  phoneNumber?: string;
  // Define other fields as necessary
}
