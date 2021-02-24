import { BidsDataType } from "../commonTypes";


export type BidsCardType = {
  data: BidsCardDataType | null;
  isLoaded: boolean;
  error: Error | null
}

export interface BidsCardDataType extends BidsDataType {
  lifetimeItems: BidsCardDataTypeLifetimeItems[]
}

export type BidsCardDataTypeLifetimeItems = {
  comment: string;
  createdAt: string;
  fieldName: null;
  id: number;
  lifetimeType: number;
  newFieldValue: null;
  oldFieldValue: null;
  userName: string;
}
